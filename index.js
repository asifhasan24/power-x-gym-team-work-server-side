const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors())
app.use(express())

app.get('/', (req, res) => {
    res.send(" I am on... ")
})


const MongoClient = require("mongodb").MongoClient;
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b31bz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true  });
client.connect((err) => {
  const collection =  client .db(`${process.env.DB_NAME}`) .collection(`${process.env.DB_COLL}`);
  
   app.get("/ourClasses", (req, res) => {
     collection.find({}).toArray((err, document) => {
       res.send(document);
     });
   });
 
});


app.listen(5000)
// app.listen(process.env.PORT || 8000)