
"use client";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
import client from "../apolloClient";

function HelloQuery() {
  const { data, loading, error } = useQuery(gql`
    query {
      hello
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <p>GraphQL says: {data.hello}</p>;
}

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-2xl font-bold mb-4">Next.js + Apollo GraphQL Example</h1>
        <HelloQuery />
      </main>
    </ApolloProvider>
  );
}