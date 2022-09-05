const net = require("net");
const {
  transformData,
  transformToJson,
  formatPacket,
} = require("./utils/utils.js");

const client = new net.Socket();

client.connect(8282, "provider", function () {
  console.log("Connected to SkyBet Provider!");
});

client.on("data", function (data) {
  console.log(data.toString());

  const formatedPackets = formatPacket(data);
  formatedPackets.forEach((formatedPacket) =>
    console.log(transformToJson(transformData(formatedPacket)))
  );
});

client.on("close", function () {
  console.log("Connection closed");
});
