const uuid = require('uuid').v4;

const orderCredential = (req, res, next) =>{
  res.locals.orderId = req.params.id;
  next();
};

module.exports = orderCredential;