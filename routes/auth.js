const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();


// /api/auth/register
router.post("/register", register);

// /api/auth/login
router.post("/login", login);

module.exports = router;
