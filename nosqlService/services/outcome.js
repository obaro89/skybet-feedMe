const OutcomeModel = require("../models/outcome");
const MarketModel = require("../models/market");

class Outcome {
  constructor(outcomeData) {
    this.outcomeData = outcomeData;
  }

  async create() {
    const { outcomeId, marketId, name, price, displayed, suspended } =
      this.outcomeData;
    try {
      const outcome = new OutcomeModel({
        marketId,
        outcomeId,
        name,
        price,
        displayed,
        suspended,
      });

      const newOutcome = await outcome.save();

      const market = await MarketModel.findOneAndUpdate(
        { marketId },
        { $addToSet: { outcomes: newOutcome._id } }
      );

      return newOutcome;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update() {
    const { outcomeId, name, price, displayed, suspended } = this.outcomeData;

    try {
      const outcome = await OutcomeModel.findOneAndUpdate(
        { outcomeId },
        { name, price, displayed, suspended },
        {
          new: true,
          upsert: true,
        }
      );

      return outcome;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Outcome;
