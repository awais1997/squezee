
/** 
 * This file generated by Apso.
*/

import { Database } from '@apso/server'
import {
    EntityRepository,
} from "typeorm";
import File from "../entities/File";

@EntityRepository(File)
export default class FileRepository extends Database.BaseRepository<File> {
    public setContext() {
        this.entity = File;
        this.entityName = 'file';
    }
}