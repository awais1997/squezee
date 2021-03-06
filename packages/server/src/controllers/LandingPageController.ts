
/** 
 * This file generated by Apso.
*/

import {HttpServer} from '@apso/server';
import LandingPageService from '../services/LandingPageService';

class LandingPageController extends HttpServer.BaseController {
    private readonly service: LandingPageService;

    public constructor(
        /** LandingPageService */service: LandingPageService
    ){
        super();
        this.service = service;
    }

    public async getBySlug(slug: string) {
        const pageData = await this.service.getBySlug(slug);
        this.sendApiSuccess(pageData)
    }
}

export default LandingPageController