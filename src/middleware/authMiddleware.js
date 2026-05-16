const { verifyToken } = require("../utils/jwt");
const ApiError = require("../utils/ApiError");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = verifyToken(token);

      if (!decoded) {
        throw new ApiError(401, "Not authorized, token failed");
      }

      // Add user info to request
      req.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  }

  if (!token) {
    next(new ApiError(401, "Not authorized, no token"));
  }
};

module.exports = { protect };
