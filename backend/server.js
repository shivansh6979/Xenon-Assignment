const express = require("express");
const products = require("./data/products");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/api/products", (req, res) => {
  res.json(products);
  // console.log("res", res);
  // res.send(products);
  //res.send('Hello World!')
});

//for fetching each product uniquely

app.get("/api/products/:id", (req, res) => {
  console.log("request", req);
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});

app.listen(3000, console.log("Server Running on Server 3000"));
