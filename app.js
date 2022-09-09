const net = require("net");
const { Kafka } = require("kafkajs");
const {
  transformData,
  transformToJson,
  formatPacket,
} = require("./utils/utils.js");

const client = new net.Socket();

client.connect(8282, "provider", function () {
  console.log("Connected to SkyBet Provider!");
});

const kafka = new Kafka({
  clientId: "skybet-provider",
  brokers: ["kafka:9092"],
  enforceRequestTimeout: false,
});

const producer = kafka.producer();

const produce = async (data) => {
  try {
    await producer.connect();
    await producer.send({
      topic: "skybet-feeds",
      messages: [{ value: data }],
    });
    console.log(data + "Feed has been sent to kafka stream!");
  } catch (error) {
    console.log(error);
  }
};

client.on("data", function (data) {
  console.log(data.toString());
  //
  try {
    const formatedPackets = formatPacket(data);
    formatedPackets.forEach((formatedPacket) => {
      const packetJSON = transformToJson(transformData(formatedPacket));
      produce(packetJSON).catch(console.error);
    });
  } catch (error) {
    console.log(error);
  }
});

client.on("close", function () {
  console.log("Connection closed");
});
