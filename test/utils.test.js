const {
  formatPacket,
  transformData,
  transformToJson,
  isValidJson,
  isValidJsonObject,
} = require("../utils/utils");

const data = {
  msgId: 43,
  operation: "create",
  type: "outcome",
  marketId: "f01d4d130-9e9a-4fd9-93b5-9775af9449eb",
  outcomeId: "84b0e31f-c9b7-4d2c-a521-ed3efe9c4511",
  name: "Mansfield",
  price: "12/1",
  timestamp: 1662395181892,
  displayed: false,
  suspended: true,
};

describe("Testing the formatPacket utility function", () => {
  it("should format the packets correctly", () => {
    expect(
      formatPacket(
        "|586|update|outcome|1662390067975|3e686d39-5a7a-4d00-b1ba-e7c01daf4ce4|8c241492-08f1-47ec-a02c-e32dac9e1914||Notts County||4/9|1|0|"
      )
    ).toEqual([
      [
        "586",
        "update",
        "outcome",
        "1662390067975",
        "3e686d39-5a7a-4d00-b1ba-e7c01daf4ce4",
        "8c241492-08f1-47ec-a02c-e32dac9e1914",
        "Notts County",
        "4/9",
        "1",
        "0",
      ],
    ]);
    expect(
      formatPacket(
        "|47|create|market|1662395181892|ffa49e87-0496-419c-a488-5e88d699780a|86cab95a-995d-41b5-bb23-7601b3e07dd9|Half Time Result|0|1|"
      )
    ).toEqual([
      [
        "47",
        "create",
        "market",
        "1662395181892",
        "ffa49e87-0496-419c-a488-5e88d699780a",
        "86cab95a-995d-41b5-bb23-7601b3e07dd9",
        "Half Time Result",
        "0",
        "1",
      ],
    ]);
  });
});

describe("Testing the transformData util function", () => {
  test("should return the formated packet object containing required packet header and body", () => {
    expect(
      transformData([
        "556",
        "update",
        "outcome",
        "1662390066153",
        "ff01b0ac-718b-4884-86aa-45a10453c49d",
        " -2",
        "11/2",
        "1",
        "0",
      ])
    ).toMatchObject({
      msgId: 556,
      operation: "update",
      type: "outcome",
      marketId: "ff01b0ac-718b-4884-86aa-45a10453c49d",
      price: "11/2",
      timestamp: 1662390066153,
      displayed: true,
      suspended: false,
    });

    expect(
      transformData([
        "43",
        "create",
        "outcome",
        "1662395181892",
        "f01d4d130-9e9a-4fd9-93b5-9775af9449eb",
        "84b0e31f-c9b7-4d2c-a521-ed3efe9c4511",
        "Mansfield",
        "12/1",
        "0",
        "1",
      ])
    ).toMatchObject({
      msgId: 43,
      operation: "create",
      type: "outcome",
      marketId: "f01d4d130-9e9a-4fd9-93b5-9775af9449eb",
      outcomeId: "84b0e31f-c9b7-4d2c-a521-ed3efe9c4511",
      name: "Mansfield",
      price: "12/1",
      timestamp: 1662395181892,
      displayed: false,
      suspended: true,
    });
  });
});

describe("Testing the transformToJSON util function", () => {
  it("should return true if a JSON object is passed", () => {
    expect(isValidJson(transformToJson(data))).toBe(true);
    expect(isValidJsonObject(transformToJson(data))).toBe(true);
    expect(isValidJsonObject(transformToJson("data"))).toBe(false);
  });
});
