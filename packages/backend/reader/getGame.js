const AWS = require("aws-sdk");
const client = new AWS.DynamoDB.DocumentClient();

export default async event => {
  const params = {
    TableName: "games",
    Key: {
      id: event.pathParameters.id,
    },
  };
  const result = await client.get(params).promise();

  if (result.Item) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } else {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 400,
      body: JSON.stringify({ message: `couldn't find your the game with ${event.pathParameters.id}` }),
    };
  }
};
