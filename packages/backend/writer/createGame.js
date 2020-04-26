import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();
import { v4 as uuid } from "uuid";

export default async event => {
  const { player } = JSON.parse(event.body);

  if (!player) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 404,
      body: JSON.stringify({ message: "Player not found" }),
    };
  }
  const id = uuid();
  const params = {
    TableName: "games",
    Item: {
      id,
      gameOwner: player,
      players: [player],
      status: "created",
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
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
