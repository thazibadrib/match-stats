const mongoose = require("mongoose");

// function for  establishing connection to database
const connectDB = async () => {

  try {
    await mongoose.connect("mongodb+srv://ihmun:01010101@cluster0.dv4w6.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("Connected to mongo instance");

  } catch (err) {
    console.error("Error connecting to mongo", err.message);
  }
};

module.exports = connectDB;