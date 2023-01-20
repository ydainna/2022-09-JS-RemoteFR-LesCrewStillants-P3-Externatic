const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const companyControllers = require("./controllers/companyControllers");
const infoControllers = require("./controllers/infoControllers");

// const decodeToken = require("./services/jwt");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// routes User
router.post("/register", userControllers.add);
router.post("/login", userControllers.log);

// routes offers
router.get("/offers", offerControllers.browse);

// routes company
router.get("/company", companyControllers.browse);

// routes information
router.get("/information", infoControllers.browse);

// router.use(decodeToken);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);

module.exports = router;
