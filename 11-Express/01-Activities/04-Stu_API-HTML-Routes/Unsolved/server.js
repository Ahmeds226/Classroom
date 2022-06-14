// TODO: Import express
const express = require("express");

// TODO: Import 'terms.json' file
const PORT = 3001;
const app = express();

// TODO: Initialize app variable
app.get("/", (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get("./terms", (req, res) => {
  res.json({
    term: "terms",
    description:
      "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries",
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
