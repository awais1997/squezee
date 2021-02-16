import { Database } from '@apso/server'
import {
    EntityRepository,
} from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
export default class UserRepository extends Database.BaseRepository<User> {
    public setContext() {
        this.entity = User;
        this.entityName = 'user';
    }

    public findByEmail(email: string) {
        return this.manager.findOne<User>(User, {
            where: {
                email,
            },
            relations: ['authorizations'],
        });       
    }   
}