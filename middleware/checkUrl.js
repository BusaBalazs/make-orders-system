const checkUrl = (req, res, next) => {
  if (req.url === "/orders/0000") {
    res.redirect('/orders')
  }
  
  next();
}

module.exports = checkUrl;