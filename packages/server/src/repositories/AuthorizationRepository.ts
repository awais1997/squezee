import { Database } from '@apso/server'
import {
    EntityRepository,
} from "typeorm";
import Authorization from "../entities/Authorization";
import { idType } from 'aws-sdk/clients/iam';

@EntityRepository(Authorization)
export default class AuthorizationRepository extends Database.BaseRepository<Authorization> {
    public setContext() {
        this.entity = Authorization;
        this.entityName = 'authorization';
    }

    increment(userId: number) {
        return this.manager.increment<Authorization>(Authorization, { id: userId }, "tokenVersion", 1);
    }

    public findByEmail(email: string) {
        return this.manager.findOne<Authorization>(Authorization, {
            where: {
                email,
            },
            relations: ['user'],
        });       
    }   
    public findByUserId(userId: number) {
        return this.manager.findOne<Authorization>(Authorization, {
            where: {
                user: {
                    id: userId,
                },
            },
            relations: ['user'],
        });       
    }  
    
    public findByProviderId(provider: string, providerId: string) {
        return this.manager.findOne<Authorization>(Authorization, {
            where: {
                provider,
                providerId
            },
            relations: ['user'],
        });       
    }
}