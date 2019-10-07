const express = require("express");
const router = express.Router();
const multer = require("multer");
const request = require("request");

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

router.get("/:id", function(req, res) {
  Product.findById(req.params.id, function(err, item) {
    if (err) {
      console.log(err);
      return;
    }
    res.render("edit", {
      item
    });
  });
});

router.post("/:id", upload.single("image"), function(req, res, next) {
  const data = req.body;
  if (req.file) {
    data.image = req.file.path;
    console.log(req.file.path)
  }

  request(
    {
      url: `http://localhost:3001/store/update/${req.params.id}`,
      method: "PUT",
      json: data
    },
    (err, respone, body) => {
      if (body) {
        res.redirect("http://localhost:3000");
      }
    }
  );
});

module.exports = router;
