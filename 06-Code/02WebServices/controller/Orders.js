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

const getIdOrders = async (req, res) => {
  try {
    const OrdObj = await Order.findOne({
      id_order: req.query.id_order
    });
    if (OrdObj == null) {
      res.status(400).json("Order not found");
    } else {
      res.json({
      id_product: OrdObj.id_product,
      id_user: OrdObj.id_user,
      id_invoice: OrdObj.id_invoice,
      amount: OrdObj.amount,
      total_order: OrdObj.total_order,
      apply_discount: OrdObj.apply_discount,
      discount_value: OrdObj.discount_value,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

const deleteOrder = async (req, res) => {
  try {
    const id=req.query.id_order;
    const order = await Order.findOneAndDelete({
      id_order: id});
    if (!order) {
      return res.status(404).send("Order not found");
    }
    res.send(`Order with id ${id} deleted`); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders, updateOrder, deleteOrder,getIdOrders };
