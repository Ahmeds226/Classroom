# Apollo Server

## Demo

- Open [slideshow](https://docs.google.com/presentation/d/15HFGsli3B1UvM8-khsTi7-DjkN1zX8mpLULMn7oGwX4/edit?usp=sharing)
- Open [01-Ins_Apollo_Server](../../01-Activities/01-Ins_Apollo-Server) and run
  - Go to `localhost:3001/graphql`
  - `graphql` is an alternative to the REST pattern, and is quickly gaining ground
  - Apollo Server (and Apollo Client) is a library that allows JS applications to implement the server and client parts of `graphql` easily
  - The Apollo Sandbox is a client
    - The following query will return the name of all classes in our database

```gql
query classes {
  classes {
    name
  }
}
```

- Open [01-Ins_Apollo_Server/server.js](../../01-Activities/01-Ins_Apollo-Server/server.js)
  - Note import of `apollo-server-express`
  - Walk through the `typeDefs` and `resolvers` in `schemas`
  - Note the code to start the Apollo Server
  - Note the middleware supplied with Apollo Server
  - We're still talking to the DB

## Try

- Try [02-Stu_Apollo_Server/README.md](../../01-Activities/02-Stu_Apollo-Server/README.md)
