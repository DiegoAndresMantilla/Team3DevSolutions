const ProductController = require("../controller/Products");
const UserController = require("../controller/Users");
const InvoiceController = require("../controller/Invoices");
const OrderController = require("../controller/Orders");
const express = require("express");
const router = express.Router();

router.post("/addProduct", ProductController.createProduct);
router.get("/listProducts", ProductController.getProducts);
router.put("/updateProduct", ProductController.updateProduct);
router.delete("/deleteProduct", ProductController.deleteProduct);

router.post("/addUser", UserController.createUser);
router.get("/listUsers", UserController.getUsers);
router.put("/updateUser", UserController.updateUser);
router.delete("/deleteUser", UserController.deleteUser);

router.post("/addInvoice", InvoiceController.createInvoice);
router.get("/listInvoices", InvoiceController.getInvoices);
router.put("/updateInvoice", InvoiceController.updateInvoice);
router.delete("/deleteInvoice", InvoiceController.deleteInvoice);

router.post("/addOrder", OrderController.createOrder);
router.get("/listOrders", OrderController.getOrders);
router.put("/updateOrder", OrderController.updateOrder);
router.delete("/deleteOrder", OrderController.deleteOrder);

module.exports = router;
