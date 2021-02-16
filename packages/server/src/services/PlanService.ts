import { Config } from "../cfg";
import { Stripe } from "stripe";
import User from "../entities/User";
import AccountRepository from "../repositories/AccountRepository";
import UserRepository from "../repositories/UserRepository";
import { HttpServer } from '@apso/server'

interface PlanSubscription {
    id: string;
    status: string;
    planId: string;
}
export default class PlanService {
    private readonly config: Config;
    private readonly stripe: Stripe;
    private readonly accountRepo: AccountRepository;
    private readonly userRepo: UserRepository;

    public constructor(
        /** Config */config: Config,
        /** Stripe */stripe: Stripe,
        /** AccountRepository */accountRepo: AccountRepository,
        /** UserRepository */userRepo: UserRepository,
        
    ) {
        this.config = config;
        this.stripe = stripe;
        this.accountRepo = accountRepo;
        this.userRepo = userRepo;
    }

    public async createCheckout(userId: number) {
        const user = await this.userRepo.findById(
            userId, {
            relations: ['membership', 'membership.account']
        })
        
        if (!user) {
            throw new HttpServer.Errors.NotFoundError('User not found.')
        }

        const customer = await this.getOrCreateCustomer(user);
        return {
            publishKey: this.config.billing.publishKey,
            customer
        }
    }

    // public getPlans(): Stripe.ApiListPromise<Stripe.Plan> {
    public getPlans(): Promise<any[]> {
        // return this.stripe.plans.list();
        const tiers = [
            {
                title: 'Free',
                subheader: '',
                price: '0',
                description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
                buttonText: 'Sign up for free',
                buttonVariant: 'outlined',
                planId: 'free'
            },
            {
                title: 'Pro',
                subheader: 'Most popular',
                price: '15',
                description: [
                    '20 users included',
                    '10 GB of storage',
                    'Help center access',
                    'Priority email support',
                ],
                buttonText: 'Get started',
                buttonVariant: 'contained',
                //planId:'pro'
                planId: 'price_1IGMsPGJtEMkpOyadJr5bsmf'
            },
            {
                title: 'Enterprise',
                subheader: '',
                price: '30',
                description: [
                    '50 users included',
                    '30 GB of storage',
                    'Help center access',
                    'Phone & email support',
                ],
                buttonText: 'Contact us',
                buttonVariant: 'outlined',
                //planId: 'enterprise'
                 planId: 'price_1IGNy2GJtEMkpOya2kIxiMGZ'
            },
        ];
        return Promise.resolve(tiers)
    }

    // public getPlan(planId: string): Promise<Stripe.Plan> {
    public async getPlan(planId: string): Promise<any> {
        // return this.stripe.plans.retrieve(planId)
        const plans = await this.getPlans();
        return plans.filter((plan) => plan.planId === planId)[0]
    }

    public async getCurrentPlan(userId: number): Promise<PlanSubscription> {
        const user = await this.userRepo.findById(
            userId, {
            relations: ['membership', 'membership.account']
        })
        
        if (!user) {
            throw new HttpServer.Errors.NotFoundError('User not found.')
        }
        let subscription: any | null = null;
        const customer = await this.getOrCreateCustomer(user);
        const subscriptions = customer && customer.subscriptions && customer.subscriptions.data;
        if (subscriptions && subscriptions.length) {
            const rawSubscription = subscriptions[0];
            subscription = {
                id: rawSubscription.id,
                status: rawSubscription.status,
                planId: rawSubscription.items.data[0].plan.id,
                // planName: planData.name,
                // planSlug: this.stripeApi.planIdToSlugMap[planData.id as any] || null,
                // currency: planData.currency,
                // amount: planData.amount,
                // amountAfterCoupon: Math.max(0, amountAfterCoupon),
                // interval: planData.interval,
                // intervalCount: planData.intervalCount,
                // quantity,
                // trialPeriodDays: planData.trialPeriodDays,
                // createdAt: toJsDate(rawSubscription.created),
                // canceledAt: toJsDate(rawSubscription.canceled_at),
                // currentPeriodStartsAt: toJsDate(rawSubscription.current_period_start),
                // currentPeriodEndsAt: toJsDate(rawSubscription.current_period_end),
                // endedAt: toJsDate(rawSubscription.ended_at),
                // metadata: rawSubscription.metadata,
                // trialStart: toJsDate(rawSubscription.trial_start),
                // trialEnd: toJsDate(rawSubscription.trial_end),
                // coupon: planData.coupon || customerCoupon,
            };
        } else {
            subscription = {
                id: 'free',
                status: 'active',
                planId: 'free'
            }
        }
    
        return subscription;
    }

    public async getOrCreateCustomer(user: User) {
        if (!user) {
            throw new HttpServer.Errors.NotAuthorized('logged in user is required');
        }
        
        let { account } = user.membership;
        let customer;
        if (account.stripe_customer_id) {
            customer = await this.stripe.customers.retrieve(account.stripe_customer_id)
        }

        if (!customer) {
            const contactEmail = user.email || undefined;
            const options: Stripe.CustomerCreateParams = {
                email: contactEmail,
            };

            customer = await this.stripe.customers.create(options)
            account.stripe_customer_id = customer.id;
            await this.accountRepo.update(account.id, account)
        }
        return customer
    }

    public async subscribe(userId: number, plan: string) {
        // get or create customer
        const user = await this.userRepo.findById(userId);

        if (!user) {
            throw new HttpServer.Errors.NotFoundError(`User "${userId}" does not exist.`);
        }

        // Get or Create Customer
        const customer = await this.getOrCreateCustomer(user);


        const fetchedPlan = await this.getPlan(plan);

        if (!fetchedPlan || !fetchedPlan.product) {
            throw new HttpServer.Errors.NotFoundError(`Plan "${plan}" does not exist or ` +
                `does not have a product`);
        }

        let sessionData: Pick<Stripe.Checkout.SessionCreateParams, 'subscription_data'> |
            Pick<Stripe.Checkout.SessionCreateParams, 'line_items' | 'metadata'>;

        // plans which don't use tiered billing can do normal stuff.
        // once the user completes the checkout session, a subscription will be created.
        sessionData = {
            subscription_data: {
                items: [{
                    plan,
                    quantity: 1,
                }],
            },
        };

        return this.stripe.checkout.sessions.create({
            cancel_url: this.config.billing.checkoutCancel,
            success_url: this.config.billing.checkoutSuccess,
            mode: 'subscription',
            payment_method_types: ['card'],
            customer: customer.id,
            ...sessionData,
        });
    }

    public async retryInvoice(
        paymentMethodId: string,
        customerId: string,
        invoiceId: string
    ) {
        await this.stripe.paymentMethods.attach(paymentMethodId, {
            customer: customerId,
        });
        await this.stripe.customers.update(customerId, {
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
        });

        return this.stripe.invoices.retrieve(invoiceId, {
            expand: ['payment_intent'],
        });
    }

    public async createSubscription(
        paymentMethodId: string,
        customerId: string,
        priceId: string
    ) {
        // Set the default payment method on the customer
        await this.stripe.paymentMethods.attach(paymentMethodId, {
            customer: customerId,
        });

        await this.stripe.customers.update(
            customerId,
            {
                invoice_settings: {
                    default_payment_method: paymentMethodId,
                },
            }
        );

        // Create the subscription
        return this.stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }],
            expand: ['latest_invoice.payment_intent'],
        });
    }

}