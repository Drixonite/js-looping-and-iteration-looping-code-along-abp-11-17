// Code your solutions in this file

function printBadges([`Joe`, `Gabe`]) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array}! You are employee #${array+1}.`)
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
