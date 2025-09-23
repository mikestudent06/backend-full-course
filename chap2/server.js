const express = require("express");

const app = express();

const data = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Data here</h1> <p>${JSON.stringify(data)}</p>`);
});

app.post("/api/data", (req, res) => {
  data.push(req.body);
  res.send("Data received");
});

app.delete("/api/data", (req, res) => {
  const id = req.params;
  console.log("id", id);
  // const filteredData =
  // res.send("Data received");
});

app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
