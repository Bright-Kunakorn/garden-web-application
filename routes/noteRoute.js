const express = require("express");
const router = express.Router();
let Note  = require("../models/noteModel")

router.route("./contact").post((req,res) => {
    const mail = req.body.mail;
    const subject = req.body.subject;
    const message = req.body.message;
    const newNote = new Note({
        mail,
        subject,
        message
    });
    newNote.save()
    .then(() => res.json('data added'))
    .catch(err => res.status(400).json('Error:' +err));
})

module.exports = router;