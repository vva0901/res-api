const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/:id", function(req, res) {
  //   console.log(request.);
  request(
    {
      url: `http://localhost:3001/store/destroy/${req.params.id}`,
      method: "DELETE"
    },
    (err, respone, body) => {
      if (body) {
        res.redirect("http://localhost:3000");
      }
    }
  );
});

module.exports = router;
