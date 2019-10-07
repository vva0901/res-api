const express = require("express");
const router = express.Router();
const request = require("request");
const formart = require("../utils/currency");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const data = await request(
    {
      url: "http://localhost:3001/store",
      method: "GET"
    },
    (err, respone, body) => {
      const list = JSON.parse(body);
      const all = list.data.map(value => {
        return {
          _id: value._id,
          name: value.name,
          color: value.color,
          size: value.size,
          gender: value.gender,
          material: value.material,
          pirce: formart(value.pirce),
          image: value.image
        };
      });
      res.render("index", { listProduct: all });
    }
  );
});

module.exports = router;
