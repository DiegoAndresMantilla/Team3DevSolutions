const Invoice = require("../model/Invoice");

const createInvoice = (req, res) => {
  let invoice = new Invoice({
    id_invoice: req.body.id_invoice,
    id_user: req.body.id_user,
    date: req.body.date,
    subtotal: req.body.subtotal,
    iva_twelve: req.body.subtotal * 1.12,
    iva_ten: req.body.subtotal*1.10,
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

const getIdInvoices = async (req, res) => {
  try {
    const invObj = await Invoice.findOne({
      id_invoice: req.query.id_invoice,
    });
    if (invObj == null) {
      res.status(400).json("Invoice not found");
    } else {
      res.json({
      id_user: invObj.id_user,
      date: invObj.date,
      subtotal: invObj.subtotal,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInvoice = async (req, res) => {
  try {
    const id_invoice = req.query.id_invoice;
    const updateInvoice = await Invoice.findOneAndUpdate(
      { id_invoice: id_invoice },
      {
        id_user: req.body.id_user,
        date: req.body.date,
        subtotal: req.body.subtotal,
        iva_twelve: req.body.subtotal * 1.12,
        iva_ten: req.body.subtotal / 1.10,
      },
      { new: true }
    );
    if (!updateInvoice) {
      return res.status(404).send("Invoice not found");
    }
    res.send(updateInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const id=req.query.id_invoice;
    const invoice = await Invoice.findOneAndDelete({
      id_invoice: id});
    if (!invoice) {
      return res.status(404).send("Invoice not found");
    }
    res.send(`Invoice with id ${id} deleted`); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createInvoice, getInvoices, updateInvoice, deleteInvoice,getIdInvoices };
