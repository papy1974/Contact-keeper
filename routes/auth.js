const express = require("express");
const router = express.Router();

//@routes GET api/auth
// desc  Get logged in user
//@access private

router.get("/", (req, res) => {
  res.send("desc  Get logged in user");
});

//@routes Post api/auth
// desc  Auth user & get token
//@access public

router.post("/", (req, res) => {
  res.send("login user");
});

module.exports = router;
