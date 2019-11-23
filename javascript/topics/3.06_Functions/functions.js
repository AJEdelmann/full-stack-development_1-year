//Start Define function

/*

showMessage();

console.log('before function');

function showMessage() {
  console.log('Hello Everyone');
}

function showMessage() {
  console.log('Hello second function defination');
}


console.log('after fuction');

//showMessage();

*/

//do exercise palindrom with function.
//you can assign any string which you want to check it and print result.

function isPalindrom() {
  var originalStr = 'madaM';
  originalStr = originalStr.toLowerCase(); // convert into lowercase : madam
  var reverseStr = originalStr.split(''); // [ 'm', 'a', 'd', 'a', 'm' ]
  reverseStr = reverseStr.reverse(); // [ '1', 'm', 'a', 'd', 'a', 'm' ]
  reverseStr = reverseStr.join(''); // 1madam

  if (originalStr == reverseStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrom();

//Define a Function : Function Expressions

// const showMessage = function() {
//   console.log("I am function expressoin");
// };

// showMessage();

// let a=10;
// let b=a;
// console.log(b);

//this will not work
//const copyFunc=showMessage();
//below will work, as it is simple variable assignment
const copyFunc = showMessage;

copyFunc();

var func1 = function () {
  console.log("I am function expressoin - func1");
};

func1();

var func2 = function () {
  console.log("I am function expressoin - func2");
};


func1 = func2;
func1();

func1 = func1;

func1();

//define with parameters
const showMessageWithParam = function (message) {
  console.log(message);
};

showMessageWithParam("hallo DCI");
showMessageWithParam("abcede");

//Define a arrow function expression

const showMessageWithArrow = () => {
  console.log("I am arrow function");
};

showMessageWithArrow();

const showMessageWithArrowWithParm = (message) => {
  console.log(message);
};
showMessageWithArrowWithParm("I am arrow function with param");

//with {}
//let sum =(a,b) => { console.log (a+b);};
//sum(4,5);

//without {}
let sum = (a, b) => a + b;
console.log(sum(4, 5));

//Parameters vs Arguments

const param1 = true;
const param2 = false;

function twoParams(p1, p2) {
  console.log(p1, p2);
}

twoParams(param2, param1);

function showGreeting(from, text) {
  console.log(from + ':' + text);
}
showGreeting('Ann', 'Hello');
showGreeting('Ann');

function showGreetingDefaultValue(from, text = "no text given") {
  console.log(from + ':' + text);
}
showGreetingDefaultValue('Ann');

//define 3 parameters function
function aboutMe(firstName, lastName, work) {
  console.log('My name is ' + firstName + " " + lastName + " and I am a " + work);
}

aboutMe('ali', 'mohammed', 'IT engineer');

//function with two default values of the parameters
function personInfo(firstName, yearOfBirth, lastName = "Smith", nationality = "germany") {
  //Part 1
  //console.log(firstName + " " + lastName + " " + yearOfBirth + " " + nationality);

  //Part 2
  this.firstName1 = firstName;
  this.lastName1 = lastName;
  this.yearOfBirth1 = yearOfBirth;
  this.nationality1 = nationality;
  console.log(this.firstName1 + " " + this.lastName1 + " " + this.yearOfBirth1 + " " + this.nationality1);

}

personInfo('John', 1990);
personInfo('John', 1990, 'Klass');
personInfo('John', 1990, 'Klass', 'USA');


//Function Return
function test() { }
console.log(test());

function test1() { return true; }
console.log(test1());

function sumWithReturn(a, b) {
  return a + b;
}
let result = sumWithReturn(1, 2);
console.log(result);

function doNothing() {
  /* empty */
}
console.log(doNothing() === undefined);

function doNothing1() {
  return;
}
console.log(doNothing1() === undefined);

//Let do exercise 
//Exercise 1:  Pyramid Star
//Define function with paramater and it will draw the following pyramid.
//      *
//     ***
//    *****
//   *******
//  ********* 
//if you will pass 5 number in the function then above output will print. if you will pass other number then it will different output but it always pyramid as shown above.
//e.g drawPyramid(5);


//Rest Operator
// function countArguments(param1, param2, param3)
// {
//   console.log(param1 + " " + param2 + " " + param3);

// }

// function countArguments(...args)
// {
//   var param1 = args[0];
//   var param2 = args[1];
//   var param3 = args[2];

//   console.log(param1 + " " + param2 + " " + param3);
// }


function countArguments(param1, ...args) {

  var param2 = args[0];
  var param3 = args[1];

  console.log(param1 + " " + param2 + " " + param3);
}
countArguments('welcome', 'to', 'Earth');

//Task : Pass all your personal info as parameters except first name , last name and birth date and rest all the info (like title,city,zip,country) collect as rest operator and proper display via console inside the function.

function personalInfo(firstName, lastName, birthDate, ...args) {
  var title = args[0];
  var city = args[1];
  var zip = args[2];
  var country = args[3];
  console.log(`${firstName} ${lastName}, birth date is ${birthDate}, he is a ${title},born in ${city}, ${zip}, in the ${country}`);
}

// Scope : Local & Global

//Local Scope
// function showMessage()
// {
//   let message="Hello, I am Javascript";
//   console.log(message);
// }
// showMessage(); //Hello, I am JavaScript.
// console.log(message); // <!-- Error 

//Global Scope
// var userFirstName="John";
// function showMessage(){
//   userFirstName="Pinto";
//   let message="Hello, " + userFirstName;
//   console.log(message);
// }
// console.log(userFirstName); // John
// showMessage(); // Hello, Pinto
// userFirstName="Bob";
// showMessage(); //?
// console.log(userFirstName); // John

var userFirstName = "John";
function showMessage() {
  //Case 1
  //let userFirstName="Bob";
  //Case 2
  var userFirstName = "Bob";
  let message = "Hello, " + userFirstName;
  console.log(message);
}
console.log(userFirstName); // John
showMessage(); // Hello, Bob
console.log(userFirstName); // John

//Task : Make Two Functions
//Create one global variable (let say dataInfo) and it contains both function info and show in console log.
// personalInfo function : Contains Personal Info (Full name, date of birth, Title, age)
// addressInfo function: Contains Address Info (City,State,Zip, Country)
//Hint Take Third function or without it, To merge both values and put in global variables.

function personalInfo(title, fullName, birth, age) {

  let totalInfo = (`${title} ${fullName} ${birth} ${age} years old` + " ")
  return totalInfo;
}

function addressInfo(city, state, zip, country) {

  let totalInfo = (`${city} ${state} ${zip} ${country}`)
  return totalInfo;
}

var dataInfo = personalInfo("Mr", "Carlos Pérez", "12.10.2000", "19") + addressInfo("Barcelona", "Spain", "12584", "Venezuela");
console.log(dataInfo);

//Topic: Passing Functions as agruments

//Age, Full Age, Heart Rate
var name = "John";
function detailsCalculate(name, birthYear, fnParam) {
  console.log(`Hi, ${name} your age is ${fnParam(birthYear)}`);
}
function calculateAge(ageParam) {
  return 2019 - ageParam;
}
function isFullAge(ageParam) {
  return ageParam >= 18;
}
function maxHeartRate(ageParam) {
  age = calculateAge(ageParam);
  console.log("your age is " + age);
  if (age >= 18 && age <= 81) {
    return 220 - age;
  }
  else {
    return -1;
  }
}
console.log("Age...");
detailsCalculate(name, 1985, calculateAge);
console.log("Full Age...");
detailsCalculate(name, 1985, isFullAge);
console.log("Heart Rate...");
detailsCalculate(name, 1989, maxHeartRate);

//Task : Write Javascript function that accepts three arguments, a string,letter which you going to count and function. Passed Function as argument will count the number of occurrences of the specified letter within the string.

//Sample arguments, "Iamstudent at DCI", 't',countWord

//Expected output: 3


const threeArgs = (str, letter, func) => {
  console.log(`On string: ${str} \nThe number of letter: ${letter} \nIs equal to: ${func(str, letter)}`);
}
const countLetter = (str, letter) => {
  str = str.toLowerCase();
  letter = letter.toLowerCase();
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) n += 1;
  }
  return n;
}
// console.log(countLetter("IamstudenT at DCI", "t"));
threeArgs("IamstudenT at DCI", "t", countLetter);

