const errorHandle = (error, req, res, next) => {
  console.log(error);
  console.log(error.details);
  res.locals.errorMsg = error.details;
  res.status(500).render("500");
};

module.exports = errorHandle;
