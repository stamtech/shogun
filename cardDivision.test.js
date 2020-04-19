import { roleCardDivision } from "./cardDivision.js";

describe("role card divison", () => {
  it("should  return roles for 4 players", () => {
    expect(roleCardDivision(4)).toEqual([
      { id: 1, type: "Role", name: "Shogun" },
      { id: 2, type: "Role", name: "Samourai" },
      { id: 4, type: "Role", name: "Ninja" },
      { id: 5, type: "Role", name: "Ninja" },
    ]);
  });

  it("should  return roles for 5 players", () => {
    expect(roleCardDivision(5)).toEqual([
      { id: 1, type: "Role", name: "Shogun" },
      { id: 2, type: "Role", name: "Samourai" },
      { id: 4, type: "Role", name: "Ninja" },
      { id: 5, type: "Role", name: "Ninja" },
      { id: 7, type: "Role", name: "Ronin" },
    ]);
  });

  it("should  return roles for 6 players", () => {
    expect(roleCardDivision(6)).toEqual([
      { id: 1, type: "Role", name: "Shogun" },
      { id: 2, type: "Role", name: "Samourai" },
      { id: 4, type: "Role", name: "Ninja" },
      { id: 5, type: "Role", name: "Ninja" },
      { id: 6, type: "Role", name: "Ninja" },
      { id: 7, type: "Role", name: "Ronin" },
    ]);
  });

  it("should  return roles for 7 players", () => {
    expect(roleCardDivision(7)).toEqual([
      { id: 1, type: "Role", name: "Shogun" },
      { id: 2, type: "Role", name: "Samourai" },
      { id: 3, type: "Role", name: "Samourai" },
      { id: 4, type: "Role", name: "Ninja" },
      { id: 5, type: "Role", name: "Ninja" },
      { id: 6, type: "Role", name: "Ninja" },
      { id: 7, type: "Role", name: "Ronin" },
    ]);
  });
});
