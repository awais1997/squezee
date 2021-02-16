import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getAccount: Account;
  getAccounts: Array<Account>;
  getAuthorization: Authorization;
  getAuthorizations: Array<Authorization>;
  getPublicLandingPage: LandingPage;
  getLandingPage: LandingPage;
  getLandingPages: Array<LandingPage>;
  getLeadsMetrics: Array<LeadsMetric>;
  getMembership: Membership;
  getMemberships: Array<Membership>;
  getPayment: Payment;
  getPayments: Array<Payment>;
  getPlan: Plan;
  getCurrentPlan: PlanDisplay;
  getPlans: Array<PlanDisplay>;
  me?: Maybe<User>;
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetAccountArgs = {
  id: Scalars['Float'];
};


export type QueryGetAuthorizationArgs = {
  id: Scalars['Float'];
};


export type QueryGetPublicLandingPageArgs = {
  slug: Scalars['String'];
};


export type QueryGetLandingPageArgs = {
  id: Scalars['Float'];
};


export type QueryGetMembershipArgs = {
  id: Scalars['Float'];
};


export type QueryGetPaymentArgs = {
  id: Scalars['Float'];
};


export type QueryGetPlanArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserArgs = {
  id: Scalars['Float'];
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['Float'];
  name: Scalars['String'];
  stripe_customer_id: Scalars['String'];
};

