const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const contact = require("../models/Contact");

//@routes GET api/contacts
// desc Get all users contacts
//@access private

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
