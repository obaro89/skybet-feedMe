const EventController = require("./event");
const MarketController = require("./market");
const OutcomeController = require("./outcome");

const main = async (eventJSON) => {
  const data = JSON.parse(eventJSON);
  const event = new EventController(data);
  const market = new MarketController(data);
  const outcome = new OutcomeController(data);

  if (data.operation === "create") {
    switch (data.type) {
      case "event":
        await event.createEvent();
        break;

      case "market":
        await market.createMarket();
        break;

      case "outcome":
        await outcome.createOutcome();
        break;
      default:
        break;
    }
  }

  if (data.operation === "update") {
    switch (data.type) {
      case "event":
        await event.updateEvent();
        break;

      case "market":
        await market.updateMarket();
        break;

      case "outcome":
        await outcome.updateOutcome();
        break;
      default:
        break;
    }
  }
};

module.exports = main;
