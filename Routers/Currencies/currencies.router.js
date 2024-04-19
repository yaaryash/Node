const router = require("express").Router();
const {
  getCurrencies,
  getCurrenciesWithSymbol,
} = require("../../controllers/currencies/currencies.controllers");

router.get("/", getCurrencies);
router.get("/:symbol", getCurrenciesWithSymbol);

module.exports = router;
