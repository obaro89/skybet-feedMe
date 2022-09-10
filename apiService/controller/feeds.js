const express = require("express");
const Event = require("../models/event");
const Market = require("../models/market");
const Outcome = require("../models/outcome");

class FeedsController {
  router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`/event/:eventId`, this.getEventById);
    this.router.get(`/category/:category`, this.getEventsByCategory);
    this.router.get(`/events`, this.getAllEvents);
    // this.router.get(
    //   `event/:eventId/market/:marketId`,
    //   this.getMarketsByEventId
    // );
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

      const events = await Event.find({
        category,
      });

      res.json({ events });
    } catch (error) {
      res.status(400).json({
        message: "An error has occurred" + error,
      });
    }
  }

  async getEventById(req, res) {
    try {
      const eventId = req.params.eventId;
      const event = await Event.find({ eventId }).populate({
        path: "markets",
        populate: { path: "outcomes" },
      });

      res.json({ event });
    } catch (error) {
      res.status(400).json({
        message: "An error has occurred" + error,
      });
    }
  }

  //   async getMarketsByEventId(req, res) {
  //     try {
  //       const { eventId, marketId } = req.params;
  //       const markets = await Market.find({ eventId, marketId }).populate(
  //         "outcomes"
  //       );
  //       res.json({ markets });
  //     } catch (error) {
  //       res.status(400).json({
  //         message: "An error has occurred" + error,
  //       });
  //     }
  //   }
}

module.exports = FeedsController;
