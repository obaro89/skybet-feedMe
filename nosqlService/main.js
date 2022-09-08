const { Kafka } = require("kafkajs");
const main = require("./controller/main");
const connectToDatabase = require("./database/database");

connectToDatabase();

const kafka = new Kafka({
  clientId: "nosqlservice",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "skybet" });

const consume = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({
      topic: "skybet-feeds",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log("mongo service has received topic" + message.value);
        main(message.value);
      },
    });
  } catch (error) {
    console.log(error);
  }
};
//
consume().catch(console.error);
