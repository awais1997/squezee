
/** 
 * This file generated by Apso.
*/

import { Database } from '@apso/server'
import {
    EntityRepository,
} from "typeorm";
import Membership from "../entities/Membership";

@EntityRepository(Membership)
export default class MembershipRepository extends Database.BaseRepository<Membership> {
    public setContext() {
        this.entity = Membership;
        this.entityName = 'membership';
    }
}