const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/product");

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function(res, file, callback) {
    callback(null, new Date().getTime() + "-" + file.originalname);
  }
});

const fileFilter = function(req, file, callback) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", async function(req, res, next) {
  try {
    const query = await Product.find().exec();
    res.json({
      status: 200,
      messager: "Get product success",
      data: query
    });
  } catch (error) {
    res.json({
      status: 500,
      messager: "Get product retrieved error",
      error: error
    });
  }
});

router.post("/create", upload.single("image"), async function(req, res, next) {
  try {
    const newProduct = new Product({
      ...req.body
    });
    if (req.file) {
      // newProduct.image = `http://localhost:3001/${req.file.path}`;
      newProduct.image = req.file.path;
    }
    await newProduct.save(function(err, result) {
      if (err) {
        res.json({
          status: 500,
          messager: err
        });
      } else {
        res.json({
          status: 200,
          messager: "Create product successfully"
        });
      }
    });
  } catch (error) {
    res.json({
      status: 500,
      messager: "Create product error",
      error: error
    });
  }
});

router.put("/update/:id", upload.single("image"), async function(
  req,
  res,
  next
) {
  try {
    await Product.update(
      { _id: req.params.id },
      req.file ? { ...req.body, image: req.file.path } : { ...req.body },
      function(err, result) {
        if (err) {
          res.json({
            status: 500,
            messager: "Can not find id"
          });
        } else {
          res.json({
            status: 200,
            messager: "Update product successfully"
          });
        }
      }
    );
  } catch (error) {
    res.json({
      status: 500,
      messager: "Update product error"
    });
  }
});

router.delete("/destroy/:id", async function(req, res, next) {
  try {
    await Product.findOneAndRemove({ _id: req.params.id }, function(
      err,
      result
    ) {
      if (err) {
        res.json({
          status: 500,
          messager: "Can not find id"
        });
      } else {
        res.json({
          status: 200,
          messager: "Delete successfully"
        });
      }
    });
  } catch (error) {
    res.json({
      status: 500,
      messager: error
    });
  }
});

module.exports = router;
