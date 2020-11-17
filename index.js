const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(cors())
app.use(express())

app.get('/', (req, res) => {
    res.send(" I am ok")
})


const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://powergym:asif1234@cluster0.gbfwa.mongodb.net/power?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true  });
client.connect((err) => {
  const collection = client.db("power").collection("paydata");
  const paydata2 = client.db("power").collection("paydata2");
  
   app.get("/ourClasses", (req, res) => {
     collection.find({}).toArray((err, document) => {
       res.send(document);
     });
   });

   app.post('/adddata', (req, res) => {
  const order = req.body;
     serviceCollection.insertOne(order)
      .then(result => {
        res.send(result.insertedCount > 0);
      })
  })
 
});


app.listen(5000)
