// import { GoaApplication } from 'goa';
// import Logger = require('looger');
// import { Container } from 'sahara';

// export default async (container: Container): Promise<void> => {
//     const log: Logger = await container.resolve('Log');
//     const config: {
//         session: {
//             [key: string]: string
//         }
//     } = container.resolveSync('Config');
//     const sessionConfig = config.session;

//     if (!sessionConfig || !sessionConfig.key || !sessionConfig.secret || !sessionConfig.ttl) {
//         log.warn('missing/invalid session config block');
//         return;
//     }

//     if (!container.isRegistered('RedisClient')) {
//         throw new Error('missing valid redisClient configuration');
//     }

//     container.registerInstance(sessionConfig, 'SessionConfig');

//     const connectRedis = require('connect-redis');
//     const expressSession = require('express-session');
//     const redisClient = await container.resolve('RedisClient');

//     const app: GoaApplication = await container.resolve('App');
//     const RedisStore = connectRedis(expressSession);

//     if (!sessionConfig.override) {
//         app.use(expressSession({
//             cookie: sessionConfig.cookie,
//             name: sessionConfig.key,
//             proxy: sessionConfig.proxy,
//             resave: sessionConfig.resave,
//             saveUninitialized: sessionConfig.saveUninitialized,
//             secret: sessionConfig.secret,
//             store: new RedisStore({
//                 client: redisClient,
//                 ttl: sessionConfig.ttl
//             })
//         }));
//     }
// };