import { roleCardDivision } from "./cardDivision";

export default async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(roleCardDivision(4)),
  };
};
