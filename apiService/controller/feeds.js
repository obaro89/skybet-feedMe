const express = require("express");
const Event = require("../models/event");
const Market = require("../models/market");
const Outcome = require("../models/outcome");

class FeedsController {
  path = "/events";
  router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/all`, this.getAllEvents);
    this.router.get(`${this.path}/:category`, this.getEventsByCategory);
  }

  async getAllEvents(_, res) {
    try {
      const events = await Event.find({});
      res.json({
        events: events,
      });
    } catch (error) {
      res.status(400).json({
        message: "An error has occurred" + error,
      });
    }
  }

  async getEventsByCategory(req, res) {
    try {
      const category = req.params.category;

      const events = await Event.find({ category }).populate({
        path: "markets",
        populate: { path: "outcomes" },
      });

      res.json({ events });
    } catch (error) {
      res.status(400).json({
        message: "An error has occurred" + error,
      });
    }
  }
}

module.exports = FeedsController;
