const mongoose = require("mongoose");

const OutcomeSchema = new mongoose.Schema({
  marketId: {
    type: String,
  },
  outcomeId: {
    type: String,
  },

  name: {
    type: String,
  },
  price: {
    type: String,
  },

  displayed: {
    type: Boolean,
  },
  suspended: {
    type: Boolean,
  },
});

module.exports = mongoose.model("outcome", OutcomeSchema);
