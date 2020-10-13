const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const contact = require("../models/Contact");
const Contact = require("../models/Contact");

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

router.post(
  "/",
   [
    auth,[ check ('name', 'Name is required').not().isEmpty()

]], 

async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const {name,email, phone, type} = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user:req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);

  }catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }

}
    
);


//@routes put api/contacts/:id
// desc  update contacts
//@access private

router.put("/:id", auth, async (req, res) => {
  const {name,email, phone, type} = req.body;

  // build contact object

  const contactField = {};
  if(name) contactField.name = name;
  if(email) contactField.email = email;
  if(name) contactField.phone = phone;
  if(name) contactField.type = type;

  try{

    let contact = await Contact.findById(req.params.id);
    if(!contact) return res.status(404).json({ msg:'contact not found'})

    // make sure user owns contact
    if(contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized'});
    }

    contact = await Contact.findByIdAndUpdate(req.params.id,
      { $set: contactFields },
      {new:true});

      res.json(contact)

  }catch(err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
  
  
});

//routes delete api/contacts/:id
// desc delete contact
//@access private

router.delete("/:id", auth, async (req, res) => {
  try{

    let contact = await Contact.findById(req.params.id);
    if(!contact) return res.status(404).json({ msg:'contact not found'})

    // make sure user owns contact
    if(contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized'});
    }

    await Contact.findByIdAndRemove(req.params.id)

      res.json({ msg: 'Contact removed'});

  }catch(err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
  
});

module.exports = router;
