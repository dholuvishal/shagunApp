const jwt = require("jsonwebtoken");

function createToken(user) {
  return jwt.sign(
    {
      user_id: user._id,
    },
    process.env.TOKEN_PRIVATE_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRE,
    }
  );
}

function decodeToken(token) {
  return jwt.verify(token, process.env.TOKEN_PRIVATE_KEY);
}

module.exports = { createToken, decodeToken };
