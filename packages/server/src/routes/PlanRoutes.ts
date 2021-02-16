
/** 
 * This file generated by Apso.
*/

import {Container} from 'sahara';
import {HttpServer} from '@apso/server';
import PlanController from '../controllers/PlanController';

export default (container: Container) => {
    const router = container.resolveSync<HttpServer.Router>('PublicRouter');
    const basePath = '/plan';

    router.get(`${basePath}/list`, PlanController, 'list');
    router.get(`${basePath}/prepare-checkout`, PlanController, 'prepareCheckout')
    // router.post(`${basePath}/subscribe`, PlanController, 'update')
};