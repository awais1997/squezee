import Stripe from "stripe";

import {Config} from '../cfg';
import { Container } from 'sahara';

export default (container: Container): void => {
    const config: Config = container.resolveSync('Config')
    
    const stripe = new Stripe(config.billing.secretKey, {
      apiVersion: "2020-03-02",
      typescript: true
    });

    container
      .registerInstance(stripe, 'Stripe')
}