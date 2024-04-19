const getQueryErrors = require("../validators/users.validator");
const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;
  const error = getQueryErrors({ gender, age });
  if (error) return res.sendStatus(422).json(error);

  next();
};

module.exports = validateSearchQuery;
