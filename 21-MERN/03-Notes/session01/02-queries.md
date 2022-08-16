# Queries

## Demo

- Open [03-Ins_Queries](../../01-Activities/03-Ins_Queries) and run
  - Open up [localhost:3001/graphql](http://localhost:3001/graphql)
  - Click the `schema` icon at the top left
  - Select `SDL` inspect schema
  - Object types
  - Query types
  - Click on the square `explorer` icon below the `schema` icon to return to the main Sandbox page
  - Create and run a query to list all classes

```gql
query classes {
  classes {
    name
  }
}
```

- Add `professor.name` to the list of fields

## Try

- Try [04-Stu_Queries/README.md](../../01-Activities/04-Stu_Queries/README.md)
