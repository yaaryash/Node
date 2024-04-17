const express = require("express");
const currencies = require("./currencies.json");
const {
  getCurrencies,
  getCurrenciesWithSymbol,
} = require("./controllers/currencies/currencies.controllers");
const {
  getUsersData,
  getUsersDataWithUUID,
  getUsersDataWithGenderAndAge,
} = require("./controllers/users/users.controllers");
const app = express();

const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency DataBAse</h1>");
});
app.get("/currencies", getCurrencies);
app.get("/currencies/:symbol", getCurrenciesWithSymbol);
app.get("/users", getUsersData);
app.get("/users/:uuid", getUsersDataWithUUID);
app.get("/users/search", getUsersDataWithGenderAndAge);

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT);
});
