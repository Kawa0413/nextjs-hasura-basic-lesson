import { VFC } from "react";
import Link from "next/dist/client/link";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/queries";
import { GetUsersQuery } from "../types/generated/graphql";
import { Layout } from "../components/Layout";

const FetchMain: VFC = () => {
    const { data, error } = useQuery<GetUsersQuery>(GET_USERS,{
        // network-only:each time it happens, get user data from hasura. suitable for many updates
        // fetchPolicy: 'network-only'

        fetchPolicy: 'cache-and-network'

        // fetchPolicy: 'cache-first'

        // using no-cache, main page get user data , but using cache data in sub page, 
        // so don't get user data in sub page becauser no cache data
        // no-cache likes axios
        // fetchPolicy: 'no-cache'
        
    })
    // if get error
    if (error)
        return(
            <Layout title="Hasura fetchPolicy">
                <p>Error: {error.message}</p>
            </Layout>
        )
    return (
        <Layout title="Hasura fetchPolicy">
            <p className="my-6 font-bold">Hasura main page</p>
            {console.log(data)}
            {data?.users.map((user) => {
                return (
                    <p className="my-1" key={user.id}>{user.name}</p>
                )
                })}
            <Link href="/hasura-sub">
                <a className="mt-6">Next</a>
            </Link>
        </Layout>
    )
}
export default FetchMain