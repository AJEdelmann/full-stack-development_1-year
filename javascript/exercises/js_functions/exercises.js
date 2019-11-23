// Write a function that takes as an input a first name and a last name and returns a full name. Then call the function with three different names and last names.

function fullName(firstName, lastName) {
    // return firstName + ' ' + lastName
    // return `${firstName} ${lastName}`
    console.log(`${firstName} ${lastName}`)
}

// let res = fullName('Vas', 'Psych')
// console.log(res)
fullName('Vas', 'Psych')

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Write a function that will let you know if a number is divided by 5 and 3. Then call the function for the following numbers 66,75,123,554,225,455635. After that call the function for all the odd numbers from 0 till 100.

// Function that checks if a number is divided by 3 and 5
// function isDividedByThreeAndFive(num) {
//     if(num%3 == 0 && num%5 == 0)
//         console.log(`${num} is divided by 3 and 5 perfectly`)
//     else console.log(`${num} is NOT divided by 3 and 5 perfectly`)

//     // let res = (num%3 == 0 && num%5 == 0) ? console.log(`${num} is divided by 3 and 5 perfectly`) : console.log(`${num} is NOT divided by 3 and 5

// }

function isDividedByThreeAndFive(num) {
    if(num%3 == 0 && num%5 == 0)
        printResult(true, num)
    else printResult(false, num)

    // let res = (num%3 == 0 && num%5 == 0) ? console.log(`${num} is divided by 3 and 5 perfectly`) : console.log(`${num} is NOT divided by 3 and 5

    // let res = (num%3 == 0 && num%5 == 0) ? printResult(true, num) : printResult(false, num)
}

