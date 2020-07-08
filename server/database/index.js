require("dotenv").config();
//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost:27017/simple-mern-passport' 

  mongoose.connect(
    process.env.MONGO_URI || "mongodb://Duser3:Bonus1@ds243607.mlab.com:43607/heroku_dp5m3j70", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }
  );

module.exports = mongoose.connection