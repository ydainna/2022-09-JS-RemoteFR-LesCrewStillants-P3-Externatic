const express = require("express");
const fs = require("fs");
const multer = require("multer");

// Destination de stockage des fichiers
const upload = multer({ dest: "uploads/avatar/" });
const { v4: uuidv4 } = require("uuid");

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
router.get("/offers/:id", offerControllers.read);
router.post("/offers", offerControllers.add);
router.put("/offers/:id", offerControllers.edit);
router.delete("/offers/:id", offerControllers.destroy);

// routes company
router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.post("/company", companyControllers.add);
router.put("/company/:id", companyControllers.edit);
router.delete("/company/:id", companyControllers.destroy);

// routes information
router.get("/information", infoControllers.browse);

// router.use(decodeToken);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

// route POST pour recevoir un fichier
router.post("/uploads/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  fs.rename(
    `uploads/avatar/${filename}`,
    `uploads/avatar/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

module.exports = router;
