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

export type GetAccountQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetAccountQuery = (
  { __typename?: 'Query' }
  & { getAccount: (
    { __typename?: 'Account' }
    & Pick<Account, 'name' | 'stripe_customer_id'>
  ) }
);

export type GetAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountsQuery = (
  { __typename?: 'Query' }
  & { getAccounts: Array<(
    { __typename?: 'Account' }
    & Pick<Account, 'name' | 'stripe_customer_id'>
  )> }
);

export type CreateAccountMutationVariables = Exact<{
  data: CreateAccountInput;
}>;


export type CreateAccountMutation = (
  { __typename?: 'Mutation' }
  & { createAccount: (
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'name' | 'stripe_customer_id'>
  ) }
);

export type UpdateAccountMutationVariables = Exact<{
  data: AccountInput;
}>;


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'name' | 'stripe_customer_id'>
  ) }
);

export type GetLandingPageQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetLandingPageQuery = (
  { __typename?: 'Query' }
  & { getLandingPage: (
    { __typename?: 'LandingPage' }
    & Pick<LandingPage, 'slug' | 'jsonBody'>
  ) }
);

export type GetLandingPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLandingPagesQuery = (
  { __typename?: 'Query' }
  & { getLandingPages: Array<(
    { __typename?: 'LandingPage' }
    & Pick<LandingPage, 'id' | 'slug' | 'jsonBody' | 'leadCount' | 'updatedAt'>
  )> }
);

export type CreateLandingPageMutationVariables = Exact<{
  data: CreateLandingPageInput;
}>;


export type CreateLandingPageMutation = (
  { __typename?: 'Mutation' }
  & { createLandingPage: (
    { __typename?: 'LandingPage' }
    & Pick<LandingPage, 'id' | 'slug' | 'jsonBody'>
  ) }
);

export type UpdateLandingPageMutationVariables = Exact<{
  data: UpdateLandingPageInput;
}>;


export type UpdateLandingPageMutation = (
  { __typename?: 'Mutation' }
  & { updateLandingPage: (
    { __typename?: 'LandingPage' }
    & Pick<LandingPage, 'id' | 'slug' | 'jsonBody'>
  ) }
);

export type GetLeadsMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeadsMetricsQuery = (
  { __typename?: 'Query' }
  & { getLeadsMetrics: Array<(
    { __typename?: 'LeadsMetric' }
    & Pick<LeadsMetric, 'landingPageId' | 'count' | 'date' | 'title'>
  )> }
);

export type GetMembershipQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetMembershipQuery = (
  { __typename?: 'Query' }
  & { getMembership: (
    { __typename?: 'Membership' }
    & Pick<Membership, 'active'>
  ) }
);

export type GetMembershipsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembershipsQuery = (
  { __typename?: 'Query' }
  & { getMemberships: Array<(
    { __typename?: 'Membership' }
    & Pick<Membership, 'active'>
  )> }
);

export type CreateMembershipMutationVariables = Exact<{
  data: CreateMembershipInput;
}>;


export type CreateMembershipMutation = (
  { __typename?: 'Mutation' }
  & { createMembership: (
    { __typename?: 'Membership' }
    & Pick<Membership, 'id' | 'active'>
  ) }
);

export type UpdateMembershipMutationVariables = Exact<{
  data: MembershipInput;
}>;


export type UpdateMembershipMutation = (
  { __typename?: 'Mutation' }
  & { updateMembership: (
    { __typename?: 'Membership' }
    & Pick<Membership, 'id' | 'active'>
  ) }
);

export type GetPaymentQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetPaymentQuery = (
  { __typename?: 'Query' }
  & { getPayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'token'>
  ) }
);

export type GetPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentsQuery = (
  { __typename?: 'Query' }
  & { getPayments: Array<(
    { __typename?: 'Payment' }
    & Pick<Payment, 'token'>
  )> }
);

export type CreatePaymentMutationVariables = Exact<{
  data: CreatePaymentInput;
}>;


