const express = require("express");

const router = express.Router();

const basicRoutes = require('../controllers/basic.routes');

//-------------------------------------------------------


router.get('/', basicRoutes.getLandingpage);
router.get('/orders/:id', basicRoutes.getOrders);
router.post('/orders/:id', basicRoutes.orders);

router.get('/check', basicRoutes.getCheckOrders);
//-------------------------------------------------------

module.exports = router;