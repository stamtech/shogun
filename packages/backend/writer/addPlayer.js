import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();

export default async event => {
  const { id, player } = JSON.parse(event.body);

  if (!id || !player.id || !player.name) {
    console.info({ event });
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 404,
      body: JSON.stringify({ message: "Player not found", event }),
    };
  }

  const players = await getPlayers();
  const updateParams = {
    TableName: "games",
    Key: {
      id,
    },
    UpdateExpression: "set players = :r",
    ExpressionAttributeValues: {
      ":r": [...players, player],
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const updateResponse = await client.update(updateParams).promise();
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify({ players: updateResponse }),
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

const getPlayers = async id => {
  const params = {
    TableName: "games",
    Key: {
      id,
    },
  };
  const game = await client.get(params).promise();
  console.info({ game });
  if (!game)
    throw {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 400,
      body: `Cannot find the game ${id}`,
    };
  return { players: game.Item.players };
};
