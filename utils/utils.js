const transformData = (packet) => {
  packet = packet
    .toString()
    .replace(/\\/g, "")
    .split("|")
    .filter((element) => element);
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
      return {};
  }

  return {
    ...packerHeader,
    ...packetBody,
  };
};

const transformToJson = (data) => data; //JSON.stringify(data);

module.exports = {
  transformData,
  transformToJson,
};
