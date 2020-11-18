import mongoose = require("mongoose");

class ConnectionMongoose {
  static connectToTheDatabase() {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_CLUSTER,
      MONGO_DB
    } = process.env;
    var options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    mongoose
      .connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`,
        options
      )
      .then(function (data) {
        console.log("Connect to MongoDB cluster");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export default ConnectionMongoose;
