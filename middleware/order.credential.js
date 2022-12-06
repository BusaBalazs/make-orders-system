const uuid = require('uuid').v4;

const orderCredential = (req, res, next) =>{
  res.locals.orderId = uuid();
  next();
};

module.exports = orderCredential;