import * as csurf from 'csurf';
import cors from 'cors';
import { GoaApplication } from 'goa';
import { Container } from 'sahara';

export default async (container: Container): Promise<void> => {
    const app = container.resolveSync<GoaApplication>('App');
    app.use(csurf());
    app.use(cors());
    app.use((req, res, next) => {
        res.locals.csrfToken = req.csrfToken();
        next();
    });
};