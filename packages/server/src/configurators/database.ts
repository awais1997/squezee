
import { Database } from '@apso/server'
import * as path from 'path';
import { Container } from 'sahara';

export default async (container: Container): Promise<void> => {
    const appDir: string = await container.resolve('AppDir');
    console.log('Loaded AppDir ::: ', appDir)
    const entityFolder = path.join(appDir, 'entities');
    const repoFolder = path.join(appDir, 'repositories');
    
    await Database.ConfigureLambda(entityFolder, repoFolder)(container);
}