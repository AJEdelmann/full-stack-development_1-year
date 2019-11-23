// ***********REVERSE ARRAY TASK****************

// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

// There’s a built-in method that does a lot of this work for you, and is called .reverse(), but here you’re not allowed to use it.
/*
const sentence = ['sense.','make', 'all', 'will', 'This'];

reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];
*/

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
/*
// Alternate solutions:

// Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); 


// ************GREET ALIENS TASK***************
// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

// greetAliens(aliens);
// // Should print:
// // Oh powerful Blorgous, we humans offer our unconditional surrender! 
// // Oh powerful Glamyx, we humans offer our unconditional surrender! 
// // Oh powerful Wegord, we humans offer our unconditional surrender! 
// // Oh powerful SpaceKing, we humans offer our unconditional surrender! 

const greetAliens = arr => {
    for(let i=0; i<arr.length; i++){
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
    }
  }

  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);



// ***********CONVERT TO BABY TASK******************
// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

// convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

const convertToBaby = arr => {
    let baby = [];
    for(let i=0; i<arr.length; i++){
        baby.push(`baby ${arr[i]}`);
    }
    return baby;
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));


// ********DECLINE AND ACCEPT EVERYTHING TASK***********

// Decline Task: Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them. You can test your function when you’re ready by passing in the veggies array or by making your own array!

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}
declineEverything(veggies);
/*
// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}
*/

// *************************************************************************************

// Accept Task:Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}
acceptEverything(veggies);
/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/

// =============================================================
// =============================================================


// TASK SHOUT GREETINGS

// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

// SOLUTION 1 - Using .map():
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

// SOLUTION 2 - As a function declaration AND using a loop:
/*
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/

console.log(shoutGreetings(greetings))

