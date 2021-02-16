import * as fs from 'fs';
import * as path from 'path';
import { Container, inject } from 'sahara';
import { HttpServer } from '@apso/server';
import {promisify} from 'util';

const readdir = promisify(fs.readdir);
const filePath = 'controllers';
export default async (container: Container): Promise<void> => {
    const appDir: string = await container.resolve('AppDir');
    const filesDir = path.join(appDir, filePath);
    const files: any = await readdir(filesDir);
    const filteredFiles = files.filter((file: any) => /\.(ts|js)$/.test(file))

    const registerController = <T extends HttpServer.BaseController>(ctor: new(...args: any[]) => T) => {
        container.registerType(ctor, {
            injections: [
                inject.method<T>('setContext'),
            ],
        });
    };
    
    for (const file of filteredFiles) {
        const fileName = path.join(filesDir, file);
        const { default: Ctor } = eval(`require('${fileName}');`);

        registerController(Ctor)
    }
}