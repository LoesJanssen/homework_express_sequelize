const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/message", (req, res) => {
  console.log(req.body);
  res.json({
    message: "We received your request body!"
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
