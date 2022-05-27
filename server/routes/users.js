var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

//1-Login
// localhost:4000/users/userlogin
router.post("/users/userlogin", userController.userLogin);

module.exports = router;
