import { playAndPickWinner } from "../src/functions";
import ConsistentPlayer from "../src/models/ConsistentPlayer";
import Player from "../src/models/Player";

describe("playAndPickWinner function", () => {
  test("rock beats scissors", () => {
    const player1: ConsistentPlayer = new ConsistentPlayer("Dwayne Johnson", "rock");
    const player2: ConsistentPlayer = new ConsistentPlayer("Edward", "scissors");
    const winner: Player|null = playAndPickWinner(player1, player2);
    expect(winner).toBe( player1 );
  });
  test("paper beats rock", () => {
    const player1: ConsistentPlayer = new ConsistentPlayer("Floyd Mayweather", "paper");
    const player2: ConsistentPlayer = new ConsistentPlayer("Jake Paul", "rock");
    const winner: Player | null = playAndPickWinner(player1, player2);
    expect(winner).toBe(player1);
  });
  test("rocks vs rock is a tie", () => {
    const player1: ConsistentPlayer = new ConsistentPlayer("The Thing", "rock");
    const player2: ConsistentPlayer = new ConsistentPlayer("Hulk", "rock");
    const winner: Player | null = playAndPickWinner(player1, player2);
    expect(winner).toBe(null);
  });
  test("scissors beats paper, player2 is the winner", () => {
    const player1: ConsistentPlayer = new ConsistentPlayer("Paper Mario", "paper");
    const player2: ConsistentPlayer = new ConsistentPlayer("Bowser", "scissors");
    const winner: Player | null = playAndPickWinner(player1, player2);
    expect(winner).toBe(player2);
  });
});