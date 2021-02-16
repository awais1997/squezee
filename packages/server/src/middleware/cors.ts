// res.header 'Access-Control-Allow-Origin', '*'
// res.header 'Access-Control-Allow-Credentials', true
// res.header 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'
// res.header 'Access-Control-Allow-Headers', 'Content-Type'
import {default as cors, CorsOptions} from 'cors';
import { GoaApplication } from 'goa';
import { Container } from 'sahara';
import { URL } from 'url';
import Looger from 'looger';
import { Config } from '../cfg';

export default async (container: Container): Promise<void> => {
    const app = container.resolveSync<GoaApplication>('App');
    const logger = container.resolveSync<Looger>('Logger');
    const config = container.resolveSync<Config>('Config');
    app.use((req, res, next) =>{
        const reqUrl = req.url.substring(0, 200);
        const userAgent = req.headers['user-agent'];

        const corsOptions: CorsOptions = {
            methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
            maxAge: 300,
            exposedHeaders: ['location', 'x-app-version'],
            allowedHeaders: [
                'authorization',
                'referer',
                'x-requested-with',
                'x-device-token',
                'content-type', // required for application/json
            ],
            origin: (origin: string, callback: (err: Error | null, allow: boolean) => void) => {
                if (!origin) {
                    callback(null, false);
                    return;
                }

                let url: URL;

                const prefix = `[cors] url="${reqUrl}" userAgent="${userAgent}"`;

                try {
                    url = new URL(origin);
                } catch (e) {
                    logger.warn(`${prefix} invalid origin: ${origin}`);
                    callback(null, false);
                    return;
                }

                if (!url.hostname) {
                    logger.warn(`${prefix} origin does not have hostname: ${origin}`);
                    callback(null, false);
                    return;
                }

                const allowedOrigins = config.app.allowedOrigins
                    .split(',')
                    .map((str) => {
                        const pattern = str.trim();
                        try {
                            return new RegExp(`^${pattern}$`, 'i');
                        } catch (e) {
                            logger.error(`Invalid CORS origin regex: ${pattern}`);
                            return null;
                        }
                    })
                    .filter((item): item is RegExp => item instanceof RegExp);
                const isAllowed = allowedOrigins.some(regex => regex.test(url.hostname));
                if (!isAllowed) {
                    logger.warn(`${prefix} disallowed origin: ${origin}`);
                }

                callback(null, isAllowed);
            },
            credentials: true,
        };

        cors(corsOptions)(req, res, next);
    })
    // app.use(cors({
    //     origin: "http://localhost:3200",
    //     credentials: true
    // }));
};