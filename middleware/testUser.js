const { BadRequestError } = require("../errors");

//this will be for auth routes, so we always get req.user
const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test user, read-only");
  }
  next();
};

module.exports = testUser;
