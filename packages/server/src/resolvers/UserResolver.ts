import {
  Resolver,
  Query,
  Mutation,
  Arg,
  InputType,
  Field,
  Ctx
} from "type-graphql";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import { verify, sign } from "jsonwebtoken";
import { Request } from '@apso/server/dist/http/http'
import { Config } from "../cfg";
import Looger from "looger";
@InputType()
class CreateUserInput implements Partial<User> {
  
    
  @Field()
  public name!: string;
    

    
  @Field()
  public email!: string;
    
}

@Resolver()
export default class UserResolver {
  private readonly userRepo: UserRepository
  private readonly config: Config
  private readonly log: Looger

  constructor(
      /** UserRepository */userRepo: UserRepository,
      /** Config */config: Config,
      /** Log */log: Looger
  ) {
      this.userRepo = userRepo;
      this.config = config;
      this.log = log;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() context: {req: Request}) {
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(" ")[1];
      const payload: any = verify(token, this.config.token.accessTokenSecret);
      return await this.userRepo.findById(payload.userId)
    } catch (err) {
      this.log.info(err);
      return null;
    }
  }

  @Mutation(() => User)
  async updateMe(
    @Ctx() context: {req: Request},
    @Arg("data") data: CreateUserInput
  ) {
    console.log('GETTING HERE', data)
    const authorization = context.req.headers["authorization"];
    if (!authorization) {
      return null;
    }

    const token = authorization.split(" ")[1];
    const payload: any = verify(token, this.config.token.accessTokenSecret);

    await this.userRepo.update(payload.userId, data)
    return await this.userRepo.findById(payload.userId)
  }

  @Query(() => User)
  getUser(
    @Arg("id") id: number
  ) {
    return this.userRepo.findById(id)
  }

  @Query(() => [User])
  getUsers() {
    return this.userRepo.findAll()
  }

  @Mutation(() => User)
  createUser(
    @Arg("data") data: CreateUserInput
  ) {
    return this.userRepo.create(data)
  }  
  
  @Mutation(() => User)
  async updateUser(
    @Arg("data") data: User
  ) {
    if (!data.id) {
      throw new Error('missing id')
    }
    
    await this.userRepo.update(data.id, data)
    
    return data
  }
  
}