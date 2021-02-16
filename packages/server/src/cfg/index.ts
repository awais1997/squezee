import env, {DotenvParseOutput} from 'dotenv';
import { ConnectionOptions } from 'typeorm';

export interface EnvConfigOptions {
    APP_PORT: number;
    APP_SITE: string;
    APP_NAME: string;
    ALLOWED_ORIGINS: string;
    COOKIE_HTTP_ONLY: boolean;
    COOKIE_PATH: string;
    COOKIE_DOMAIN: string;
    COOKIE_SAME_SITE: boolean | "lax" | "strict" | "none" ;
    COOKIE_SECURE: boolean;
    LOG_LEVEL: string;
    SESSION_KEY: string;
    SESSION_SECRET: string;
    ACCESS_SECRET_TOKEN: string;
    REFRESH_SECRET_TOKEN: string;
    DATABASE_TYPE: "postgres" | "mysql";
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string
    DATABASE_NAME: string;
    DATABASE_SCHEMA: string;
    DATABASE_SYNC: boolean;
    DATABASE_LOGGING: boolean | "all" | ("query" | "schema" | "error" | "warn" | "info" | "log" | "migration")[];
    ENV: "local" | "dev" | "staging" | "production",
    STRIPE_CHECKOUT_CANCEL_URL: string;
    STRIPE_CHECKOUT_SUCCESS_URL: string;
}

const defaultConfig: EnvConfigOptions = {
    APP_PORT: 3200,
    APP_SITE: 'http://localhost',
    APP_NAME: 'Apso Template',
    ALLOWED_ORIGINS: 'locahost',
    COOKIE_HTTP_ONLY: true,
    COOKIE_PATH: '/auth/refresh_token',
    COOKIE_DOMAIN: 'http://localhost:3001',
    COOKIE_SAME_SITE: false,
    COOKIE_SECURE: false,
    LOG_LEVEL: 'debug',
    SESSION_KEY: 'aid',
    SESSION_SECRET: 'wine is fine, whiskey is swell, but beer is better',
    ACCESS_SECRET_TOKEN: 'spidey sense is dense',
    REFRESH_SECRET_TOKEN: 'but ironman is not ironic',
    DATABASE_TYPE: 'postgres',
    DATABASE_HOST: 'localhost',
    DATABASE_PORT: 54322,
    DATABASE_USERNAME: 'apso',
    DATABASE_PASSWORD: 'password',
    DATABASE_NAME: 'apso',
    DATABASE_SCHEMA: 'apso_test',
    DATABASE_SYNC: true,
    DATABASE_LOGGING: "all",
    ENV: 'local',
    STRIPE_CHECKOUT_CANCEL_URL: '',
    STRIPE_CHECKOUT_SUCCESS_URL: '',

}

const config: EnvConfigOptions = {
    ...defaultConfig,
    ...process.env,
    ...env.config().parsed
}

interface AppConfig {
    defaultAction: string;
    name: string;
    port: number;
    site: string;
    allowedOrigins: string;
    env: "local" | "dev" | "staging" | "production";
}

const app: AppConfig = {
    defaultAction: 'handle',
    name: config.APP_NAME,
    port: config.APP_PORT,
    site: config.APP_SITE,
    allowedOrigins: config.ALLOWED_ORIGINS,
    env: config.ENV
};

interface CookieConfig {
    httpOnly: boolean;
    path: string;
    domain: string;
    sameSite: boolean | "lax" | "strict" | "none" ;
    secure: boolean
}

const cookie: CookieConfig = {
    httpOnly: config.COOKIE_HTTP_ONLY,
    path: config.COOKIE_PATH,
    domain: config.COOKIE_DOMAIN,
    sameSite: config.COOKIE_SAME_SITE,
    secure: Boolean(config.COOKIE_SECURE)
};

interface LogConfig {
    colorize: boolean;
    level: string;
    timestamps: string;
}
const log: LogConfig = {
    colorize: true,
    level: config.LOG_LEVEL,
    timestamps: 'quiet',
};

interface SessionConfig {
    key: string;
    secret: string;
    ttl: number;
}

interface BillingConfig {
    publishKey: string;
    secretKey: string;
    checkoutCancel: string;
    checkoutSuccess: string;
}

const session: SessionConfig = {
    key: config.SESSION_KEY,
    secret: config.SESSION_SECRET,
    ttl: 60 * 60 * 24,
};

interface TokenConfig {
    accessTokenSecret: string;
    refreshTokenSecret: string;
}

const token: TokenConfig = {
    accessTokenSecret: config.ACCESS_SECRET_TOKEN,
    refreshTokenSecret: config.REFRESH_SECRET_TOKEN
}

const database: ConnectionOptions = {
    type: config.DATABASE_TYPE,
    host: config.DATABASE_HOST,
    port: config.DATABASE_PORT,
    username: config.DATABASE_USERNAME,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
    schema: config.DATABASE_SCHEMA,
    synchronize: config.DATABASE_SYNC,
    logging: config.DATABASE_LOGGING
};

const billing: BillingConfig = {
    // secretKey: 'sk_test_51H7UNHLpOtB9y7NLQgoNPo4MRxB7TCoTnyxZI1TxK0bw067UipEJHf9om9x5OHfsZ4yoJCYPn1ZCTOVnH6Fu57Ij00akRX4oba',
    // publishKey: 'pk_test_51H7UNHLpOtB9y7NLW8JjiCQZypnsDHkv7hLYFQrYoUNyKcBugdntiT1VQzH9G9zh91rkj7aD1benkmvKLhznaMbW00BAVdIZNu',
    secretKey:'sk_test_51IGJCIGJtEMkpOyaNphTJJI7QGWLq4oILFkaI3WyYrHzU2fQbW8UXOKmMRNuMgaVEZiwmheL5YUIYYz8OCXmDGW600gXJderNF',
    publishKey: 'pk_test_51IGJCIGJtEMkpOyaSN0jn3v5UkxU88WpghFBTtBGsFCdYdJpyyQTiRq2jk0Uc5DuuiH61LYcPM423AQA0IorffpZ00HH47ENey',
    checkoutCancel: '',
    checkoutSuccess: '',
}

export interface Config {
    cookie: CookieConfig;
    database: ConnectionOptions;
    session: SessionConfig;
    app: AppConfig;
    log: LogConfig;
    token: TokenConfig;
    billing: BillingConfig;
}

export default {
    app,
    cookie,
    database,
    log,
    session,
    token,
    billing
}
