// # String Exercises

// ## These exercises are aimed at making you more familiar with strings, namely string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
var tripToPark ='I can walk in the park all day!';
var park = tripToPark.split(' ')
// var park = tripToPark.slice(18, 22)
// var park = tripToPark.substring(18, 22)
console.log(park[5])

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
var js = 'JavaScript'
var res = js.slice(3,6)
console.log(res)

// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
var str = "Hello World";
console.log(str.toUpperCase());

// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

var str = "Earthlings"
console.log(str.toLowerCase())

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
var str = "nice shoes"
console.log(str.match("l"))
console.log(str.match("n"))

// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
var str = "JavaScript";
var firstCharacter = str.substring(0,1);
console.log(`${firstCharacter}${str}${firstCharacter}`)
// console.log(firstCharacter + str + firstCharacter)

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
var str = "JavaScript";
var lastThree = str.substring(7,10);
console.log(`${lastThree}${str}${lastThree}`)
// console.log(lastThree + str + lastThree)

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
var str = 'Javascript'
var up = str.toUpperCase();  // JAVASCRIPT
var res = up.includes('Java')
console.log(up)
console.log(`My string includes 'Java': ${res}`)

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
console.log('+++++++++++++++++++++++++++')
var str = 'Javascript'
var firstLetter = str[0]
console.log(firstLetter)
// var lastLetter = str[9]
var lastLetter = str[str.length - 1]
console.log(lastLetter)
var midPart = str.slice(1,9)
// var midPart = str.slice(1,str.length - 1)
console.log(midPart)
console.log(`${lastLetter}${midPart}${firstLetter}`)

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 
let firstName = "Maria";
let city = "Berlin";
let job = "teacher";

console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}`);

// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

var str = 'the quick brown fox'
var firstLetter = str.charAt(0).toUpperCase()
var rest = str.slice(1);
console.log(`${firstLetter}${rest}`)