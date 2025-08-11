# alx-rick-and-morty-app

This project is a Next.js application using Apollo Client for GraphQL queries to the Rick and Morty API.

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

## Apollo Client

Apollo Client is configured in `src/graphql/apolloClient.ts` and provided to the app in `pages/_app.tsx`.

## Features

- Fetch characters and episodes from the Rick and Morty GraphQL API
- Uses Apollo Client for efficient data management

## Directory Structure

- `pages/` - Next.js pages
- `src/graphql/` - Apollo Client setup

## License

MIT
