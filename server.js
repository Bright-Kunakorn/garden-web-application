const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require('./models/noteModel')

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://KUN:KUN123@cluster0.rkcqx.mongodb.net/test?retryWrites=true&w=majority")

const note = [{}]

app.use("/",require("./routes/noteRoute"));
app.post('/contact', async (req, res) => {
    const payload = req.body
    const note = new Note(payload)
    await note.save()
    res.status(201).end()
  })
app.listen(3001,function(){
    console.log("server is running")
})