function printResult(arg, num) {
    if(arg)
        console.log(`${num} is divided by 3 and 5 perfectly`)
    else console.log(`${num} is NOT divided by 3 and 5 perfectly`)
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Then call the function for the following numbers 66,75,123,554,225,455635.

isDividedByThreeAndFive(66)
isDividedByThreeAndFive(75)
isDividedByThreeAndFive(123)
isDividedByThreeAndFive(554)
isDividedByThreeAndFive(225)
isDividedByThreeAndFive(455635)

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Call the function for all the odd numbers from 0 till 100.

// for(let i = 0; i <= 100; i++) {
//     if( i%2 !== 0 )
//         isDividedByThreeAndFive(i)
// }

function checkPlease(num) {
    for(let i = 0; i <= num; i++) {
        if( i%2 !== 0 )
            isDividedByThreeAndFive(i)
    }
}

checkPlease(20);


Write a function that will capitalize each word we give it.

const capitalizeWord = (word) => {
    let cw = word.toUpperCase();
    return cw;
}
console.log(capitalizeWord("mad"));


Break into functions the pyramid example from yesterday

Solution 1:

function addSpace(i,spaceNum,res)
{
 
    for(j=0; j<spaceNum-i; j++){
        res = " " + res;
    }
     return res;
}
function addStar(res)
{
    for(k=0; k<i; k++){
        res = res + "**";
    }
    return res;
}
const pyramid = (num) => {
    let res;
    for(i=0; i<num; i++){
        res = "*";
      
        // we add spaces
       res =addSpace(i,num,res);
      
       // we add stars
       res =addStar(res);
        console.log(res);
    }
}
pyramid(0);


Solution 2: This is perfect one

function addSpace (stringg, numb){
    for (let i = 0; i < numb; i++) {
        stringg += "G";
    }
    return stringg;
}
function addStars(stringg, numb){
    for (let i = 0; i < numb; i++) {
        stringg += "*";
    }
    return stringg;
}
function printFloor_N_of_M_floorpyramide (n,m){
    let stringg = "";
    stringg = addSpace (stringg, m-n) + addStars (stringg, 2*n+1);;
    console.log(stringg)
}
function print_Pyramid_With_M_floors (m) {
    for (let i = 0; i < m; i++) {
        printFloor_N_of_M_floorpyramide (i,m)        
    }
}

print_Pyramid_With_M_floors (5)





// Task:
//
// define a function that has one parameter: yearBorn
// and it returns the age based on the current year 2019
 
function calcAge(yearBorn) {
    return 2019 - yearBorn;
}
calcAge(1981);

// Task:
//
// write a function greaterTen that returns true
// if the parameter n is greater than 10. return
// false if it less than 10.

function greaterTen(n) {
    if(n > 10) {
        return true;
    }
    else {
        return false;
    }

    //or
    //return (n>10);
}
console.log(greaterTen(5));

// Task:
// 
// write a function weather with one parameter
// "quality".
// return 'great' -> quality between 8 and 10
// return 'good' -> quality between 6 and 8
// return 'okay' -> quality between 3 and 6
// return 'not so okay' -> quality between 0 and 3



function weather(quality) {
 if(quality >= 8 && quality < 10) {
     return 'great';
 }
 else if(quality >= 6 && quality < 8) {
     return 'good';
 }
 else if(quality >= 3 && quality < 6) {
     return 'okay';
 }
 else {
     return 'not so great';
 }
}
console.log( weather(8) );



// Task: 
// invent one function with two parameters
// that returns a string using the two parameters.


function test(one,two)
{
 return one+two;
}
console.log(test("abc","xyz"));

function testWithConcat(one,two)
{
 return one.concat(two);
}
console.log(testWithConcat("abc","xyz"));

function testWithBracket(one,two)
{
 return `${one} ${two}`;
}
console.log(testWithBracket("acb","xyz"));

function testWithExisting(one,two)
{
 return 'My string is '+one + two;
}
console.log(testWithExisting("acb","xyz"));



//Task. Add up
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//Examples of output:
//addUp(4) ➞ 10
//addUp(13) ➞ 91
//addUp(600) ➞ 180300

function addUp(num)
{
 console.log("addUp..");
 let sum=0;
 for(i=1; i<=num; i++)
 {
   console.log("i=>" + i);
   //when i=1 then sum=1
   //when i=2 then sum=3
   sum = sum + i;
   console.log("sum=>" + sum);
  
 }
 return sum;
}
console.log(addUp(100));




//Task: Less than or Equal to Zero?
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//Examples:
//lessThanOrEqualToZero(3) ➞ false
//lessThanOrEqualToZero(0) ➞ true
//lessThanOrEqualToZero(-4) ➞ true
//lessThanOrEqualToZero(10) ➞ false

function lessThanOrEqualToZero(num)
{
 console.log("lessThanOrEqualToZero...");
 //way 1:
 //return (num <=0);

 //way 2:
 if(num <=0)
  return true;
 else
  return false;
}
console.log(lessThanOrEqualToZero(3));



//Task:  Where's Waldo? 
//Create a function that takes a string and returns true if Waldo is found and false if he's not.
//Examples:
//isWaldoHere("is there wal here ?") ➞ false
//isWaldoHere("I found you Waldo!") ➞ true
//isWaldoHere("is wally here?") ➞ false
//isWaldoHere("waldo is here") ➞ true

function isWaldoHere(string) {
 const lowerString = string.toLowerCase();
 if (lowerString.includes("waldo")) {
     return true;
 } else return false;
}

isWaldoHere("is there wal here ?"); //➞ false
isWaldoHere("I found you Waldo!"); //➞ true
isWaldoHere("is wally here?"); //➞ false
isWaldoHere("waldo is here"); //➞ true




//Task : 
//Write a JavaScript function that reverse a number.
//Sample Data and output: 
//Example x = 32243; 
//Expected Output: 34223

function reverseNumber (a) {
 // if (typeof a != 'number' || Number.isInteger(a) != true) return console.log ('Not a integer number')
 // else {
 //     return console.log(a.toString().split('').reverse().join(''))
 // }

 //Use a.toString() or a= a+ "";

 (typeof a != 'number' || Number.isInteger(a) != true) ? console.log('Not a integer number') : console.log(a.toString().split('').reverse().join(''));

 }
reverseNumber (32243); // Output: 34223"





 
 
//Task : Write a JavaScript function that accepts a string as a parameter and
//counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Sample Data and output:
// Vowels : aeiou - AEIOU
// Example string: vowelCount('The quick brown fox')
// Expected Output: 5
//Way 1
function vowelCount(paramStr)
{
  console.log("vowelCount...");
  paramStr=paramStr.toLowerCase();
  var vowels="aeiou";
  var vowelCount=0;
  //console.log(paramStr);
  for(var index=0; index < paramStr.length; index++)
  {
    //console.log(paramStr.indexOf("t"));
    //console.log("string char=>"+paramStr[index]);
   if(vowels.indexOf(paramStr[index]) != -1)
   {
      vowelCount = vowelCount +1;
   }
  }
 return vowelCount;
}
console.log(vowelCount('The quick brown fox'));
 
//Way 2
 
function getVowels(str) {
 var vowelsCount = 0;
 
 //turn the input into a string
 str = str.toLowerCase();
console.log(str.length)
 //loop through the str
 for (var i = 0; i < str.length; i++) {
 
 //if a vowel, add to vowel count
   if  (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
     vowelsCount += 1;
   }
 }
 console.log(vowelsCount);
}
 
getVowels('ThE quick brown fOx');
 
//Way 3
function getVowels(str) {
 var m = str.match(/[aeiou]/gi);
 console.log(m)
 console.log(m === null ? 0 : m.length);
}
getVowels('The quIck brown fOx');


// Task: Validate
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
// 
// **Notes**
// * The string must contain an @ character.
// * The string must contain a . character.
// * The @ must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The . and the @ must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

//Way 1

const validEmail = (email) => {
 let atSymbol = "@";
 let dot = ".";
    if(email.includes(atSymbol) &&
     email.includes(dot) &&
     email.indexOf(atSymbol)!=0 &&
     email.indexOf(atSymbol) < email.lastIndexOf(dot)+1)
         return `${email} is valid`;
     else
         return `${email} is not valid`;
}
console.log(validEmail("john@example.com")); //true
console.log(validEmail("john.smith@com")); //false
console.log(validEmail("john.smith@email.com")); //true
console.log(validEmail("@example.com")); //false


//Way 2

 function validate(email) {
     let atSymbolPos = email.indexOf("@");
     let dotPos = email.indexOf(".");
     if ((email.includes("@")) && (atSymbolPos > 0) && (email.includes(".")) && (dotPos > atSymbolPos)) {
         return `${email} is valid`
     } else {
         return `${email} is invalid`;
     }
 } 

console.log(validate("personal@fran.borg"));

//Task :
//Write a JavaScript function which returns the n rows by n columns identity matrix.

//Sample Output: Sample Output:
//matrix(4);
// 1
// 0
// 0
// 0
// ----------
// 0
// 1
// 0
// 0
// ----------
// 0
// 0
// 1
// 0
// ----------
// 0
// 0
// 0
// 1
// ----------


function matrix(n)
{

  for (let row=1; row <= n; row++)
 {
   for (let column=1; column <= n; column++)
   {
        if (row === column)
        {
        
          console.log(' 1 ');
        }
              
        else
         {
          console.log(' 0 ');}
         }
      console.log('----------');
    }
}
matrix(4);



Bonus Task : please print the following way matrix.

1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1

function matrix(n)
{
for (let row=1; row <= n; row++)
{
  let result='';
  for (let column=1; column <= n; column++)
  {
       //  if(row==column)
       //     result +=' 1 ';
       //  else
       //     result +=' 0 ';
       result += (row==column) ? ' 1 ' : ' 0 ';
   }
   console.log(result);
 }
}
matrix(4);




