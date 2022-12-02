const { fetchOrders } = require("../models/new.orders.model");
const Order = require("../models/new.orders.model");

const getLandingpage = (req, res, next) => {
  res.render("landingpage");
};

const getOrders = (req, res, next) => {
  numOfTable = req.params.id;
  res.render("orders", { numOfTable: numOfTable });
};

const orders = async (req, res, next) => {
  numOfTable = req.params.id;
  const newOredr = new Order(req.body.orders, numOfTable);

  try {
    await newOredr.save();
    res.redirect("/orders/" + numOfTable);
  } catch (error) {
    next(error);
  }
};

const getCheckOrders = async (req, res, next) => {
  try {
    const orders = await Order.fetchOrders();
    console.log(orders);
    res.render("check", {orders: orders});
  } catch (error) {
    next(error);
  }
};
//------------------------------------------------
module.exports = {
  getLandingpage: getLandingpage,
  getOrders: getOrders,
  getCheckOrders: getCheckOrders,
  orders: orders,
};
