import setupPromptSync from "prompt-sync";
import { displayHeroes, displayRoundsWon, playAndPickWinner } from "./functions";
import ConsistentPlayer from "./models/ConsistentPlayer";
import Player from "./models/Player";
import RandomPlayer from "./models/RandomPlayer";

// Villains Array
const villainsArray: Player[] = [
  new RandomPlayer("Rando Danger Man"),
  new ConsistentPlayer("Slicer", "scissors"),
  new ConsistentPlayer("SME-Smash", "rock"),
  new ConsistentPlayer("Featherweight", "paper")
]

// Heroes Array 
const heroes: Player[] = [
  new ConsistentPlayer("Iron Man", "rock"),
  new ConsistentPlayer("Static Shock", "scissors"),
  new RandomPlayer("Homelander"),
  new ConsistentPlayer("Invincible", "rock"),
]


// const prompt = setupPromptSync({ sigint: true });
// const name = prompt("Name, please: ");
// console.log("You typed: " + name);

// const player1: ConsistentPlayer = new ConsistentPlayer("Dwayne Johnson", "rock");
// const player2: ConsistentPlayer = new ConsistentPlayer("Edward", "scissors");
// const winner: Player|null = playAndPickWinner(player1, player2);




function game() {
let i = 0;
while (i <= 3){
  console.log(`You are facing: ${villainsArray[i].name}`);
  console.log(`Who will you pick to battle for you?`)
  displayHeroes(heroes);
  const prompt = setupPromptSync({ sigint: true });
  const nameOfHero = prompt("Type a hero name: ");
  // const chosenHero = heroes.find( hero => {
  //   return hero.name === nameOfHero;
  // });
  const heroIndex = heroes.findIndex(hero => hero.name === nameOfHero);
  //let chosenHero = heroes.find(element => element.name === nameOfHero);
  // let chosenHero =  (heroes: Player[]) => {
  //   let heroChoice;
  //   for (let hero of heroes) {
  //     if (hero.name === nameOfHero) {
  //     heroChoice = hero;
  //   }
  //   return heroChoice;
  // }
  const winner = playAndPickWinner(heroes[heroIndex], villainsArray[i]);
  if (winner === heroes[heroIndex]) {
    console.log("YOUR HERO WINS!")
  } else if (winner === villainsArray[i]) {
    console.log("YOUR HERO LOSES!")
  } else console.log("IT WAS A TIE!")
  if (winner !== null) {
    winner.winCount++
  }
  i++
  console.log("---------------------------")
  }
  console.log("Game over.")
  displayRoundsWon(heroes);
  displayHeroes(heroes);
}

game();


// You are facing: Poker Face
// Who will you pick to battle for you?
// - Rocky (0 wins)
// - Treebeard (1 wins)
// - Blade (1 wins)
// - Dancing Queen (0 wins)
// Type a hero name: Dancing Queen
// Dancing Queen plays scissors.
// Poker Face plays paper.
// YOUR HERO WINS!

// Game over.
// Your heroes won 3 out of 4 rounds.
// - Rocky (0 wins)
// - Treebeard (1 wins)
// - Blade (1 wins)
// - Dancing Queen (1 wins)
