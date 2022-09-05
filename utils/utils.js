const transformData = (packet) => {
  const [msgId, operation, type, timestamp, ...rest] = packet;

  const packerHeader = {
    msgId: parseInt(msgId),
    operation,
    type,
    timestamp: parseInt(timestamp),
  };
  let packetBody = {};

  switch (type) {
    case "event":
      {
        let name = rest.splice(3, 3).join("");

        const [
          eventId,
          category,
          subCategory,
          startTime,
          displayed,
          suspended,
        ] = rest;

        packetBody = {
          eventId,
          category,
          subCategory,
          name,
          startTime: parseInt(startTime),
          displayed: Boolean(parseInt(displayed)),
          suspended: Boolean(parseInt(suspended)),
        };
      }

      break;

    case "market":
      {
        const [eventId, marketId, name, displayed, suspended] = rest;

        packetBody = {
          eventId,
          marketId,
          name,
          displayed: Boolean(parseInt(displayed)),
          suspended: Boolean(parseInt(suspended)),
        };
      }
      break;

    case "outcome": {
      const [marketId, outcomeId, name] = rest;
      const _name = rest.length > 6 ? rest.splice(2, 2).join("") : name;
      const [suspended, displayed, price] = rest.reverse();

      packetBody = {
        marketId,
        outcomeId,
        name: _name,
        price,
        displayed: Boolean(parseInt(displayed)),
        suspended: Boolean(parseInt(suspended)),
      };
    }
    default:
      break;
  }

  return {
    ...packerHeader,
    ...packetBody,
  };
};

const transformToJson = (data) => JSON.stringify(data);

const formatPacket = (packet) => {
  let stringPacket = packet.toString();
  stringPacket = stringPacket.replace(/\\/g, "");
  let arrayPacket = stringPacket.split("\n");

  arrayPacket = arrayPacket.filter((e) => e);

  const finalPacket = arrayPacket.map((str) => {
    return str.split("|").filter((e) => e);
  });

  return finalPacket;
};

const isValidJson = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
};

const isValidJsonObject = (json) => {
  if (typeof json !== "string") {
    return false;
  }

  const startsWithOpeningCurlyBrace = json.indexOf("{") === 0;
  const endsWithClosingCurlyBrace = json.lastIndexOf("}") === json.length - 1;

  if (startsWithOpeningCurlyBrace && endsWithClosingCurlyBrace) {
    return isValidJson(json);
  }

  return false;
};

module.exports = {
  transformData,
  transformToJson,
  formatPacket,
  isValidJson,
  isValidJsonObject,
};
