import {Container} from 'sahara';
import {HttpServer} from '@apso/server';
import AuthorizationController from '../controllers/AuthorizationController';

export default (container: Container) => {
    const router = container.resolveSync<HttpServer.Router>('PublicRouter');
    const basePath = '/auth';

    router.post(`${basePath}/refresh_token`, AuthorizationController, 'refreshToken');
    router.post(`${basePath}/register`, AuthorizationController, 'register');
    router.post(`${basePath}/login`, AuthorizationController, 'login');
    router.post(`${basePath}/login/:provider`, AuthorizationController, 'loginWithProvider');
    router.post(`${basePath}/logout`, AuthorizationController, 'logout');
};