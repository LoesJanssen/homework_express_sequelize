const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const messageValidatorMiddleware = (req, res, next) => {
  if (req.body.message === "") {
    res.status(400).json({
      message: "Bad request"
    });
  } else if (req.body.message.id > 5) {
    res.status(429).json({
      message: "Too many requests"
    });
  } else {
    next();
  }
};

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/messages", messageValidatorMiddleware, (req, res) => {
  console.log(req.body);
  res.send({ message: "This is the message that was send" + req.body.message });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
