const express = require('express')
const dotenv = require('dotenv')
const {MongoClient} = require('mongodb');
const bodyparser = require('body-parser')

dotenv.config()
//connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//database name
const dbName = 'passwordm';
const app = express()
const port = 3000
app.use(bodyparser.json())

client.connect();

//get data 
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();

  res.json(findResult)
})
//save pwd
app.get('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.insertOne(password);
  res.send({success: true, result: findResult})
})
//delete pwd
app.get('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password);
  res.send({success: true, result: findResult})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})