/*
**Data Types Exercises P1**
**Strings, Numbers, Booleans**

Exercises to become familiar with data types. 

1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.

2. Access the 2nd and 6th elements of the string. Print the elements to the console. **Make sure you have selected the right index numbers** 

3. Declare a variable called name and assign a string as a value. 

4. Declare a variable called age and assign a number as a value. 

5. Declare a variable called year and assign a number as a value. 

6. With your declared variables, print the following: "/name/ is /age/ in /year/". 

7. Declare a variable called isMarried and assign a boolean value. 

8. With your declared variables, print the following "/name/ is married: true/false". 

9. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true.  Print "JavaScript is fun: true" to the console. 

10. Print the J and S of JavaScript from the variable programmingLanguage to the console. 

11. Print the length of the string "JavaScript" to the console.

*/


// ***Data Types P1***

// Task 1
let str = "This is a string.";
console.log(str);

// Task 2
console.log(str[1], str[5]);

// Task 3
let name = "Fran Borg";

// Task 4
let age = 25; 

// Task 5
let year = 2019;

// Task 6
console.log(name + " is " + age  + " in " + year);
console.log(`${name} is ${age} in ${year}`);

// Task 7
let isMarried = false;

// Task 8
console.log(name + " is married: " + isMarried);
console.log(`${name} is married: ${isMarried}`);

// Task 9
let programmingLanguage = "JavaScript";
let isFun = true; 

console.log(programmingLanguage + " is fun: " + isFun);
console.log(`${programmingLanguage} is fun: ${isFun}`);

// Task 10
console.log(programmingLanguage[0],programmingLanguage[4]);

// Task 11
console.log(programmingLanguage.length);