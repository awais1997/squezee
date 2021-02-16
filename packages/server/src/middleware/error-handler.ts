import { GoaApplication } from 'goa';
import Logger from 'looger';
import { Container } from 'sahara';
import * as express from 'express';

export default async (container: Container): Promise<void> => {
    const app: GoaApplication = await container.resolve('App');
    const log: Logger = await container.resolve('Log');

    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        log.error('Express error occurred', err);
        const statusCode = err.statusCode || 500;
        const body: any = err.body || {
            type: 'error',
            code: 'Internal',
            message: 'Internal server error.',
        };
        
        res.status(statusCode);
        res.json(body);
    });
};
