const MarketModel = require("../models/market");
const EventModel = require("../models/event");

class Market {
  constructor(marketData) {
    this.marketData = marketData;
  }

  async create() {
    const { eventId, marketId, name, displayed, suspended } = this.marketData;
    try {
      const market = new MarketModel({
        eventId,
        marketId,
        name,
        displayed,
        suspended,
      });

      const newMarket = await market.save();

      await EventModel.findOneAndUpdate(
        { eventId },
        {
          $addToSet: {
            markets: newMarket._id,
          },
        }
      );

      return newMarket;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update() {
    const { marketId, name, displayed, suspended } = this.marketData;

    try {
      const market = await MarketModel.findOneAndUpdate(
        { marketId },
        { name, displayed, suspended },
        {
          new: true,
          upsert: true,
        }
      );

      return market;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Market;
