import * as bodyParser from 'body-parser';
import { GoaApplication } from 'goa';
import { Container } from 'sahara';

export default async (container: Container): Promise<void> => {
    const app = container.resolveSync<GoaApplication>('App');
    const postLimit = 1024 * 1024;
    app.use(bodyParser.json({ limit: postLimit }));
    app.use(bodyParser.urlencoded({ extended: true, limit: postLimit }));
};