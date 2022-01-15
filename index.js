// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if(confirm(`Horraaay, ${winner} wins!`)){
    restartGame();
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */


let counter = 0;
let grid = ["","","","","","","","",""];
function clickButton(index) {
  // Your main code here.
  // player = checkPlayer();
  // fillButton(index, player);
  if (grid[index - 1] === "") {
   
  const currentPlayer = counter % 2 == 0 ? "X" : "O";}
  grid[index - 1] = currentPlayer;
  fillButton(index, currentPlayer);
  checkWinner (currentPlayer);
// end of turn
  counter++;
  console.log(`Button number ${index} is clicked
  counter: ${counter}
  grid: ${grid}`);
}



  // another way
  // if (counter % 2 === 0) {
  //   fillButton(index, playerOne);
  //   lastClicked = playerOne;
    
  //   // console.log(index1);
  //   // checkWinner();
  // } else {
  //   fillButton(index, playerTwo);
  //   lastClicked = playerTwo;
    
  //   // console.log(index2);
  //   // checkWinner();



/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {
  // ....
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner
function checkWinner(p) {
     
   
    
    const Row1 = [g[0], g[1], g[2]].join("") === [p,p,p].join("");
   
    const Row2 = [grid[3], grid[4] , grid[5]].join("") === [p,p,p].join("");
    
    const Row3 = [grid[6], grid[7] , grid[8]].join("") === [p,p,p].join("");
    
    const C1 = [grid[0], grid[3], grid[6]].join("") === [p,p,p].join("");
    
    const C2 = [grid[1], grid[4], grid[7]].join("") === [p,p,p].join("");
  
    const C3 = [grid[2], grid[5], grid[8]].join("") === [p,p,p].join("");
   
    const Diag1 = [grid[0], grid[4], grid[8]].join("")=== [p,p,p].join("");
   
    const Diag2 = [grid[2], grid[4], grid[6]].join("")=== [p,p,p].join("");
    
    if (Row1||Row2||Row3||C1||C2||C3||Diag1||Diag2) {
    winningAlert(p);
  }
}





function restartGame(){
counter = 0;
grid = ["","","","","","","","",""];
for(let i=0; i<9; i++){
  
fillButton(i, "");
}
}
}

