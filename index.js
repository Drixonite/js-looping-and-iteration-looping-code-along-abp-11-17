// Code your solutions in this file
// let employees = {`Lisa`, `Kaitlin`, `Jan`}
// 
// function printBadges() {
//   for (var i = 0; i < employees.length; i++) {
//     console.log(`Welcome ${employees}! You are employee #${i+1})`;
//   }
// }



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
