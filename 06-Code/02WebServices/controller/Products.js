const Product = require("../model/Product");

const createProduct = (req, res) => {
  let product = new Product({
    id_product: req.body.id_product,
    name_product: req.body.name_product,
    brand: req.body.brand,
    model: req.body.model,
    stock: req.body.stock,
    dealerPrice: req.body.dealerPrice,
    subtotal: req.body.subtotal,
    total_iva: req.body.subtotal * 1.12,
    unit_profit: req.body.subtotal - req.body.dealerPrice,
    total_profit: (req.body.subtotal - req.body.dealerPrice) * req.body.stock,
  });

  product.save((err, produc) => {
    err && res.status(500).json(err.message);
    res.status(200).json(produc);
  });
};

const getProducts = (req, res) => {
  Product.find((err, produc) => {
    err && res.status(500).send(err.message);
    res.status(200).json(produc);
  });
};
const updateProduct = (req, res) => {
  Product.findOneAndUpdate(
    { id_product: req.body.id_product },
    {
      name_product: req.body.name_product,
      brand: req.body.brand,
      model: req.body.model,
      stock: req.body.stock,
      dealerPrice: req.body.dealerPrice,
      subtotal: req.body.subtotal,
      total_iva: req.body.subtotal * 1.12,
      unit_profit: req.body.subtotal - req.body.dealerPrice,
      total_profit: (req.body.subtotal - req.body.dealerPrice) * req.body.stock,
    },
    (err, produc) => {
      err && res.status(500).send(err.message);
      res.status(200).send(produc);
    }
  );
};

const deleteProduct = (req, res) => {
  Product.findOneAndDelete(
    { id_product: req.body.id_product },
    (err, produc) => {
      err && res.status(501).send(err.message);
      res.status(200).send(produc);
    }
  );
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
