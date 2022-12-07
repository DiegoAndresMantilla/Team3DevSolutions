const Order = require("../model/Order");

const createOrder = (req, res) => {
  let order = new Order({
    id_order: req.body.id_order,
    id_product: req.body.id_product,
    id_user: req.body.id_user,
    id_invoice: req.body.id_invoice,
    amount: req.body.amount,
    total_order: req.body.total_order,
    apply_discount: req.body.apply_discount,
    discount_value: req.body.discount_value,
    discount_price: (req.body.total_order * req.body.discount_value) / 100,
  });

  order.save((err, ordr) => {
    err && res.status(500).json(err.message);
    res.status(200).json(ordr);
  });
};

const getOrders = (req, res) => {
  Order.find((err, ordr) => {
    err && res.status(500).send(err.message);
    res.status(200).json(ordr);
  });
};
const updateOrder = (req, res) => {
  Order.findOneAndUpdate(
    { id_order: req.body.id_order },
    {
      id_product: req.body.id_product,
      id_user: req.body.id_user,
      id_invoice: req.body.id_invoice,
      amount: req.body.amount,
      total_order: req.body.total_order,
      apply_discount: req.body.apply_discount,
      discount_value: req.body.discount_value,
      discount_price: (req.body.total_order * req.body.discount_value) / 100,
    },
    (err, ordr) => {
      err && res.status(500).send(err.message);
      res.status(200).send(ordr);
    }
  );
};

const deleteOrder = (req, res) => {
  Order.findOneAndDelete({ id_order: req.body.id_order }, (err, ordr) => {
    err && res.status(501).send(err.message);
    res.status(200).send(ordr);
  });
};

module.exports = { createOrder, getOrders, updateOrder, deleteOrder };
