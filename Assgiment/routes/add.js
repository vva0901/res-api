const express = require("express");
const router = express.Router();
const multer = require("multer");
const request = require("request");

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

router.get("/", function(req, res) {
  res.render("add");
});

router.post("/", upload.single("image"), function(req, res, next) {
  const data = req.body;
  if (req.file) {
    data.image = req.file.path;
  }
  request(
    {
      url: "http://localhost:3001/store/create",
      method: "POST",
      json: data
    },
    (err, respone, body) => {
      if (body) {
        // res.render("index");
        res.redirect("http://localhost:3000");
        // console.log(res);
      }
    }
  );

  console.log(data);
});

module.exports = router;
