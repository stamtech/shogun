import { Cards as cards } from "./cards.json";

export const roleCardDivision = numberOfPlayers => {
  switch (numberOfPlayers) {
    case 4:
      return [...getCards(cards, "Shogun", 1), ...getCards(cards, "Samourai", 1), ...getCards(cards, "Ninja", 2)];
    case 5:
      return [
        ...getCards(cards, "Shogun", 1),
        ...getCards(cards, "Samourai", 1),
        ...getCards(cards, "Ninja", 2),
        ...getCards(cards, "Ronin", 1),
      ];
    case 6:
      return [
        ...getCards(cards, "Shogun", 1),
        ...getCards(cards, "Samourai", 1),
        ...getCards(cards, "Ninja", 3),
        ...getCards(cards, "Ronin", 1),
      ];
    case 7:
      return [
        ...getCards(cards, "Shogun", 1),
        ...getCards(cards, "Samourai", 2),
        ...getCards(cards, "Ninja", 3),
        ...getCards(cards, "Ronin", 1),
      ];

    default:
      throw Error("get some friends ! you have to be at least 4 to play this game !");
  }
};

const getCards = (cards, name, number) => {
  const result = cards.filter(card => card.name === name);
  return result.slice(0, number);
};
