const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  markets: [{ type: mongoose.Schema.Types.ObjectId, ref: "market" }],
  displayed: {
    type: Boolean,
    required: true,
  },
  suspended: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("event", EventSchema);
