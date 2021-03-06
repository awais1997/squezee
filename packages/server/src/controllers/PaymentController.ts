
/** 
 * This file generated by Apso.
*/

import {HttpServer} from '@apso/server';
import PaymentService from '../services/PaymentService';

class PaymentController extends HttpServer.BaseController {
    private readonly service: PaymentService;

    public constructor(
        /** PaymentService */service: PaymentService
    ){
        super();
        this.service = service;
    }

    public async list() {
    }

    public async create(){
    }
}

export default PaymentController