import { verify, sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import AuthorizationRepository from "../repositories/AuthorizationRepository";
import { Config } from "../cfg";
import UserRepository from "../repositories/UserRepository";
import { HttpServer } from '@apso/server'
import User from "../entities/User";
import Authorization from "../entities/Authorization";
import Membership from "../entities/Membership";
import MembershipRepository from "../repositories/MembershipRepository";
import AccountRepository from "../repositories/AccountRepository";
import Account from "../entities/Account";
import { getFacebookUser } from '../helpers/FBClient'
interface TokenInput {
    userId: number;
    tokenVersion?: number;
}

export default class AuthorizationService {
    private readonly userRepo: UserRepository;
    private readonly membershipRepo: MembershipRepository;
    private readonly accountRepo: AccountRepository;
    private readonly authRepo: AuthorizationRepository;
    private readonly config: Config;

    public constructor(
        /** UserRepository */userRepo: UserRepository,
        /** MembershipRepository */membershipRepo: MembershipRepository,
        /** AccountRepository */accountRepo: AccountRepository,
        /** AuthorizationRepository */authRepo: AuthorizationRepository,
        /** Config */config: Config
    ) {
        this.authRepo = authRepo;
        this.userRepo = userRepo;
        this.membershipRepo = membershipRepo;
        this.accountRepo = accountRepo;
        this.config = config;
    }

    private createAccessToken({ userId }: TokenInput) {
        return sign({ userId }, this.config.token.accessTokenSecret, {
            expiresIn: "15m"
        });
    }

    private createRefreshToken({ userId, tokenVersion }: TokenInput) {
        return sign(
            { userId, tokenVersion },
            this.config.token.refreshTokenSecret,
            {
                expiresIn: "7d"
            }
        );
    }

    async setRefreshToken(token: string) {
        console.log('CHECK REFRESH TOKEN', token, this.config.token.refreshTokenSecret)
        const payload: any = verify(token, this.config.token.refreshTokenSecret);
        console.log('SET REFRESH TOKEN', payload)
        
        // token is valid and
        // we can send back an access token
        const auth = await this.authRepo.findByUserId(payload.userId);

        if (!auth) {
            throw new HttpServer.Errors.NotFoundError('User not found');
        }

        if (auth.tokenVersion !== payload.tokenVersion) {
            throw new HttpServer.Errors.FailedAuthorization('Expired authorization')
        }

        const refreshToken = this.createRefreshToken({
            userId: payload.userId,
            tokenVersion: auth.tokenVersion
        });

        const accessToken = this.createAccessToken({
            userId: payload.userId
        });

        return {
            refreshToken,
            accessToken
        }
    }

    async revokeRefreshTokensForUser(userId: number) {
        return this.authRepo.increment(userId)
    }

    async login(email: string, password: string) {
        const auth = await this.authRepo.findByEmail(email);
        if (!auth) {
            throw new Error("could not find user");
        }

        const valid = await compare(password, auth.password);

        if (!valid) {
            throw new HttpServer.Errors.FailedAuthorization("bad password");
        }

        // login successful
        const refreshToken = this.createRefreshToken({
            userId: auth.user.id,
            tokenVersion: auth.tokenVersion
        })

        const accessToken = this.createAccessToken({
            userId: auth.user.id,
        })

        return {
            refreshToken,
            accessToken,
            user: auth.user
        };
    }

    async fetchFacebookUser(accessToken: string) {
        return getFacebookUser(accessToken);
    }

    async loginWithProvider(provider: 'facebook' | 'google', providerAccessToken: string) {
        const {id: providerId, name, email} = await this.fetchFacebookUser(providerAccessToken);
        const auth = await this.authRepo.findByProviderId(provider, providerId);
        if (!auth) {
            return this.registerWithProvider(provider, providerId, name, email);
        }

        // login successful
        const refreshToken = this.createRefreshToken({
            userId: auth.user.id,
            tokenVersion: auth.tokenVersion
        })

        const accessToken = this.createAccessToken({
            userId: auth.user.id,
        })

        return {
            refreshToken,
            accessToken,
            user: auth.user
        };
    }

    async register(name: string, email: string, password: string) {
        const hashedPassword = await hash(password, 12);
        
        let authorization: Authorization = this.authRepo.create({
            email,
            password: hashedPassword,
            provider: 'password',
            tokenVersion: 1,
            active: true
        });
     
        const account: Account = new Account();
        const membership: Membership = new Membership();
        // const plan: Plan = new Plan();
        membership.account = account;
        membership.active = true;
        // account.plan = plan;
        let user: User = this.userRepo.create({
            name,
            email,
            authorizations: [authorization],
            membership
        })

        user = await this.userRepo.save(user);

        // login successful
        const refreshToken = this.createRefreshToken({
            userId: user.id,
            tokenVersion: authorization!.tokenVersion
        })

        const accessToken = this.createAccessToken({
            userId: user.id,
        })

        return {
            refreshToken,
            accessToken,
            user
        };
    }

    async registerWithProvider(provider: string, providerId: string, name?: string, email?: string) {
        let authorization: Authorization = this.authRepo.create({
            email,
            providerId,
            provider,
            tokenVersion: 1,
            active: true
        });
     
        const account: Account = new Account();
        const membership: Membership = new Membership();
        // const plan: Plan = new Plan();
        membership.account = account;
        membership.active = true;
        // account.plan = plan;
        let user: User = this.userRepo.create({
            name,
            email,
            authorizations: [authorization],
            membership
        })

        user = await this.userRepo.save(user);

        // login successful
        const refreshToken = this.createRefreshToken({
            userId: user.id,
            tokenVersion: authorization!.tokenVersion
        })

        const accessToken = this.createAccessToken({
            userId: user.id,
        })

        return {
            refreshToken,
            accessToken,
            user
        };
    }
}