//Task : Write Javascript function that accepts two arguments, a string and function (you can give function: findNotRepeated). 
//Passed Function as argument will check the string and find the first (only one) not repeated character from string and return that not repeated all characters.
//Sample arguments, "axbyazcddbexcyzl", findNotRepeated
//Expected output: e

//Bonus Task : return all not repeated characters together from the string.
//Expected output: el

//Method 1

// function repeatCharaters(strParam, funParam)
// {
//  console.log(`Not Repeated Character: ${funParam(strParam)}`)
// }

// function findNotRepeated(strParam)
// {
//   //console.log(strParam.indexOf('e'));
//   //console.log(strParam.indexOf('e',11));

//   //for Bonus Task
//   var result='';
//   for(var i=0; i<strParam.length; i++)
//   {
//     var charValue=strParam.charAt(i);

//     var firstIndex=strParam.indexOf(charValue);
//     var secondIndex=strParam.lastIndexOf(charValue);

//     //if(strParam.indexOf(charValue)== i && strParam.indexOf(charValue,i+1)==-1)
//     if(strParam.indexOf(charValue)== strParam.lastIndexOf(charValue))
//     {
//       //Main Task
//       //return strParam[i];

//       //Bonus Task
//       result +=strParam[i];
//     }

//   }
//   return result;
// }
// repeatCharaters("axbyazcddbexcyzl",findNotRepeated);

