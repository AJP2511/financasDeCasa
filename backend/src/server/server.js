const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const port = 3003;

app.listen(port, () => {
  console.log(`Server on-line no endereço http://localhost:${port}`);
});

module.exports = app;
