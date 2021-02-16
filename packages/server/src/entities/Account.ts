
/** 
 * This file generated by Apso.
*/

import { Database } from '@apso/server'
import {
    Column,
    Entity,
    OneToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";
import Membership from './Membership';
import Plan from './Plan';
import LandingPage from './LandingPage';

@ObjectType()
@InputType('AccountInput')
@Entity()
// export default class Account extends Database.TimestampedModel{
export default class Account {
    // Fields
    @Field()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    
  @Field()
  @Column({
    nullable: true
  })
  public name?: string;
    

    
  @Field()
  @Column({
    nullable: true
  })
  public stripe_customer_id?: string;
    
    // Associations
    
      @OneToOne(type => Membership, membership => membership.account)
      // @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
      membership: Membership;
      
      @OneToMany(type => LandingPage, landingPage => landingPage.account)
      landingPages: LandingPage[];

      @ManyToOne(type => Plan, plan => plan.account)
      plan: Plan;
      
}