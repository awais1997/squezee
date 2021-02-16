import React from 'react';
import Layout from './Layout'
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export const SignUpView = () => (
    <Layout>
        <SignUpForm />
    </Layout>
)
export const SignInView = () => (
    <Layout>
        <SignInForm />
    </Layout>
)