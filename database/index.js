require("dotenv").config();
//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost:27017/simple-mern-passport' 

// const uri = process.env.MONGODB_URI_API

// const uri = "mongodb://Duser3:Bonus1@ds133136.mlab.com:33136/heroku_w6kv6k9d"

// mongoose.connect(uri).then(
//     () => { 
//         /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
//         console.log('Connected to Mongo');
        
//     },
//     err => {
//          /** handle initial connection error */ 
//          console.log('error connecting to Mongo: ')
//          console.log(err);
         
//         }
//   );
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://DBuser5:Bonus1@ds243717.mlab.com:43717/heroku_j7j6tlfq", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }
  );

module.exports = mongoose.connection