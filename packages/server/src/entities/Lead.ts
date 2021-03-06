
/** 
 * This file generated by Apso.
*/

import { Database } from '@apso/server'
import {
    Column,
    Entity,
    ManyToOne,


    PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";
import LandingPage from './LandingPage';

@ObjectType()
@InputType('LeadInput')
@Entity()
export default class Lead extends Database.TimestampedModel{
    // Fields
    @Field()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    
  @Field()
  @Column({
    nullable: false
  })
  public email!: string;
    
    // Associations
    
      @ManyToOne(type => LandingPage, landingPage => landingPage.leads)
      landingPage: LandingPage;
      
}