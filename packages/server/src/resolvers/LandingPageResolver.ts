
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
  Ctx
} from "type-graphql";
import GraphQLJSON from 'graphql-type-json';
import LandingPage from "../entities/LandingPage";
import LandingPageRepository from "../repositories/LandingPageRepository";
import LandingPageService from "../services/LandingPageService";
import { Request } from "@apso/server/dist/http/http";
import JwtTokenHelper from "../helpers/JwtTokenHelper";
import { PageSettings} from 'squeazee-types'

@InputType()
class CreateLandingPageInput implements Partial<LandingPage> {
  @Field(type => GraphQLJSON)
  public jsonBody: PageSettings;
}

@InputType()
class UpdateLandingPageInput implements Partial<LandingPage> {
  @Field()
  public id: number;

  @Field(type => GraphQLJSON)
  public jsonBody: PageSettings;
}

@Resolver()
export default class LandingPageResolver {
  private readonly service: LandingPageService;
  private readonly jwtHelper: JwtTokenHelper;

  constructor(
     /** JwtTokenHelper */jwtHelper: JwtTokenHelper,
      /** LandingPageRepository */landingPageRepo: LandingPageRepository,
      /** LandingPageService */service: LandingPageService
  ) {
      this.service = service;
      this.jwtHelper = jwtHelper;
  }

  @Query(() => LandingPage)
  async getPublicLandingPage(
    @Ctx() context: {req: Request},
    @Arg("slug") slug: string
  ) {
    return this.service.getBySlug(slug);
  }
  
  @Query(() => LandingPage)
  async getLandingPage(
    @Ctx() context: {req: Request},
    @Arg("id") id: number
  ) {
    const userId = await this.jwtHelper.verifyAndReturnUserId(context);
    return this.service.getById(userId, id);
  }
  
  @Query(() => [LandingPage])
  async getLandingPages(@Ctx() context: {req: Request}) {
    const userId = await this.jwtHelper.verifyAndReturnUserId(context);
    return this.service.getPages(userId);
  }

  @Mutation(() => LandingPage)
  async createLandingPage(
    @Ctx() context: {req: Request},
    @Arg("data") data: CreateLandingPageInput
  ) {
    const userId = await this.jwtHelper.verifyAndReturnUserId(context);
    return this.service.createPage(userId, data);
  }  
  
  @Mutation(() => LandingPage)
  async updateLandingPage(
    @Ctx() context: {req: Request},
    @Arg("data") data: UpdateLandingPageInput
  ) {
    
    const userId = await this.jwtHelper.verifyAndReturnUserId(context);
    return this.service.updatePage(userId, data);
  }
  
}