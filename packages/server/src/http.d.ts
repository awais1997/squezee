import * as Express from 'express';

declare global {
    namespace Express {
        export interface Request {
            currentUserId: number;
        }
    }
}
