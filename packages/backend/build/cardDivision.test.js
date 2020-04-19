"use strict";

var _cardDivision = require("./cardDivision.js");

describe("role card divison", function () {
  it("should  return roles for 4 players", function () {
    expect((0, _cardDivision.roleCardDivision)(4)).toEqual([{
      id: 1,
      type: "Role",
      name: "Shogun"
    }, {
      id: 2,
      type: "Role",
      name: "Samourai"
    }, {
      id: 4,
      type: "Role",
      name: "Ninja"
    }, {
      id: 5,
      type: "Role",
      name: "Ninja"
    }]);
  });
  it("should  return roles for 5 players", function () {
    expect((0, _cardDivision.roleCardDivision)(5)).toEqual([{
      id: 1,
      type: "Role",
      name: "Shogun"
    }, {
      id: 2,
      type: "Role",
      name: "Samourai"
    }, {
      id: 4,
      type: "Role",
      name: "Ninja"
    }, {
      id: 5,
      type: "Role",
      name: "Ninja"
    }, {
      id: 7,
      type: "Role",
      name: "Ronin"
    }]);
  });
  it("should  return roles for 6 players", function () {
    expect((0, _cardDivision.roleCardDivision)(6)).toEqual([{
      id: 1,
      type: "Role",
      name: "Shogun"
    }, {
      id: 2,
      type: "Role",
      name: "Samourai"
    }, {
      id: 4,
      type: "Role",
      name: "Ninja"
    }, {
      id: 5,
      type: "Role",
      name: "Ninja"
    }, {
      id: 6,
      type: "Role",
      name: "Ninja"
    }, {
      id: 7,
      type: "Role",
      name: "Ronin"
    }]);
  });
  it("should  return roles for 7 players", function () {
    expect((0, _cardDivision.roleCardDivision)(7)).toEqual([{
      id: 1,
      type: "Role",
      name: "Shogun"
    }, {
      id: 2,
      type: "Role",
      name: "Samourai"
    }, {
      id: 3,
      type: "Role",
      name: "Samourai"
    }, {
      id: 4,
      type: "Role",
      name: "Ninja"
    }, {
      id: 5,
      type: "Role",
      name: "Ninja"
    }, {
      id: 6,
      type: "Role",
      name: "Ninja"
    }, {
      id: 7,
      type: "Role",
      name: "Ronin"
    }]);
  });
});