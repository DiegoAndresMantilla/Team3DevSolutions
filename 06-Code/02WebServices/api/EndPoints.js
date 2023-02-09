const ProductController = require("../controller/Products");
const UserController = require("../controller/Users");
const InvoiceController = require("../controller/Invoices");
const OrderController = require("../controller/Orders");
const DistributorController = require("../controller/Distributors");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

router.post("/addProduct", ProductController.createProduct);
router.get("/listProducts", ProductController.getProducts);
router.put("/updateProduct", ProductController.updateProduct);
router.delete("/deleteProduct", ProductController.deleteProduct);
router.get("/searchProducts", ProductController.getIdProducts);

router.post("/addUser", UserController.createUser);
router.get("/listUsers", UserController.getUsers);
router.put("/updateUser", UserController.updateUser);
router.delete("/deleteUser", UserController.deleteUser);
router.get("/searchUsers", UserController.getIdUsers);
router.get("/searchUser", UserController.getIdUser);

router.post("/addInvoice", InvoiceController.createInvoice);
router.get("/listInvoices", InvoiceController.getInvoices);
router.put("/updateInvoice", InvoiceController.updateInvoice);
router.delete("/deleteInvoice", InvoiceController.deleteInvoice);
router.get("/searchInvoices", InvoiceController.getIdInvoices);

router.post("/addOrder", OrderController.createOrder);
router.get("/listOrders", OrderController.getOrders);
router.put("/updateOrder", OrderController.updateOrder);
router.delete("/deleteOrder", OrderController.deleteOrder);
router.get("/searchOrders", OrderController.getIdOrders);

router.post("/addDistributor", DistributorController.createDistributor);
router.get("/listDistributors", DistributorController.getDistributors);
router.put("/updateDistributor", DistributorController.updateDistributor);
router.delete("/deleteDistributor", DistributorController.deleteDistributor);
router.get("/searchDistributors", DistributorController.getIdDistributors);

module.exports = router;