//Method 2

function repeatCharaters(strParam, funParam) {
  console.log(`Not Repeated Character: ${funParam(strParam)}`)
}

function findNotRepeated(strParam) {
  var counter = 0;
  //for Bonus Task
  var result = '';

  console.log("test");

  for (var i = 0; i < strParam.length; i++) {
    //console.log("outside loop=>"+strParam[i]);
    counter = 0;

    for (var j = 0; j < strParam.length; j++) {
      //console.log("inside loop==>"+ strParam[j]);
      if (strParam[i] == strParam[j]) {
        counter++;
      }
    }

    console.log(counter);

    if (counter < 2) {

      //Main Task
      //result= strParam[i];
      //break;  //<-- for the getting first one

      //Bonus Task
      result += strParam[i]; //  result = result + strParam[i];


    }

  }

  return result;
}
repeatCharaters("axbyazcddbexcyzl", findNotRepeated);


//Topic : Function returning Functions

function interviewQuestion(job) {
  console.log("interviewQuestion...");

  if (job == 'designer') {
    // return function (name) {
    return function designerJob(name) {
      console.log(`${name} can you please explain what UX Design is?`);
    }
  }
  if (job == 'teacher') {
     // return function (name) {
    return function teacherJob(name) {
      console.log(`What subject do you teach, ${name}?`);
    }
  }
  else
  {
    return function (name)
    {
      console.log(`Hello, ${name} what do you do?`);
    }
  }
  
}
// var funCallBack = interviewQuestion('designer1');
// var funCallBack=  function(name)
// {
//   console.log(`Hello, ${name} what do you do?`);
// }
// funCallBack('John');
var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Alex');
interviewQuestion('teacher')('Bob');

//Another example

let add=function (a, b)
{
  return a+b;
}

let multiply= function (a, b)
{
  return a*b;
}

let calc=function (num1,num2,callback)
{
  return callback(num1,num2); //1. add(2,3);  2.multiply(2,3);
}

console.log(calc(2,3,add));  // 1. 5
console.log(calc(2,3,multiply)); //2. 6

//Task: Write function that return string with capitalize the first character of the each word in the string. Put main logic inside getCapitalize function.
//Usage : letterCapitalize("hello world",getCapitalize);
//Output: Hello World
//Usage : letterCapitalize("i am student of the dci",getCapitalize);
//Output: I A Student Of The Dci