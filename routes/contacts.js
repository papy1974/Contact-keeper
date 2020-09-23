const express = require("express");
const router = express.Router();

//@routes GET api/contacts
// desc Get all users contacts
//@access private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@routes POST api/contacts
// desc Add new contact
//@access private

router.post("/", (req, res) => {
  res.send("Add new contacts");
});

//@routes put api/contacts/:id
// desc  update contacts
//@access private

router.put("/:id", (req, res) => {
  res.send("update contacts");
});

//routes delete api/contacts/:id
// desc delete contact
//@access private

router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
