const mongodb = require('mongodb');
const db = require('../data/database');

class Order {
  constructor(order, id) {
    this.order = order;
    this.id = id;
  }

  static async fetchOrders() {
    const orders = await db.getDb().collection('orders').find().toArray();
    return orders;
  }

  async save() {
    const orderData = {
      order: this.order,
      numOfTable: this.id,
    }

    db.getDb().collection('orders').insertOne(orderData);
  }
}

module.exports = Order;