require("dotenv").config();
const express = require("express");
const currencies = require("./currencies.json");

const currencyRoute = require("./Routers/Currencies/currencies.router");
const userRoute = require("./Routers/Users/users.routers");
const verifyAuth = require("./middlewares/verifyAuth.middleware");

const app = express();

const PORT = 3003;
app.use(verifyAuth);

app.use("/currencies", currencyRoute);

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT);
});
