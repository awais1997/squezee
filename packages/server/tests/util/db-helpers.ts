import * as path from 'path';
import { Container } from 'sahara';
import User from '../../src/entities/User';
import Config from '../../src/cfg';
import { Core } from '@apso/server';
import { Connection, ConnectionOptions } from 'typeorm'
import { coreConfigurators } from '../../src';

export const createUserData = (
    data: Partial<User> = {},
): Partial<User> => {
    return {
        name: `Tony Stark ${Date.now()}`,
        email: `tony-baloney+${Date.now()}@example.com`,
        ...data,
    };
};

export class TestContainerContext {
    public readonly container: Container;

    private tearDownThunks: Array<() => void> = [];

    public constructor(container: Container) {
        this.container = container;
    }

    public tearDown() {
        this.tearDownThunks.forEach(thunk => thunk());
        this.tearDownThunks = [];
    }

    public async resolve<T>(key: string | (new (...args: any[]) => T)): Promise<T> {
        return this.container.resolve<T>(key);
    }

    public resolveSync<T>(key: string | (new (...args: any[]) => T)): T {
        return this.container.resolveSync<T>(key);
    }

    public connection(): Connection {
        return this.resolveSync<Connection>('DbConnection');
    }

    public async mockContainerObject<T, TArgs extends any[] = any[], TReturn = any>(
        key: (new (...args: any[]) => T),
        createStub: (instance: T) => sinon.SinonStub<TArgs, TReturn>,
    ): Promise<sinon.SinonStub<TArgs, TReturn>> {
        const instance = await this.resolve(key);
        const stub = createStub(instance);
        this.container.registerInstance(instance);
        this.tearDownThunks.push(() => {
            this.container.registerType(key);
            stub.restore();
        });
        return stub;
    }

    public mockContainerInstance<T, TArgs extends any[] = any[], TReturn = any>(
        key: string,
        createStub: (instance: T) => sinon.SinonStub<TArgs, TReturn>,
    ): sinon.SinonStub<TArgs, TReturn> {
        const instance = this.resolveSync<T>(key);
        const stub = createStub(instance);
        this.container.registerInstance(instance, key);
        this.tearDownThunks.push(() => {
            stub.restore();
        });
        return stub;
    }

    public async mockContainerFactory<T, TArgs extends any[] = any[], TReturn = any>(
        key: string,
        createStub: (instance: T) => sinon.SinonStub<TArgs, TReturn>,
    ): Promise<sinon.SinonStub<TArgs, TReturn>> {
        const instance = await this.resolve<T>(key);
        const registration = this.container.registrations[key];
        const factory = (registration as any).factory;
        if (!factory) {
            throw new Error(`${key} is not registerd as a factory`);
        }
        const stub = createStub(instance);
        this.container.registerInstance(instance, key);
        this.tearDownThunks.push(() => {
            this.container.registerFactory(
                factory,
                key,
                registration.lifetime,
            );
            stub.restore();
        });
        return stub;
    }

    public async createUser(data?: Partial<User>): Promise<User> {
        const userData = createUserData(data);
        return this.connection().manager.create<User>(User, userData);
    }
    private getEntities() {
        const entities: { name: string, tableName: string }[] = [];
        const entityMetadatas = this.connection().entityMetadatas;
        entityMetadatas.forEach(
            x => entities.push({ name: x.name, tableName: x.tableName })
        );
        return entities;
    }
    public async clearData(): Promise<void> {
        const entities: { name: string, tableName: string }[] = this.getEntities();
        try {
            for (const entity of entities) {
                const repository = await this.connection().getRepository(entity.name);
                await repository.query(`TRUNCATE TABLE "${entity.tableName}" CASCADE;`);
            }
        } catch (error) {
            console.error(new Error(`ERROR: Cleaning test db: ${error}`));
        }
    }
}

export const createContainerContext = async (): Promise<TestContainerContext> => {
    const container = new Container();

    const fakeDbConfig: Partial<ConnectionOptions> = {
        schema: `apso_test`,
    }
    const config = {
        ...Config,
        database: {
            ...Config.database,
            ...fakeDbConfig
        }
    }
    container
        .registerInstance(path.join(__dirname, '../../src'), 'AppDir')
        .registerInstance(config, 'Config')
        .registerInstance(Config.app.name, 'AppName');


    await Core.configure(coreConfigurators, container)

    return new TestContainerContext(container);
};
