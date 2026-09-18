const express = require("express");
const { requireAuth } = require("../middleware/auth.middleware");
const {
  signup,
  verifyOtp,
  resendOtp,
  login,
  getMe,
} = require("../controllers/auth.controller");

const {
  validateSignup,
  validateVerifyOtp,
  validateResendOtp,
  validateLogin,
} = require("../validators/auth.validator");

const {
  signupLimiter,
  verifyOtpLimiter,
  resendOtpLimiter,
  loginLimiter,
} = require("../middleware/rateLimit.middleware");

const router = express.Router();

router.post(
  "/signup",
  signupLimiter,
  validateSignup,
  signup
);

router.post(
  "/verify-otp",
  verifyOtpLimiter,
  validateVerifyOtp,
  verifyOtp
);

router.post(
  "/resend-otp",
  resendOtpLimiter,
  validateResendOtp,
  resendOtp
);

router.post(
  "/login",
  loginLimiter,
  validateLogin,
  login
);

router.get(
  "/me",
  requireAuth,
  getMe
);

module.exports = router;