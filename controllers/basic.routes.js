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
  console.log(req.body.orderId)
  console.log(req.body.orders)
 
    await newOredr.save();
    res.json({
      message:"ok!"
    });
};  

const getCheckOrders = async (req, res, next) => {
  try {
    const orders = await Order.fetchOrders();
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
