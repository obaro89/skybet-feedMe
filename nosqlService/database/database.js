const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://mongo:27017/fixtures`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

module.exports = connectToDatabase;
