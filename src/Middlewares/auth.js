const User = require("../Models/userModel.js");
const { errorResponse } = require("../Utils/responseMsg.js");
const { decodeToken } = require("../Utils/jwt.js");

const verifyToken = async (req, res, next) => {
  try {
    let token =
      req.headers["authorization"] || req.body.token || req.query.token;

    if (req.headers["authorization"]) {
      token = token.substring(7);
    }
    if (!token) {
      return res
        .status(401)
        .json(
          errorResponse(
            401,
            "Authentication failed. Please provide a valid token to access this resource."
          )
        );
    }

    const user = await User.findOne({ _id: decodeToken(token).user_id });

    if (!user) {
      return res
        .status(404)
        .json(
          errorResponse(
            404,
            "No account found with this email or mobile number. Please check and try again."
          )
        );
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(`Error in authMiddleware:verifyToken: ${error}`);
    next(error);
  }
};

const verifyUserRole = (roles) => async (req, res, next) => {
  try {
    const user = req.user;

    if (roles.includes(user.role)) {
      return next();
    }

    res
      .status(403)
      .json(
        errorResponse(
          403,
          `Access denied. You do not have permission to access this resource.`
        )
      );
  } catch (error) {
    console.error(`Error in authMiddleware:verifyUserRole: ${error}`);
    next(error);
  }
};

module.exports = { verifyToken, verifyUserRole };
