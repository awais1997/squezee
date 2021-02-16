import * as fs from 'fs';
import * as path from 'path';
import { Container } from 'sahara';
import {promisify} from 'util';

const readdir = promisify(fs.readdir);
const filePath = 'routes';
export default async (container: Container): Promise<void> => {
    const appDir: string = await container.resolve('AppDir');
    const filesDir = path.join(appDir, filePath);
    const files: any = await readdir(filesDir);
    const filteredFiles = files.filter((file: any) => /\.(ts|js)$/.test(file))
    console.log('Configuring Routes...', filteredFiles)
    for (const file of filteredFiles) {
        const fileName = path.join(filesDir, file);
        // const {default: routerFile} = require(fileName);
        const { default: routerFile } = eval(`require('${fileName}');`);
        routerFile(container)
    }
}