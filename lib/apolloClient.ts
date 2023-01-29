// next.jsとapolloClientとhasuracloudの連携

import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined
//　function for create new apollo client
const createApolloClient = () => {
    return new ApolloClient(
        {
            // server side rendering mode
            ssrMode: typeof window === 'undefined',
            link: new HttpLink({
                // paste hasura console api endpoint
                uri: process.env.NEXT_PUBLIC_HASURA_URL,
                headers: { 
                    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY,
                },
            }),
            cache: new InMemoryCache(),
        }
    )
}

export const initializeApollo = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient()
    // for ssg and ssr always create a new apollo client
    if (typeof window === 'undefined') return _apolloClient
    // create the apollo client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}