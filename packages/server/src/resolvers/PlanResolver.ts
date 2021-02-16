
/** 
 * This file generated by Apso.
*/

import {
  Resolver,
  Query,
  Mutation,
  Arg,
  InputType,
  Field,
  ObjectType,
  Ctx
} from "type-graphql";
import Plan from "../entities/Plan";
import PlanRepository from "../repositories/PlanRepository";
import PlanService from "../services/PlanService";
import { Request } from "@apso/server/dist/http/http";
import JwtTokenHelper from "../helpers/JwtTokenHelper";
@InputType()
class CreatePlanInput implements Partial<Plan> {
    
  @Field()
  public id?: number;

  @Field()
  public active?: boolean;
    
  @Field(type => [String])
  public features?: string[];
   
  @Field()
  public stripe_subscription_id?: string;  

  @Field()
  public planId?: string;
    
}

@InputType()
class InvoiceInput {
  @Field()
  public customerId: string;
  
  @Field()
  public paymentMethodId: string;
  
  @Field()
  public invoiceId: string;
}

@InputType()
class SubscriptionInput {
  @Field()
  public customerId: string;
  
  @Field()
  public paymentMethodId: string;
  
  @Field()
  public priceId: string;
}

@ObjectType()
class Invoice {
  @Field()
  public id: string;

  @Field()
  public customerId: string;
  
  @Field()
  public paymentMethodId: string;
  
  @Field()
  public invoiceId: string;
}

@ObjectType()
class Subscription extends SubscriptionInput {
  @Field()
  public id: string;

  @Field()
  public customerId: string;
  
  @Field()
  public paymentMethodId: string;
  
  @Field()
  public priceId: string;
}

@ObjectType()
class PlanDisplay {
  @Field()
  public title: string;
  
  @Field()
  public price: string

  @Field()
  public subheader?: string

  @Field(() => [String])
  public description: [string]

  @Field()
  public buttonText: string
  
  @Field()
  public buttonVariant: string
  
  @Field()
  public planId: string
}

@ObjectType() 
class PlanSubscription {
  @Field()
  public id: string
  @Field()
  public status: string
  @Field()
  public planId: string
}
@Resolver()
export default class PlanResolver {
  private readonly planRepo: PlanRepository
  private readonly service: PlanService
  private readonly jwtHelper: JwtTokenHelper

  constructor(
      /** PlanRepository */planRepo: PlanRepository,
      /** PlanService */service: PlanService,
      /** JwtTokenHelper */jwtHelper: JwtTokenHelper
  ) {
      this.planRepo = planRepo;
      this.service = service;
      this.jwtHelper = jwtHelper;
  }

  @Query(() => Plan)
  getPlan(
    @Arg("id") id: number
  ) {
    return this.planRepo.findById(id)
  }
  @Query(() => PlanDisplay)
  async getCurrentPlan(@Ctx() context: {req: Request}) {
    const userId = await this.jwtHelper.verifyAndReturnUserId(context);
    const currentPlan = await this.service.getCurrentPlan(userId);
    const planDisplay = await this.service.getPlan(currentPlan.planId);
    return planDisplay
  }

  @Query(() => [PlanDisplay])
  getPlans() {
    return this.service.getPlans()
  }

  @Mutation(() => Plan)
  createPlan(
    @Arg("data") data: CreatePlanInput
  ) {
    return this.planRepo.create(data)
  }  
  
  @Mutation(() => Plan)
  async updatePlan(
    @Arg("data") data: Plan
  ) {
    if (!data.id) {
      throw new Error('missing id')
    }
    
    await this.planRepo.update(data.id, data)
    
    return data
  }

  @Mutation(() => Invoice)
  async retryInvoice(
    @Arg("data") data: InvoiceInput
  ) {
    if (!data.customerId || !data.paymentMethodId || !data.invoiceId) {
      throw new Error('missing one of the following: [customerId, paymentMethodId, invoiceId]')
    }
    
    const {customerId, paymentMethodId, invoiceId} = data;
    const invoice = await this.service.retryInvoice(paymentMethodId, customerId, invoiceId)
    
    return invoice
  }

  @Mutation(() => Subscription)
  async createSubscription(
    @Arg("data") data: SubscriptionInput
  ) {
    if (!data.customerId || !data.paymentMethodId || !data.priceId) {
      throw new Error('missing one of the following: [customerId, paymentMethodId, priceId]')
    }
    
    const {customerId, paymentMethodId, priceId} = data;
    const subscription = await this.service.createSubscription(paymentMethodId, customerId, priceId)
    console.log("there is a subscription::::::::::::::::",subscription);
    
    
    return subscription
  }
}