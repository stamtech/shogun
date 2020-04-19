"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleCardDivision = void 0;

var _cardsJson = require("./cards.json.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var roleCardDivision = function roleCardDivision(numberOfPlayers) {
  switch (numberOfPlayers) {
    case 4:
      return [].concat(_toConsumableArray(getCards(_cardsJson.Cards, "Shogun", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Samourai", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Ninja", 2)));

    case 5:
      return [].concat(_toConsumableArray(getCards(_cardsJson.Cards, "Shogun", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Samourai", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Ninja", 2)), _toConsumableArray(getCards(_cardsJson.Cards, "Ronin", 1)));

    case 6:
      return [].concat(_toConsumableArray(getCards(_cardsJson.Cards, "Shogun", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Samourai", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Ninja", 3)), _toConsumableArray(getCards(_cardsJson.Cards, "Ronin", 1)));

    case 7:
      return [].concat(_toConsumableArray(getCards(_cardsJson.Cards, "Shogun", 1)), _toConsumableArray(getCards(_cardsJson.Cards, "Samourai", 2)), _toConsumableArray(getCards(_cardsJson.Cards, "Ninja", 3)), _toConsumableArray(getCards(_cardsJson.Cards, "Ronin", 1)));

    default:
      throw Error("get some friends ! you have to be at least 4 to play this game !");
  }
};

exports.roleCardDivision = roleCardDivision;

var getCards = function getCards(cards, name, number) {
  var result = cards.filter(function (card) {
    return card.name === name;
  });
  return result.slice(0, number);
};