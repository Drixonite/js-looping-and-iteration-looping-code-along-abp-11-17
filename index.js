// Code your solutions in this file
let employees = {}

function printBadges() {
  for (var i = 0; i < printBadges.length; i++) {
    console.log(`Welcome ${printBadges}! You are employee #${i+1})`;
  }
}


function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let counter = 0;
  while(coinToss()) {
    counter++
  }
  return `You got ${counter} tails in a row!`
}