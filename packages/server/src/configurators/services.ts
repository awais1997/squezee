import * as fs from 'fs';
import Logger = require('looger');
import * as path from 'path';
import { Container } from 'sahara';

const filePath = 'services';
export default async (container: Container): Promise<void> => {
    const appDir: string = await container.resolve('AppDir');
    const filesDir = path.join(appDir, filePath);
    const log: Logger = container.resolveSync('Log');

    fs.readdir(filesDir, (err, files) => {
        if (err) {
            log.error(`Failed to read dir "${filesDir}"`, err);
            throw new Error(err.message);
        }

        files
            .filter((file) => /\.(ts|js)$/.test(file))
            .forEach((file) => {
                const fileName = path.join(filesDir, file);
                // const {default: Ctor} = require(fileName);
                const { default: Ctor } = eval(`require('${fileName}');`);
                container.registerType(Ctor);
            });
    });
}