const currencies = require("../../currencies.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (min_value) {
    const result = currencies.data.filter(
      (item) => Number(item.min_size) === Number(min_value)
    );
    res.status(200).json(result);
  } else {
    res.json(currencies.data);
  }
};

const getCurrenciesWithSymbol = (req, res) => {
  //   console.log("<h1>Currency DataBAse</h1>");
  const { symbol } = req.params;
  const result = currencies.data.find(
    (item) => item.id === symbol.toUpperCase()
  );
  if (result) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getCurrencies, getCurrenciesWithSymbol };
