import * as fs from 'fs';
import * as path from 'path';
import { Container } from 'sahara';
import {promisify} from 'util';

const readdir = promisify(fs.readdir);
const filePath = 'handlers';
export default async (container: Container): Promise<void> => {
    const appDir: string = await container.resolve('AppDir');
    const filesDir = path.join(appDir, filePath);
    const files: any = await readdir(filesDir);
    const filteredFiles = files.filter((file: any) => /\.(ts|js)$/.test(file));
    const socketServer: any = await container.resolve('SocketServer');

    socketServer.on('connection', async (socket: any) => {
        for (const file of filteredFiles) {
            const fileName = path.join(filesDir, file);
            const handlerFile = eval(`require('${fileName}');`);
            await handlerFile(socket);
        }
    });
}