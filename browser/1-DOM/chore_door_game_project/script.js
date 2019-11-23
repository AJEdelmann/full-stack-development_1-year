// BUILDING INTERACTIVE JAVASCRIPT WEBSITES
// Chore Door
// Your mission is to construct a single-page website that plays a fully-functional game. You will see how HTML, CSS, and JavaScript interact harmoniously to produce a dynamic website.

// Follow the link below to see what your game will look like by the end of this project. Play a few rounds and see how you fare against the ChoreBot:

// Chore Door - Link?

// Believe it or not, you have the capabilities of building every feature in this game - from the layout to the logic. Be patient, take creative risks, and most importantly, have fun!

//Global variables
let doorImage1 = document.getElementById("door1");

let doorImage2 = document.getElementById("door2");

let doorImage3 = document.getElementById("door3");

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// Global variables for randomChoreDoorGenerator()
let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let startButton = document.getElementById("start");

let currentlyPlaying = true;

// This function check if a door has the game-ending ChoreBot
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else return false;
}

// This function make each door clickable only once
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

// This function decrease numClosedDoors, checks if the game-winning condition has been met and if so, calls a gameover()
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
}

// This function use random method to hide the chorebot
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

//Arrow functions to open doors on click
door1.onclick = () => {
  if (currentlyPlaying && !isClicked(door1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
}

door2.onclick = () => {
  if (currentlyPlaying && !isClicked(door2)) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
}

door3.onclick = () => {
  if (currentlyPlaying && !isClicked(door3)) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
}

// This function turn start button to a new round
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

// This function reset the values from previous game and starts a new game
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good luck!";
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();