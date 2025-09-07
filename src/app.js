const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const feedRoutes = require("./routes/feed");
app.get("/", (req, res, next) => {
  res.send("Hello, World!");
});

app.use(bodyParser.json());

app.use(feedRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
