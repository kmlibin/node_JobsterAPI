const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");
const testUser = require("../middleware/testUser");

const rateLimiter = require("express-rate-limit");
const apiLimiter = rateLimiter({
  //15 min
  windowMS: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: "too many requests, please try after 15 min",
  },
});

const { register, login, updateUser } = require("../controllers/auth");

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

module.exports = router;
