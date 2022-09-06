const EventModel = require("../models/event");

class Event {
  constructor(eventData) {
    this.eventData = eventData;
  }

  async create() {
    const {
      eventId,
      category,
      subCategory,
      name,
      startTime,
      displayed,
      suspended,
    } = this.eventData;
    try {
      const event = new EventModel({
        eventId,
        category,
        subCategory,
        name,
        startTime,
        displayed,
        suspended,
      });

      const newEvent = await event.save();

      return newEvent;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update() {
    const {
      eventId,
      category,
      subCategory,
      name,
      startTime,
      displayed,
      suspended,
    } = this.eventData;

    try {
      const updatedEvent = await EventModel.findOneAndUpdate(
        { eventId },
        {
          category,
          subCategory,
          name,
          startTime,
          displayed,
          suspended,
          eventId,
        },
        {
          new: true,
          upsert: true,
        }
      );

      return updatedEvent;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Event;
