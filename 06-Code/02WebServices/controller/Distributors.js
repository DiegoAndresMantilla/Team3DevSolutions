const Distributor = require("../model/Distributor");

const createDistributor = (req, res) => {
  let distributor = new Distributor({
    id_distributor: req.body.id_distributor,
    ruc_distributor: req.body.ruc_distributor,
    name_distributor: req.body.name_distributor,
    id_product: req.body.id_product,
    dealerPrice: req.body.dealerPrice,
    subtotal: req.body.subtotal,
    unit_profit: req.body.subtotal - req.body.dealerPrice,
  });
  distributor.save((err, use) => {
    err && res.status(500).json(err.message);
    res.status(200).json(use);
  });
};

const getDistributors = (req, res) => {
  Distributor.find((err, use) => {
    err && res.status(500).send(err.message);
    res.status(200).json(use);
  });
};

const getIdDistributors = async (req, res) => {
  try {
    const distObj = await Distributor.findOne({
      id_distributor: req.query.id_distributor,
    });
    if (distObj == null) {
      res.status(400).json("Distributor not found");
    } else {
      res.json({
        ruc_distributor: distObj.ruc_distributor,
        name_distributor: distObj.name_distributor,
        id_product: distObj.id_product,
        dealerPrice: distObj.dealerPrice,
        subtotal: distObj.subtotal,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateDistributor = async (req, res) => {
  try {
    const distributor = await Distributor.findOneAndUpdate(
      { id_distributor: req.query.id_distributor },
      {
        ruc_distributor: req.body.ruc_distributor,
        name_distributor: req.body.name_distributor,
        id_product: req.body.id_product,
        dealerPrice: req.body.dealerPrice,
        subtotal: req.body.subtotal,
        unit_profit: req.body.subtotal - req.body.dealerPrice,
      },
      { new: true }
    );
    if (!distributor) {
      return res.status(404).send("Distributor not found");
    }
    res.status(200).send(distributor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDistributor = async (req, res) => {
  try {
    const id = req.query.id_distributor;
    const distributor = await Distributor.findOneAndDelete({
      id_distributor: id,
    });
    if (!distributor) {
      return res.status(404).send("Distributor not found");
    }
    res.send(`Distributor with id ${id} deleted`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDistributor,
  getDistributors,
  updateDistributor,
  deleteDistributor,
  getIdDistributors,
};
