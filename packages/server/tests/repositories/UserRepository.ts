import { expect } from 'chai';
import User from '../../src/entities/User'
import UserRepository from '../../src/repositories/UserRepository'
import {
    createContainerContext,
    TestContainerContext
} from '../util/db-helpers';

describe('UserRepository', async () => {
    let testContext: TestContainerContext;
    let userRepository: UserRepository

    before(async () => {
        testContext = await createContainerContext();
        userRepository = await testContext.resolve(UserRepository);
        await testContext.clearData();
    });

    after(async () => {
        await testContext.clearData();
    });

    describe('storing a User', () => {
        let user: User;
        it('can create a new user', async () => {
            const userData: Partial<User> = {
                name: `Peter ${Date.now()} Parker`,
                email: `spideyluvsmaryjane+${Date.now()}@parker.com`,
            };

            user = userRepository.create(userData)
            user = await userRepository.save(user)
            expect(user.name).to.be.eql(user.name);
            expect(user.email).to.be.eql(user.email);
            expect(user.createdAt).to.be.instanceOf(Date);
            expect(user.updatedAt).to.be.instanceOf(Date);
        });
        it('can update a new user', async () => {
            const newEmail = `spideyandgwen4eva+${Date.now()}@parker.com`;
            const existingUserData = {...user};
            user.email = newEmail;
            user = await userRepository.save(user);
            expect(user.name).to.be.eql(existingUserData.name);
            expect(user.email).to.be.eql(newEmail);
            expect(user.createdAt).to.be.eql(existingUserData.createdAt);
            expect(user.updatedAt).to.be.greaterThan(existingUserData.updatedAt!);
        });
    })
    describe('finding Users', () => {
        let user: User;
        
        const expectUser = (
            expectedUser: Partial<User> | null,
            actualUser: Partial<User>,
        ) => {
            expect(expectedUser).to.not.equal(null);
            expect(actualUser.name).to.be.eql(expectedUser!.name);
            expect(actualUser.email).to.be.eql(expectedUser!.email);
        };

        before(async () => {
            user = await userRepository.create({
                name: `user_${Date.now()}`,
                email: `user_${Date.now()}@example.com`
            });
            user = await userRepository.save(user)
        });

        it('can find a user by internal id', async () => {
            const result = await userRepository.findById(user.id);
            expectUser(result!, user);
        });

        it('can find a user by email', async () => {
            const result = await userRepository.findByEmail(user.email);
            expectUser(result!, user);
        });
    });
});
