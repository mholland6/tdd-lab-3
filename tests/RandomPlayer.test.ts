import RandomPlayer from "../src/models/RandomPlayer";

describe("Random Player tests", () => {
  test("name is set correctly by the constructor", () => {
    const randomPlayer: RandomPlayer = new RandomPlayer("Rando");
    expect(randomPlayer.name).toBe("Rando");
    expect(randomPlayer.winCount).toBe(0);
  });
});