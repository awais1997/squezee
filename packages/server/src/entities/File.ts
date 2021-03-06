
/** 
 * This file generated by Apso.
*/

import { Database } from '@apso/server'
import {
    Column,
    Entity,
    

    PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";


@ObjectType()
@InputType('FileInput')
@Entity()
export default class File extends Database.TimestampedModel{
    // Fields
    @Field()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    
  @Field()
  @Column({
    nullable: false
  })
  public filename!: string;
    
    // Associations
    
}