export type Authorization = {
  __typename?: 'Authorization';
  id: Scalars['Float'];
  provider: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  providerId: Scalars['String'];
  tokenVersion: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type LandingPage = {
  __typename?: 'LandingPage';
  id: Scalars['Float'];
  slug: Scalars['String'];
  jsonBody: Scalars['JSON'];
  leadCount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};



export type LeadsMetric = {
  __typename?: 'LeadsMetric';
  landingPageId: Scalars['String'];
  title: Scalars['String'];
  count: Scalars['Float'];
  date: Scalars['String'];
};

export type Membership = {
  __typename?: 'Membership';
  id: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['Float'];
  token: Scalars['JSON'];
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type PlanDisplay = {
  __typename?: 'PlanDisplay';
  title: Scalars['String'];
  price: Scalars['String'];
  subheader: Scalars['String'];
  description: Array<Scalars['String']>;
  buttonText: Scalars['String'];
  buttonVariant: Scalars['String'];
  planId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  updateAccount: Account;
  createAuthorization: Authorization;
  updateAuthorization: Authorization;
  createLandingPage: LandingPage;
  updateLandingPage: LandingPage;
  createLead: LeadsMetric;
  createMembership: Membership;
  updateMembership: Membership;
  createPayment: Payment;
  updatePayment: Payment;
  createPlan: Plan;
  updatePlan: Plan;
  retryInvoice: Invoice;
  createSubscription: Subscription;
  updateMe: User;
  createUser: User;
  updateUser: User;
};


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationUpdateAccountArgs = {
  data: AccountInput;
};


export type MutationCreateAuthorizationArgs = {
  data: CreateAuthorizationInput;
};


export type MutationUpdateAuthorizationArgs = {
  data: AuthorizationInput;
};


export type MutationCreateLandingPageArgs = {
  data: CreateLandingPageInput;
};


export type MutationUpdateLandingPageArgs = {
  data: UpdateLandingPageInput;
};


export type MutationCreateLeadArgs = {
  data: CreateLeadInput;
};


export type MutationCreateMembershipArgs = {
  data: CreateMembershipInput;
};


export type MutationUpdateMembershipArgs = {
  data: MembershipInput;
};


export type MutationCreatePaymentArgs = {
  data: CreatePaymentInput;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentInput;
};


export type MutationCreatePlanArgs = {
  data: CreatePlanInput;
};


export type MutationUpdatePlanArgs = {
  data: PlanInput;
};


export type MutationRetryInvoiceArgs = {
  data: InvoiceInput;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionInput;
};


export type MutationUpdateMeArgs = {
  data: CreateUserInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  data: UserInput;
};

export type CreateAccountInput = {
  name: Scalars['String'];
  stripe_customer_id: Scalars['String'];
};

export type AccountInput = {
  id: Scalars['Float'];
  name: Scalars['String'];
  stripe_customer_id: Scalars['String'];
};

export type CreateAuthorizationInput = {
  provider: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  tokenVersion: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type AuthorizationInput = {
  id: Scalars['Float'];
  provider: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  providerId: Scalars['String'];
  tokenVersion: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type CreateLandingPageInput = {
  jsonBody: Scalars['JSON'];
};

export type UpdateLandingPageInput = {
  id: Scalars['Float'];
  jsonBody: Scalars['JSON'];
};

export type CreateLeadInput = {
  email: Scalars['String'];
  slug: Scalars['String'];
};

export type CreateMembershipInput = {
  active: Scalars['Boolean'];
};

export type MembershipInput = {
  id: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type CreatePaymentInput = {
  token: Scalars['JSON'];
};

export type PaymentInput = {
  id: Scalars['Float'];
  token: Scalars['JSON'];
};

export type CreatePlanInput = {
  id: Scalars['Float'];
  active: Scalars['Boolean'];
  features: Array<Scalars['String']>;
  stripe_subscription_id: Scalars['String'];
  planId: Scalars['String'];
};

export type PlanInput = {
  id: Scalars['Float'];
  active: Scalars['Boolean'];
};

export type InvoiceInput = {
  customerId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  invoiceId: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['String'];
  customerId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  invoiceId: Scalars['String'];
};

export type SubscriptionInput = {
  customerId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  priceId: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  id: Scalars['String'];
  customerId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  priceId: Scalars['String'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

export type UserInput = {
  id: Scalars['Float'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Lead = {
  __typename?: 'Lead';
  id: Scalars['Float'];
  email: Scalars['String'];
};

export type PlanSubscription = {
  __typename?: 'PlanSubscription';
  id: Scalars['String'];
  status: Scalars['String'];
  planId: Scalars['String'];
};

export type LeadInput = {
  id: Scalars['Float'];
  email: Scalars['String'];
};

export type LandingPageInput = {
  id: Scalars['Float'];
  slug: Scalars['String'];
  jsonBody: Scalars['JSON'];
  leadCount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type GetPublicLandingPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPublicLandingPageQuery = (
  { __typename?: 'Query' }
  & { getPublicLandingPage: (
    { __typename?: 'LandingPage' }
    & Pick<LandingPage, 'slug' | 'jsonBody'>
  ) }
);

export type CreateLeadMutationVariables = Exact<{
  data: CreateLeadInput;
}>;


export type CreateLeadMutation = (
  { __typename?: 'Mutation' }
  & { createLead: (
    { __typename?: 'LeadsMetric' }
    & Pick<LeadsMetric, 'date'>
  ) }
);

export type CreatePaymentMutationVariables = Exact<{
  data: CreatePaymentInput;
}>;


export type CreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { createPayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'token'>
  ) }
);


export const GetPublicLandingPageDocument = gql`
    query GetPublicLandingPage($slug: String!) {
  getPublicLandingPage(slug: $slug) {
    slug
    jsonBody
  }
}
    `;

/**
 * __useGetPublicLandingPageQuery__
 *
 * To run a query within a React component, call `useGetPublicLandingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicLandingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicLandingPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPublicLandingPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPublicLandingPageQuery, GetPublicLandingPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPublicLandingPageQuery, GetPublicLandingPageQueryVariables>(GetPublicLandingPageDocument, baseOptions);
      }
export function useGetPublicLandingPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPublicLandingPageQuery, GetPublicLandingPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPublicLandingPageQuery, GetPublicLandingPageQueryVariables>(GetPublicLandingPageDocument, baseOptions);
        }
export type GetPublicLandingPageQueryHookResult = ReturnType<typeof useGetPublicLandingPageQuery>;
export type GetPublicLandingPageLazyQueryHookResult = ReturnType<typeof useGetPublicLandingPageLazyQuery>;
export type GetPublicLandingPageQueryResult = ApolloReactCommon.QueryResult<GetPublicLandingPageQuery, GetPublicLandingPageQueryVariables>;
export const CreateLeadDocument = gql`
    mutation CreateLead($data: CreateLeadInput!) {
  createLead(data: $data) {
    date
  }
}
    `;
export type CreateLeadMutationFn = ApolloReactCommon.MutationFunction<CreateLeadMutation, CreateLeadMutationVariables>;

/**
 * __useCreateLeadMutation__
 *
 * To run a mutation, you first call `useCreateLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeadMutation, { data, loading, error }] = useCreateLeadMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLeadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLeadMutation, CreateLeadMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLeadMutation, CreateLeadMutationVariables>(CreateLeadDocument, baseOptions);
      }
export type CreateLeadMutationHookResult = ReturnType<typeof useCreateLeadMutation>;
export type CreateLeadMutationResult = ApolloReactCommon.MutationResult<CreateLeadMutation>;
export type CreateLeadMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLeadMutation, CreateLeadMutationVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($data: CreatePaymentInput!) {
  createPayment(data: $data) {
    token
  }
}
    `;
export type CreatePaymentMutationFn = ApolloReactCommon.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, baseOptions);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = ApolloReactCommon.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;