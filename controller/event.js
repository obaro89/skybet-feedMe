const Event = require("../services/event");

class EventController {
  constructor(data) {
    this.event = new Event(data);
  }

  async createEvent() {
    const newEvent = await this.event.create();
    console.log(newEvent);
  }

  async updateEvent() {
    const updatedEvent = await this.event.update();
    console.log(updatedEvent);
  }
}

module.exports = EventController;