export type CreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { createPayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'id' | 'token'>
  ) }
);

export type UpdatePaymentMutationVariables = Exact<{
  data: PaymentInput;
}>;


export type UpdatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { updatePayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'id' | 'token'>
  ) }
);

export type GetPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansQuery = (
  { __typename?: 'Query' }
  & { getPlans: Array<(
    { __typename?: 'PlanDisplay' }
    & Pick<PlanDisplay, 'title' | 'price' | 'subheader' | 'description' | 'buttonText' | 'buttonVariant' | 'planId'>
  )> }
);

export type GetCurrentPlanQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentPlanQuery = (
  { __typename?: 'Query' }
  & { getCurrentPlan: (
    { __typename?: 'PlanDisplay' }
    & Pick<PlanDisplay, 'title' | 'price' | 'subheader' | 'description' | 'buttonText' | 'buttonVariant' | 'planId'>
  ) }
);

export type RetryInvoiceMutationVariables = Exact<{
  data: InvoiceInput;
}>;


export type RetryInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { retryInvoice: (
    { __typename?: 'Invoice' }
    & Pick<Invoice, 'paymentMethodId' | 'customerId' | 'invoiceId'>
  ) }
);

export type CreateSubscriptionMutationVariables = Exact<{
  data: SubscriptionInput;
}>;


export type CreateSubscriptionMutation = (
  { __typename?: 'Mutation' }
  & { createSubscription: (
    { __typename?: 'Subscription' }
    & Pick<Subscription, 'paymentMethodId' | 'customerId' | 'priceId'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'name'>
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  ) }
);

export type UpdateMeMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type UpdateMeMutation = (
  { __typename?: 'Mutation' }
  & { updateMe: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  ) }
);


export const GetAccountDocument = gql`
    query GetAccount($id: Float!) {
  getAccount(id: $id) {
    name
    stripe_customer_id
  }
}
    `;

