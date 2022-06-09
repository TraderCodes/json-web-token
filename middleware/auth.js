const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');
const authorizationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // check if there is token
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new CustomAPIError('No token provided', 401);
  }
  // spliting returns array
  const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
const {id,username} = decoded
req.user={id,username}
next();
      console.log(decoded);
    } catch (error) {
      throw new CustomAPIError('nOT AUTHORIZED TO ACCESS THIS ROUTE', 401);
    }
};
module.exports = authorizationMiddleware;
