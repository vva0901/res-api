const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/MyShoes";

//Create the database connection
mongoose.connect(dbURL, { useNewUrlParser: true });

//If the connection throws an error
mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection open to" + dbURL);
});

//When the connection is disconnected
mongoose.connection.on("error", function() {
  console.log(`Mongoose default connection disconnected ${error}`);
});

//if the node process ends, close the Mongoose connection
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection disconnected throught app termination"
    );
    process.exit(0);
  });
});
