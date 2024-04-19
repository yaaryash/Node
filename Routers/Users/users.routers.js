const router = require("express").Router();
const validateSearchQuery = require("../../middlewares/validateSearchQuery.middleware");
const {
  getUsersData,
  getUsersDataWithUUID,
  getUsersDataWithGenderAndAge,
} = require("../../controllers/users/users.controllers");

router.get("/", getUsersData);
router.get("/search", validateSearchQuery, getUsersDataWithGenderAndAge);
router.get("/:uuid", getUsersDataWithUUID);

module.exports = router;
