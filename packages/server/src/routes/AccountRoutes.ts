
/** 
 * This file generated by Apso.
*/

import {Container} from 'sahara';
import {HttpServer} from '@apso/server';
import AccountController from '../controllers/AccountController';

export default (container: Container) => {
    const router = container.resolveSync<HttpServer.Router>('PublicRouter');

    router.get('/list', AccountController, 'list');
};