const Outcome = require("../services/outcome");

class OutcomeController {
  constructor(data) {
    this.outcome = new Outcome(data);
  }

  async createOutcome() {
    const newOutcome = await this.outcome.create();
    console.log(newOutcome);
  }

  async updateOutcome() {
    const updatedOutcome = await this.outcome.update();
    console.log(updatedOutcome);
  }
}

module.exports = OutcomeController;
