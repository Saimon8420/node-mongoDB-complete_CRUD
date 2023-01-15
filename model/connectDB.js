require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

// Connection URI
const uri = `mongodb+srv://${user}:${pass}@cluster1.83dshph.mongodb.net/?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client;

