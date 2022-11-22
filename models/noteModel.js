const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = {
    mail : String,
    subject : String,
    message : String
}
const Note = mongoose.model("Note",noteSchema);
module.exports = Note;