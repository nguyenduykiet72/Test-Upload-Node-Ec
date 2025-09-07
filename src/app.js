const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const feedRoutes = require("./routes/feed");
const customerRoutes = require("./routes/customer");
app.get("/", (req, res, next) => {
  res.send("Hello, World!");
});

app.use(bodyParser.json());

app.use(feedRoutes);
app.use(customerRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
