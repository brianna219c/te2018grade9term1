const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 100,
  intellect: 98,
  strength: 100,
  charm: 80,
  weapon: "handgun",
  item: "phone",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE PARTY ***");
player.name = READLINE.question("What is your name?");
console.log(`${player.name} hears that there is a party tonight`);
let partyTime = READLINE.question("Will you go to the party (yes or no) ");

if(partyTime== "y" || partyTime == "yes") {

} //if(partyTime== "n" || partyTime == "no") {

}player.courage++;
  console.log(`${player.name} gets their ${player.item} and leaves home, then heads to the party...`);
  let kitchen = READLINE.question("Go to kitchen to get a drink? (yes or no) ");
  if(kitchen== "y" || enterHouse== "yes" ){

  } if(kitchen== "n" || kitchen== "no") {

  }
  // continue the story
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
