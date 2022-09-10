const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

class App {
  express;
  port;

  constructor(controllers, port) {
    this.express = express();
    this.port = port;
    this.connectToDatabase();
    this.initializeMiddleWare();
    this.inititializeControllers(controllers);
  }

  async connectToDatabase() {
    try {
      await mongoose.connect(`mongodb://mongo:27017/fixtures`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database is connected");
    } catch (error) {
      console.log("Error connecting to database", error);
    }
  }

  initializeMiddleWare() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  inititializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.express.use("/api", controller.router);
    });
  }

  listen() {
    this.express.listen(this.port, () => {
      console.log(`Application is running on port ${this.port}`);
    });
  }
}

module.exports = App;
