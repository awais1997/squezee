
/** 
 * This file generated by Apso.
*/

import {HttpServer} from '@apso/server';
import PlanService from '../services/PlanService';
import { Config } from '../cfg';
import { verify } from 'jsonwebtoken';

class PlanController extends HttpServer.BaseController {
    private readonly config: Config;
    private readonly service: PlanService;
    
    public constructor(
        /** Config */config: Config,
        /** PlanService */service: PlanService,
    ){
        super();
        this.config = config;
        this.service = service;
    }

    public async list() {
    }

    public async create(){
    }

    public async prepareCheckout() {
        const authorization = this.req.headers["authorization"];
        if (!authorization) {
            return this.sendApiFailure(new HttpServer.Errors.NotAuthorized('Not Authorized.'))
        }

        const token = authorization.split(" ")[1];
        const payload: any = verify(token, this.config.token.accessTokenSecret);
        const checkoutData = await this.service.createCheckout(payload.userId);

        return this.sendApiSuccess(checkoutData);
    }
   
    // // public async update(planId: string, paymentMethod: any) {
    // //     const subscription = await this.service.subscribe(planId, paymentMethod);

    // //     return this.sendApiSuccess(subscription);
    // // }
}

export default PlanController