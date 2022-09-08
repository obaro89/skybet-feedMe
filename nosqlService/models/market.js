const mongoose = require("mongoose");

const MarketSchema = new mongoose.Schema({
  eventId: {
    type: String,
  },
  marketId: {
    type: String,
  },
  name: {
    type: String,
  },
  outcomes: [{ type: mongoose.Schema.Types.ObjectId, ref: "outcome" }],
  displayed: {
    type: Boolean,
  },
  suspended: {
    type: Boolean,
  },
});

module.exports = mongoose.model("market", MarketSchema);
