import * as goa from 'goa';
import {Container} from 'sahara';
import {HttpServer} from '@apso/server';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export type RouterAuthType = 'public' | 'jwt';

class ApiRouter extends HttpServer.Router {
    private readonly authType: RouterAuthType;

    constructor(app: goa.GoaApplication, authType: RouterAuthType) {
        super(app)
        this.authType = authType;
    }

    authMiddleware(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) {
        switch (this.authType) {
            case 'public':
                next();
                break;
            case 'jwt':
                const config = req.container.resolveSync<any>('Config');
                const authorizationHeaader = req.headers.authorization;
                let result;
                if (authorizationHeaader) {
                    const token = req.headers.authorization?.split(' ')[1] || ''; // Bearer <token>
                    const options = { expiresIn: '2d', issuer: config.app.site };
                    try {
                        // verify makes sure that the token hasn't expired and has been issued by us
                        result = jwt.verify(token, config.session.secret, options);
                        // Let's pass back the decoded token to the request object
                        req.currentUserId = result;
                        // We call next to pass execution to the subsequent middleware
                        next();
                        return;
                    } catch (err) {
                        // Throw an error just in case anything goes wrong with verification
                        throw new HttpServer.Errors.NotAuthorized()
                    }
                } else {
                    result = { 
                        error: `Authentication error. Token required.`,
                        status: 401
                    };
                    res.status(401).send(result);
                }
                break;
            default:
                return new Error(`This case should never happen! ${this.authType}`);
        }
    }
}
export default (container: Container) => {
    const createRouter = (authType: RouterAuthType) => {
        return (container: Container) => {
            const app = container.resolveSync<goa.GoaApplication>('App');
            return new ApiRouter(app, authType);
        };
    };

    container
        .registerFactory(createRouter('public'), 'PublicRouter')
        .registerFactory(createRouter('jwt'), 'AuthorizedRouter')

};