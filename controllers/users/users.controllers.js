const { data } = require("../../users.json");
const getQueryErrors = require("../../validators/users.validator");
const getUsersData = (req, res) => {
  res.json(data);
};
const getUsersDataWithUUID = (req, res) => {
  const { uuid } = req.params;
  const result = data.find((i) => i.login.uuid === uuid);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};
const getUsersDataWithGenderAndAge = (req, res) => {
  const { gender, age } = req.query;
  console.log(req.query);
  console.log(gender, age);
  if (gender && age) {
    const results = data.filter(
      (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
    );
    res.json(results);
  } else if (gender) {
    const results = data.filter((item) => item.gender === gender);
    res.json(results);
  } else if (age) {
    const results = data.filter((item) => Number(item.dob.age) >= Number(age));
    res.json(results);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  getUsersData,
  getUsersDataWithUUID,
  getUsersDataWithGenderAndAge,
};
