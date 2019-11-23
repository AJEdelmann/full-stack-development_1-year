// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
// let str = "I can walk in the park all day";
// console.log(str.substring(17, 22));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
// let str = "Hello World";
// console.log(str.toUpperCase());

// 3. Declare another variable with the value of "Earthlings". Convert the value to lower case and print the converted value to the console.
// let str = "Earthlings";
// console.log(str.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Print the the characters "aSc" to the console using the substring() method.
// let str = "JavaScript";
// let midChars = str.substring(3, 6);
// console.log(midChars);

// 5. Check if the sentence "nice shoes" contains the letter l. 
// let str = "nice shoes";
// console.log(str.match("l"));
// console.log(str.match("n"));

// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ. 
// let str = "JavaScript";
// let firstChar = str[0];
// console.log(`${firstChar}${str}${firstChar}`);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
// let str = "JavaScript";
// let lastThreeChars = str.substring(str.length - 3);
// console.log(lastThreeChars + str + lastThreeChars);
// console.log(`${lastThreeChars}${str}${lastThreeChars}`);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
// let str = "JavaScript";
// console.log(str.includes("Java"));
// console.log(str.toUpperCase());

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
// let str = "JavaScript";
// let firstChar = str[0];
// let lastChar = str[str.length - 1];
// let remainderString = str.substring(1, str.length - 1);
// console.log(lastChar + remainderString + firstChar);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation e.g. "My name is Maria. I live in Berlin and I am a teacher". 
// let firstName = "Maria";
// let city = "Berlin";
// let job = "teacher";

// console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}`);

//11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
// let str = "the quick brown fox";
// let firstChar = str[0].toUpperCase();
// let remainderString = str.slice(1);
// console.log(firstChar + remainderString);