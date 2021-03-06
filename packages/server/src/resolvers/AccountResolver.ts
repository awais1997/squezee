
/** 
 * This file generated by Apso.
*/

import {
  Resolver,
  Query,
  Mutation,
  Arg,
  InputType,
  Field
} from "type-graphql";
import Account from "../entities/Account";
import AccountRepository from "../repositories/AccountRepository";

@InputType()
class CreateAccountInput implements Partial<Account> {
  
    
  @Field()
  public name!: string;
    

    
  @Field()
  public stripe_customer_id!: string;
    
}

@Resolver()
export default class AccountResolver {
  private readonly accountRepo: AccountRepository

  constructor(
      /** AccountRepository */accountRepo: AccountRepository,
  ) {
      this.accountRepo = accountRepo;
  }

  @Query(() => Account)
  getAccount(
    @Arg("id") id: number
  ) {
    return this.accountRepo.findById(id)
  }

  @Query(() => [Account])
  getAccounts() {
    return this.accountRepo.findAll()
  }

  @Mutation(() => Account)
  createAccount(
    @Arg("data") data: CreateAccountInput
  ) {
    return this.accountRepo.create(data)
  }  
  
  @Mutation(() => Account)
  async updateAccount(
    @Arg("data") data: Account
  ) {
    if (!data.id) {
      throw new Error('missing id')
    }
    
    await this.accountRepo.update(data.id, data)
    
    return data
  }

  
}