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

const getIdProducts = async (req, res) => {
  try {
    const prodObj = await Product.findOne({
      id_product: req.query.id_product,
    });
    if (prodObj == null) {
      res.status(400).json("Product not found");
    } else {
      res.json({
      name_product: prodObj.name_product,
      brand: prodObj.brand,
      model: prodObj.model,
      stock: prodObj.stock,
      dealerPrice: prodObj.dealerPrice,
      subtotal: prodObj.subtotal,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id_product: req.query.id_product },
      {
        name_product: req.body.name_product,
        brand: req.body.brand,
        model: req.body.model,
        stock: req.body.stock,
        dealerPrice: req.body.dealerPrice,
        subtotal: req.body.subtotal,
        total_iva: req.body.subtotal * 1.12,
        total_profit: (req.body.subtotal - req.body.dealerPrice) * req.body.stock,
      },
      { new: true }
    );
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id=req.query.id_product;
    const product = await Product.findOneAndDelete({
      id_product: id});
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(`Product with id ${id} deleted`); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, getIdProducts };
