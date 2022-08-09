# Node and Mongo

## Demo

- Open [03-Ins_Create-Read](../../01-Activities/03-Ins_Create-Read)
  - Demonstrate the `POST` `/create` and `GET` `/read` routes
  - Walk through the code
- Open [05-Ins_Update-Delete](../../01-Activities/05-Ins_Update-Delete/README.md)
  - Update 03 to include a delete endpoint

```js
db.collection("bookCollection").deleteOne(
  // This is the filter. We delete only the document that matches the _id provided in the request body,
  { _id: ObjectId(req.body.id) },
  (err) => {
    if (err) throw err;
    res.send("Document deleted");
  }
);
```

- Update 03 to include an update endpoint

```js
db.groceryCollection.updateOne({ item: "banana" }, { $set: { item: "apple" } });
```

## Try

- Try [04-Stu_Create-Read/README.md](../../01-Activities/04-Stu_Create-Read/README.md)
- Try [06-Stu_Update-Delete/README.md](../../01-Activities/06-Stu_Update-Delete/README.md)
