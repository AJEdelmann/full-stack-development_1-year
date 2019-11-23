//1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object: 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
// Sample Output: name,sclass,rollno

var customer = {
    firstName: "Douglas",
    lastName: "Donaldson",
    age: 23,
    Street: "Oderstr.",
    PLZ: 12058
};

//Case 1:
const dataInfo = Object.keys(customer);
console.log(dataInfo);
dataInfo.forEach(custInfo);
function custInfo(item, index, dataInfo) {
    console.log(`The properties of the Customer Object are: ${item}`);
}

//Case 2
const listOfProperties = obj => {
    var result = Object.keys(obj).toString();
    return result;
}
console.log(listOfProperties(customer));


//2. Check if a number is within a given range
// Write a program that checks if a number is within the range of an object's min and max properties. 

// Examples: 
// * 4, { min: 0, max: 5 }) ➞ true
// * 4, { min: 4, max: 5 }) ➞ true
// * 4, { min: 6, max: 10 }) ➞ false
// * 5, { min: 5, max: 5 }) ➞ true
// * Notes: Assume min <= max is always true. 

//Case 1:
// #### 1. Check if a number is within a given range
// Write a program that checks if a number is within the range of an object's min and max properties.
function checkIfNumberIsInRange(num, obj) {
    return num >= obj.min && num <= obj.max;
}
console.log(checkIfNumberIsInRange(4, { min: 0, max: 5 }));
console.log(checkIfNumberIsInRange(4, { min: 4, max: 5 }));
console.log(checkIfNumberIsInRange(4, { min: 6, max: 10 }));
console.log(checkIfNumberIsInRange(5, { min: 5, max: 5 }));
//Case 2:
function checkIfWithinTheRange(num, obj) {
    let givenRange = Object.values(obj);
    console.log(givenRange);

    if ((num >= givenRange[0]) && (num <= givenRange[1])) {
        return true;
    }
    else {
        return false;
    }
}

//Exercise 3: Return Keys and Values
// Write a program that takes an object and returns the keys and values in separate arrays. 
// Examples: 
// * { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
// * {key: true} ➞ ["key"], [true]

var num = {
    a: 1,
    b: 2,
    c: 3
};
var kt = {
    key: true
};
console.log(Object.keys(num), Object.values(num));
console.log(Object.keys(kt), Object.values(kt));

// Exercise 4. Scrabble 
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. 
// Example: 
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
var scrabble = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];
var score = 0;
for (let obj of scrabble) {
    score += obj.score;
}
console.log(`The player's maximum score:${score}`);

// Exercise 5 : Is it an empty object? 
// Write a program that returns true if an object is empty, and false if otherwise. 

// Examples: 
// * {} ➞ true
// * {a: 1} ➞ false

function verify(obj) {
    return Object.keys(obj).length === 0; 
    // return !Object.keys(obj).length          ....transforms in boolean 
}
console.log(verify({}));
console.log(verify({a: 1}));


// Exercise 6 : Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France". 
// Example : const student = { 
//     firstName: "John", 
//     lastName: "Smith", 
//     class: 12 };

var starWarsCharacter = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 19,
    job: 'moisture farmer',
    planet: 'Tatooine',
    class: 12
};

console.log(`${starWarsCharacter.firstName} ${starWarsCharacter.lastName} is a ${starWarsCharacter.age} years old ${starWarsCharacter.job} living on ${starWarsCharacter.planet}`);

// Exercise 7 : Write a JavaScript program to delete the "class" property (or last property) from the previous object.

var starWarsCharacter = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 19,
    job: 'moisture farmer',
    planet: 'Tatooine',
    class: 12,
    displayIntroduction: function () {
        console.log(`${starWarsCharacter.firstName} ${starWarsCharacter.lastName} is a ${starWarsCharacter.age} years old ${starWarsCharacter.job} living on ${starWarsCharacter.planet}`);
    },
    test: 'test'
};
// function is checking for a specific key. If it is included it's deleting it, otherwose it deletes the last key
function deletePropertyFromObject(obj, key) {
    var arrProperties = Object.keys(obj);
   (Object.keys(obj).includes(key)) ? delete obj[key] : delete obj[arrProperties[Object.keys(obj).length - 1]];
}
deletePropertyFromObject(starWarsCharacter, 'class');

// Exercise 8: Write a program to get the length of a JavaScript object.
function lengthOfObject(obj) {
    return Object.keys(obj).length;
}
console.log(lengthOfObject(starWarsCharacter));

// Exercise 9 : Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// const library = [ 
//    {
//        author: 'J.K. Rowling',
//        title: 'Harry Potter and the Chamber of Secrets',
//        readingStatus: true
//    },
//    {
//        author: 'Homer',
//        title: 'The Odyssey',
//        readingStatus: true
//    },
//    {
//        author: 'Harper Lee',
//        title:  'To Kill a Mockingbird', 
//        readingStatus: false
//    }];
// E.g. Output: 
// Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
// Already read The Odyssey by Homer
// You still need to read To Kill a Mockingbird by Harper Lee

function readingStatus(arr) {
    arr.forEach((item) => {
        (item.readingStatus) ? console.log(`Already read ${item.title} by ${item.author}.`) : console.log(`You still need to read ${item.title} by ${item.author}.`)
    });
}
readingStatus(library);