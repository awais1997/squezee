import { Request } from "@apso/server/dist/http/http";
import { verify, sign } from "jsonwebtoken";
import Logger from 'looger';
import { Config } from "../cfg";

interface TokenInput {
    userId: number;
    tokenVersion?: number;
}

export default class JwtTokenHelper {
    private readonly config: Config;
    private readonly log: Logger;

    public constructor(
        /** Log */log: Logger,
        /** Config */config: Config
    ) {
        this.config = config;
        this.log = log;
    }

    public createAccessToken({ userId }: TokenInput) {
        return sign({ userId }, this.config.token.accessTokenSecret, {
            expiresIn: "15m"
        });
    }

    public createRefreshToken({ userId, tokenVersion }: TokenInput) {
        return sign(
            { userId, tokenVersion },
            this.config.token.refreshTokenSecret,
            {
                expiresIn: "7d"
            }
        );
    }
    public async verifyAndReturnUserId(context: {req: Request}) {
      const authorization = context.req.headers["authorization"];
      if (!authorization) {
        return null;
      }
  
      try {
        const token = authorization.split(" ")[1];
        const payload: any = verify(token, this.config.token.accessTokenSecret);
        return payload.userId
      } catch (err) {
        this.log.info(err);
        return null;
      }
  }

}