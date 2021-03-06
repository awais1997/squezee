
/** 
 * This file generated by Apso.
*/

import {HttpServer} from '@apso/server';
import MembershipService from '../services/MembershipService';

class MembershipController extends HttpServer.BaseController {
    private readonly service: MembershipService;

    public constructor(
        /** MembershipService */service: MembershipService
    ){
        super();
        this.service = service;
    }

    public async list() {
    }

    public async create(){
    }
}

export default MembershipController