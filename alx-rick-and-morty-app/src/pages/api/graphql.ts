import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

// Simple schema and resolver
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(server);
