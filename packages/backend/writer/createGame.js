import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();
const uuid = require("uuid/v4");

export default async event => {
  const { name } = JSON.parse(event.body);

  if (!name) {
    console.info({ event });
    throw Error("name not found");
  }
  const id = uuid();
  const params = {
    TableName: "games",
    Item: {
      id,
      gameOwner: name,
      players: [name],
      open: true,
    },
  };

  try {
    await client.put(params).promise();
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify({ id }),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
