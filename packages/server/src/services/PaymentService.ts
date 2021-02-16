
/** 
 * This file generated by Apso.
*/
import { Stripe } from "stripe";

export default class PaymentService {
  private readonly stripe: Stripe;

  public constructor(
      /** Stripe */stripe: Stripe,
  ) {
      this.stripe = stripe;
  }
  public async createPayment(token: any) {
      
    // Create the charge
    // const source = await this.stripe.sources.create(token.id)
    // console.log("Source create :::",source);
       const result= await this.stripe.charges.create({
        amount:999,
        currency: 'usd', 
        source:token.id,
        description: 'Payment for file'
        
    });
    return result

    
   }  
}