/**
 * __useGetAccountQuery__
 *
 * To run a query within a React component, call `useGetAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAccountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAccountQuery, GetAccountQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, baseOptions);
      }
export function useGetAccountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccountQuery, GetAccountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, baseOptions);
        }
export type GetAccountQueryHookResult = ReturnType<typeof useGetAccountQuery>;
export type GetAccountLazyQueryHookResult = ReturnType<typeof useGetAccountLazyQuery>;
export type GetAccountQueryResult = ApolloReactCommon.QueryResult<GetAccountQuery, GetAccountQueryVariables>;
export const GetAccountsDocument = gql`
    query GetAccounts {
  getAccounts {
    name
    stripe_customer_id
  }
}
    `;

/**
 * __useGetAccountsQuery__
 *
 * To run a query within a React component, call `useGetAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAccountsQuery, GetAccountsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAccountsQuery, GetAccountsQueryVariables>(GetAccountsDocument, baseOptions);
      }
export function useGetAccountsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccountsQuery, GetAccountsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAccountsQuery, GetAccountsQueryVariables>(GetAccountsDocument, baseOptions);
        }
export type GetAccountsQueryHookResult = ReturnType<typeof useGetAccountsQuery>;
export type GetAccountsLazyQueryHookResult = ReturnType<typeof useGetAccountsLazyQuery>;
export type GetAccountsQueryResult = ApolloReactCommon.QueryResult<GetAccountsQuery, GetAccountsQueryVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($data: CreateAccountInput!) {
  createAccount(data: $data) {
    id
    name
    stripe_customer_id
  }
}
    `;
export type CreateAccountMutationFn = ApolloReactCommon.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, baseOptions);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = ApolloReactCommon.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($data: AccountInput!) {
  updateAccount(data: $data) {
    id
    name
    stripe_customer_id
  }
}
    `;
export type UpdateAccountMutationFn = ApolloReactCommon.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = ApolloReactCommon.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const GetLandingPageDocument = gql`
    query GetLandingPage($id: Float!) {
  getLandingPage(id: $id) {
    slug
    jsonBody
  }
}
    `;

/**
 * __useGetLandingPageQuery__
 *
 * To run a query within a React component, call `useGetLandingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLandingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLandingPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLandingPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLandingPageQuery, GetLandingPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLandingPageQuery, GetLandingPageQueryVariables>(GetLandingPageDocument, baseOptions);
      }
export function useGetLandingPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLandingPageQuery, GetLandingPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLandingPageQuery, GetLandingPageQueryVariables>(GetLandingPageDocument, baseOptions);
        }
export type GetLandingPageQueryHookResult = ReturnType<typeof useGetLandingPageQuery>;
export type GetLandingPageLazyQueryHookResult = ReturnType<typeof useGetLandingPageLazyQuery>;
export type GetLandingPageQueryResult = ApolloReactCommon.QueryResult<GetLandingPageQuery, GetLandingPageQueryVariables>;
export const GetLandingPagesDocument = gql`
    query GetLandingPages {
  getLandingPages {
    id
    slug
    jsonBody
    leadCount
    updatedAt
  }
}
    `;

/**
 * __useGetLandingPagesQuery__
 *
 * To run a query within a React component, call `useGetLandingPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLandingPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLandingPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLandingPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLandingPagesQuery, GetLandingPagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLandingPagesQuery, GetLandingPagesQueryVariables>(GetLandingPagesDocument, baseOptions);
      }
export function useGetLandingPagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLandingPagesQuery, GetLandingPagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLandingPagesQuery, GetLandingPagesQueryVariables>(GetLandingPagesDocument, baseOptions);
        }
export type GetLandingPagesQueryHookResult = ReturnType<typeof useGetLandingPagesQuery>;
export type GetLandingPagesLazyQueryHookResult = ReturnType<typeof useGetLandingPagesLazyQuery>;
export type GetLandingPagesQueryResult = ApolloReactCommon.QueryResult<GetLandingPagesQuery, GetLandingPagesQueryVariables>;
export const CreateLandingPageDocument = gql`
    mutation CreateLandingPage($data: CreateLandingPageInput!) {
  createLandingPage(data: $data) {
    id
    slug
    jsonBody
  }
}
    `;
export type CreateLandingPageMutationFn = ApolloReactCommon.MutationFunction<CreateLandingPageMutation, CreateLandingPageMutationVariables>;

/**
 * __useCreateLandingPageMutation__
 *
 * To run a mutation, you first call `useCreateLandingPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLandingPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLandingPageMutation, { data, loading, error }] = useCreateLandingPageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLandingPageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLandingPageMutation, CreateLandingPageMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLandingPageMutation, CreateLandingPageMutationVariables>(CreateLandingPageDocument, baseOptions);
      }
export type CreateLandingPageMutationHookResult = ReturnType<typeof useCreateLandingPageMutation>;
export type CreateLandingPageMutationResult = ApolloReactCommon.MutationResult<CreateLandingPageMutation>;
export type CreateLandingPageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLandingPageMutation, CreateLandingPageMutationVariables>;
export const UpdateLandingPageDocument = gql`
    mutation UpdateLandingPage($data: UpdateLandingPageInput!) {
  updateLandingPage(data: $data) {
    id
    slug
    jsonBody
  }
}
    `;
export type UpdateLandingPageMutationFn = ApolloReactCommon.MutationFunction<UpdateLandingPageMutation, UpdateLandingPageMutationVariables>;

/**
 * __useUpdateLandingPageMutation__
 *
 * To run a mutation, you first call `useUpdateLandingPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLandingPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLandingPageMutation, { data, loading, error }] = useUpdateLandingPageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLandingPageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLandingPageMutation, UpdateLandingPageMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLandingPageMutation, UpdateLandingPageMutationVariables>(UpdateLandingPageDocument, baseOptions);
      }
export type UpdateLandingPageMutationHookResult = ReturnType<typeof useUpdateLandingPageMutation>;
export type UpdateLandingPageMutationResult = ApolloReactCommon.MutationResult<UpdateLandingPageMutation>;
export type UpdateLandingPageMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateLandingPageMutation, UpdateLandingPageMutationVariables>;
export const GetLeadsMetricsDocument = gql`
    query GetLeadsMetrics {
  getLeadsMetrics {
    landingPageId
    count
    date
    title
  }
}
    `;

/**
 * __useGetLeadsMetricsQuery__
 *
 * To run a query within a React component, call `useGetLeadsMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeadsMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeadsMetricsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLeadsMetricsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLeadsMetricsQuery, GetLeadsMetricsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLeadsMetricsQuery, GetLeadsMetricsQueryVariables>(GetLeadsMetricsDocument, baseOptions);
      }
export function useGetLeadsMetricsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLeadsMetricsQuery, GetLeadsMetricsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLeadsMetricsQuery, GetLeadsMetricsQueryVariables>(GetLeadsMetricsDocument, baseOptions);
        }
export type GetLeadsMetricsQueryHookResult = ReturnType<typeof useGetLeadsMetricsQuery>;
export type GetLeadsMetricsLazyQueryHookResult = ReturnType<typeof useGetLeadsMetricsLazyQuery>;
export type GetLeadsMetricsQueryResult = ApolloReactCommon.QueryResult<GetLeadsMetricsQuery, GetLeadsMetricsQueryVariables>;
export const GetMembershipDocument = gql`
    query GetMembership($id: Float!) {
  getMembership(id: $id) {
    active
  }
}
    `;

/**
 * __useGetMembershipQuery__
 *
 * To run a query within a React component, call `useGetMembershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembershipQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMembershipQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMembershipQuery, GetMembershipQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMembershipQuery, GetMembershipQueryVariables>(GetMembershipDocument, baseOptions);
      }
export function useGetMembershipLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMembershipQuery, GetMembershipQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMembershipQuery, GetMembershipQueryVariables>(GetMembershipDocument, baseOptions);
        }
export type GetMembershipQueryHookResult = ReturnType<typeof useGetMembershipQuery>;
export type GetMembershipLazyQueryHookResult = ReturnType<typeof useGetMembershipLazyQuery>;
export type GetMembershipQueryResult = ApolloReactCommon.QueryResult<GetMembershipQuery, GetMembershipQueryVariables>;
export const GetMembershipsDocument = gql`
    query GetMemberships {
  getMemberships {
    active
  }
}
    `;

/**
 * __useGetMembershipsQuery__
 *
 * To run a query within a React component, call `useGetMembershipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembershipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembershipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMembershipsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMembershipsQuery, GetMembershipsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMembershipsQuery, GetMembershipsQueryVariables>(GetMembershipsDocument, baseOptions);
      }
export function useGetMembershipsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMembershipsQuery, GetMembershipsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMembershipsQuery, GetMembershipsQueryVariables>(GetMembershipsDocument, baseOptions);
        }
export type GetMembershipsQueryHookResult = ReturnType<typeof useGetMembershipsQuery>;
export type GetMembershipsLazyQueryHookResult = ReturnType<typeof useGetMembershipsLazyQuery>;
export type GetMembershipsQueryResult = ApolloReactCommon.QueryResult<GetMembershipsQuery, GetMembershipsQueryVariables>;
export const CreateMembershipDocument = gql`
    mutation CreateMembership($data: CreateMembershipInput!) {
  createMembership(data: $data) {
    id
    active
  }
}
    `;
export type CreateMembershipMutationFn = ApolloReactCommon.MutationFunction<CreateMembershipMutation, CreateMembershipMutationVariables>;

/**
 * __useCreateMembershipMutation__
 *
 * To run a mutation, you first call `useCreateMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMembershipMutation, { data, loading, error }] = useCreateMembershipMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMembershipMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMembershipMutation, CreateMembershipMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateMembershipMutation, CreateMembershipMutationVariables>(CreateMembershipDocument, baseOptions);
      }
export type CreateMembershipMutationHookResult = ReturnType<typeof useCreateMembershipMutation>;
export type CreateMembershipMutationResult = ApolloReactCommon.MutationResult<CreateMembershipMutation>;
export type CreateMembershipMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMembershipMutation, CreateMembershipMutationVariables>;
export const UpdateMembershipDocument = gql`
    mutation UpdateMembership($data: MembershipInput!) {
  updateMembership(data: $data) {
    id
    active
  }
}
    `;
export type UpdateMembershipMutationFn = ApolloReactCommon.MutationFunction<UpdateMembershipMutation, UpdateMembershipMutationVariables>;

/**
 * __useUpdateMembershipMutation__
 *
 * To run a mutation, you first call `useUpdateMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMembershipMutation, { data, loading, error }] = useUpdateMembershipMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMembershipMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMembershipMutation, UpdateMembershipMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMembershipMutation, UpdateMembershipMutationVariables>(UpdateMembershipDocument, baseOptions);
      }
export type UpdateMembershipMutationHookResult = ReturnType<typeof useUpdateMembershipMutation>;
export type UpdateMembershipMutationResult = ApolloReactCommon.MutationResult<UpdateMembershipMutation>;
export type UpdateMembershipMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMembershipMutation, UpdateMembershipMutationVariables>;
export const GetPaymentDocument = gql`
    query GetPayment($id: Float!) {
  getPayment(id: $id) {
    token
  }
}
    `;

/**
 * __useGetPaymentQuery__
 *
 * To run a query within a React component, call `useGetPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPaymentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPaymentQuery, GetPaymentQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPaymentQuery, GetPaymentQueryVariables>(GetPaymentDocument, baseOptions);
      }
export function useGetPaymentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPaymentQuery, GetPaymentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPaymentQuery, GetPaymentQueryVariables>(GetPaymentDocument, baseOptions);
        }
export type GetPaymentQueryHookResult = ReturnType<typeof useGetPaymentQuery>;
export type GetPaymentLazyQueryHookResult = ReturnType<typeof useGetPaymentLazyQuery>;
export type GetPaymentQueryResult = ApolloReactCommon.QueryResult<GetPaymentQuery, GetPaymentQueryVariables>;
export const GetPaymentsDocument = gql`
    query GetPayments {
  getPayments {
    token
  }
}
    `;

/**
 * __useGetPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, baseOptions);
      }
export function useGetPaymentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, baseOptions);
        }
export type GetPaymentsQueryHookResult = ReturnType<typeof useGetPaymentsQuery>;
export type GetPaymentsLazyQueryHookResult = ReturnType<typeof useGetPaymentsLazyQuery>;
export type GetPaymentsQueryResult = ApolloReactCommon.QueryResult<GetPaymentsQuery, GetPaymentsQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($data: CreatePaymentInput!) {
  createPayment(data: $data) {
    id
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
export const UpdatePaymentDocument = gql`
    mutation UpdatePayment($data: PaymentInput!) {
  updatePayment(data: $data) {
    id
    token
  }
}
    `;
export type UpdatePaymentMutationFn = ApolloReactCommon.MutationFunction<UpdatePaymentMutation, UpdatePaymentMutationVariables>;

/**
 * __useUpdatePaymentMutation__
 *
 * To run a mutation, you first call `useUpdatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePaymentMutation, { data, loading, error }] = useUpdatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePaymentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePaymentMutation, UpdatePaymentMutationVariables>(UpdatePaymentDocument, baseOptions);
      }
export type UpdatePaymentMutationHookResult = ReturnType<typeof useUpdatePaymentMutation>;
export type UpdatePaymentMutationResult = ApolloReactCommon.MutationResult<UpdatePaymentMutation>;
export type UpdatePaymentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>;
export const GetPlansDocument = gql`
    query GetPlans {
  getPlans {
    title
    price
    subheader
    description
    buttonText
    buttonVariant
    planId
  }
}
    `;

/**
 * __useGetPlansQuery__
 *
 * To run a query within a React component, call `useGetPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlansQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, baseOptions);
      }
export function useGetPlansLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, baseOptions);
        }
export type GetPlansQueryHookResult = ReturnType<typeof useGetPlansQuery>;
export type GetPlansLazyQueryHookResult = ReturnType<typeof useGetPlansLazyQuery>;
export type GetPlansQueryResult = ApolloReactCommon.QueryResult<GetPlansQuery, GetPlansQueryVariables>;
export const GetCurrentPlanDocument = gql`
    query GetCurrentPlan {
  getCurrentPlan {
    title
    price
    subheader
    description
    buttonText
    buttonVariant
    planId
  }
}
    `;

/**
 * __useGetCurrentPlanQuery__
 *
 * To run a query within a React component, call `useGetCurrentPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentPlanQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentPlanQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCurrentPlanQuery, GetCurrentPlanQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCurrentPlanQuery, GetCurrentPlanQueryVariables>(GetCurrentPlanDocument, baseOptions);
      }
export function useGetCurrentPlanLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCurrentPlanQuery, GetCurrentPlanQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCurrentPlanQuery, GetCurrentPlanQueryVariables>(GetCurrentPlanDocument, baseOptions);
        }
export type GetCurrentPlanQueryHookResult = ReturnType<typeof useGetCurrentPlanQuery>;
export type GetCurrentPlanLazyQueryHookResult = ReturnType<typeof useGetCurrentPlanLazyQuery>;
export type GetCurrentPlanQueryResult = ApolloReactCommon.QueryResult<GetCurrentPlanQuery, GetCurrentPlanQueryVariables>;
export const RetryInvoiceDocument = gql`
    mutation RetryInvoice($data: InvoiceInput!) {
  retryInvoice(data: $data) {
    paymentMethodId
    customerId
    invoiceId
  }
}
    `;
export type RetryInvoiceMutationFn = ApolloReactCommon.MutationFunction<RetryInvoiceMutation, RetryInvoiceMutationVariables>;

/**
 * __useRetryInvoiceMutation__
 *
 * To run a mutation, you first call `useRetryInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRetryInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [retryInvoiceMutation, { data, loading, error }] = useRetryInvoiceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRetryInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RetryInvoiceMutation, RetryInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<RetryInvoiceMutation, RetryInvoiceMutationVariables>(RetryInvoiceDocument, baseOptions);
      }
export type RetryInvoiceMutationHookResult = ReturnType<typeof useRetryInvoiceMutation>;
export type RetryInvoiceMutationResult = ApolloReactCommon.MutationResult<RetryInvoiceMutation>;
export type RetryInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<RetryInvoiceMutation, RetryInvoiceMutationVariables>;
export const CreateSubscriptionDocument = gql`
    mutation CreateSubscription($data: SubscriptionInput!) {
  createSubscription(data: $data) {
    paymentMethodId
    customerId
    priceId
  }
}
    `;
export type CreateSubscriptionMutationFn = ApolloReactCommon.MutationFunction<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;

/**
 * __useCreateSubscriptionMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionMutation, { data, loading, error }] = useCreateSubscriptionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubscriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>(CreateSubscriptionDocument, baseOptions);
      }
export type CreateSubscriptionMutationHookResult = ReturnType<typeof useCreateSubscriptionMutation>;
export type CreateSubscriptionMutationResult = ApolloReactCommon.MutationResult<CreateSubscriptionMutation>;
export type CreateSubscriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    email
    name
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: Float!) {
  getUser(id: $id) {
    name
    email
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    name
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    id
    name
    email
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($data: CreateUserInput!) {
  updateMe(data: $data) {
    name
    email
  }
}
    `;
export type UpdateMeMutationFn = ApolloReactCommon.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, baseOptions);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = ApolloReactCommon.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;