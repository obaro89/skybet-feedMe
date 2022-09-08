const Market = require("../services/market");

class MarketController {
  constructor(data) {
    this.market = new Market(data);
  }

  async createMarket() {
    const newMarket = await this.market.create();
    console.log(newMarket);
  }

  async updateMarket() {
    const updatedMarket = await this.market.update();
    console.log(updatedMarket);
  }
}

module.exports = MarketController;
