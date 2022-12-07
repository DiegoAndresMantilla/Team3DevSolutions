const Invoice = require("../model/Invoice");

const createInvoice = (req, res) => {
  let invoice = new Invoice({
    id_invoice: req.body.id_invoice,
    id_user: req.body.id_user,
    date: req.body.date,
  });

  invoice.save((err, invoic) => {
    err && res.status(500).json(err.message);
    res.status(200).json(invoic);
  });
};

const getInvoices = (req, res) => {
  Invoice.find((err, invoic) => {
    err && res.status(500).send(err.message);
    res.status(200).json(invoic);
  });
};
const updateInvoice = (req, res) => {
  Invoice.findOneAndUpdate(
    { id_invoice: req.body.id_invoice },
    {
      id_user: req.body.id_user,
      date: req.body.date,
    },
    (err, invoic) => {
      err && res.status(500).send(err.message);
      res.status(200).send(invoic);
    }
  );
};

const deleteInvoice = (req, res) => {
  Invoice.findOneAndDelete(
    { id_invoice: req.body.id_invoice },
    (err, invoic) => {
      err && res.status(501).send(err.message);
      res.status(200).send(invoic);
    }
  );
};

module.exports = { createInvoice, getInvoices, updateInvoice, deleteInvoice };
