import { number } from "yargs";
import Player from "./Player";

export default class RandomPlayer extends Player {
  constructor(name: string) {
    super(name);
  }
  pickSymbol(): string {
    const choicesArrary: string[] = ["rock", "paper", "scissors"];
    const randomChoiceIndex = Math.floor(Math.random() * 3);
    return choicesArrary[randomChoiceIndex];
  }
}
