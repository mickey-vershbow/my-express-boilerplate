// Load up dotenv:
require("dotenv").config();

const mongoose = require("mongoose");

// 🚨 Don't forget to add your username and password to your connection URI

const connectionURI = process.env.MONGODB_URI;

// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
