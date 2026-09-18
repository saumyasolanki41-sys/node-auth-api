const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is missing");
  }

  return jwt.sign({}, secret, {
    algorithm: "HS256",
    subject: userId.toString(),
    issuer: "node-auth-api",
    audience: "node-auth-api-client",
    expiresIn: "1h",
  });
};

module.exports = { generateAccessToken };