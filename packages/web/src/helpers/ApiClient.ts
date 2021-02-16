import fetch, { RequestInit } from 'node-fetch';
import { getAccessToken } from './accessToken';

const apsoApiBase = process.env.REACT_APP_APSO_API_BASE;

interface RequestOptions extends RequestInit {
    credentials?: string;
}

function api<T>(
    uri: string,
    options?: RequestOptions & { data?: { [key: string]: any } }
): Promise<T> {
    let body;
    if (options?.data) {
        body = JSON.stringify(options.data);
        delete options.data;
    }

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (options?.headers) {
        headers = {
            ...headers,
            ...options.headers
        }
    }
    const requestOptions: RequestOptions = {
        ...options,
        body,
        headers,
        credentials: 'include'
    }

    const url = `${apsoApiBase}/${uri}`
    return fetch(url, requestOptions)
        .then(async (response) => {
            if (!response.ok) {
                const errResponse = await response.json()
                throw new Error(errResponse.message)
            }
            return response.json() as Promise<T>
        })

}

interface UserAuthResponse {
    user: any;
    accessToken: string;
}

export const login = (email: string, password: string) =>
    api<UserAuthResponse>('auth/login', {
        method: 'POST',
        data: {
            email,
            password
        },
    });
    
export const loginWithFacebook = (accessToken:string) =>
    api<UserAuthResponse>('auth/login/facebook', {
        method: 'POST',
        data: {
            provider: 'facebook',
            accessToken
        },
    });

export const register = (name: string, email: string, password: string) =>
    api<UserAuthResponse>('auth/register', {
        method: 'POST',
        data: {
            name,
            email,
            password
        },
    });


export const logout = () =>
    api<UserAuthResponse>('auth/logout', {
        method: 'POST',
    });

export const refreshToken = () =>
    api<{ accessToken: string; ok: boolean }>('auth/refresh_token', {
        method: 'POST'
    })

export const prepareCheckout = () => {
    const accessToken = getAccessToken();
    let headers;
    if (accessToken) {
        headers = {
          authorization: `bearer ${accessToken}`
        }
    }
    return api<{ publishKey: string, customer: any }>('plan/prepare-checkout', {
        method: 'GET',
        headers
    })
}
