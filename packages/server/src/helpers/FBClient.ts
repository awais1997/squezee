import fetch, { RequestInit } from 'node-fetch';
import { URLSearchParams } from 'url';
const apiVersion = 'v8.0'
const apiBase = `https://graph.facebook.com/${apiVersion}`;

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

    const url = `${apiBase}/${uri}`
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
    id: string
    name: string
    email: string
}

export const getFacebookUser = (token: string) => {
    const params = new URLSearchParams({ access_token: token, fields: 'id, name, email' })
    return api<UserAuthResponse>('me?' + params, {
        method: 'GET'
    });
}

