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

const showMessage = function() {
  console.log("I am function expressoin");
};

showMessage();

let a=10;
let b=a;
console.log(b);

//this will not work
//const copyFunc=showMessage();
//below will work, as it is simple variable assignment
const copyFunc=showMessage;

copyFunc();

var func1= function() {
  console.log("I am function expressoin - func1");
};

func1();

var func2= function() {
  console.log("I am function expressoin - func2");
};


func1=func2;
func1();

func1=func1;

func1();

//define with parameters
const showMessageWithParam = function(message) {
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
let sum =(a,b) => a+b;
console.log(sum(4,5));

//Parameters vs Arguments

const param1=true;
const param2=false;

function twoParams(p1,p2){
  console.log(p1,p2);
}

twoParams(param2,param1);

function showGreeting(from,text){
  console.log(from +':' + text);
}
showGreeting('Ann','Hello');
showGreeting('Ann');

function showGreetingDefaultValue(from,text="no text given"){
  console.log(from +':' + text);
}
showGreetingDefaultValue('Ann');

//define 3 parameters function
function aboutMe(firstName,lastName,work)
{
  console.log('My name is '+ firstName + " " + lastName + " and I am a "+ work);
}

aboutMe('ali','mohammed', 'IT engineer');

//function with two default values of the parameters
function personInfo(firstName, yearOfBirth,lastName="Smith",nationality="germany")
{
  //Part 1
   //console.log(firstName + " " + lastName + " " + yearOfBirth + " " + nationality);

   //Part 2
   this.firstName1=firstName;
   this.lastName1=lastName;
   this.yearOfBirth1=yearOfBirth;
   this.nationality1=nationality;
   console.log(this.firstName1 + " " + this.lastName1 + " " + this.yearOfBirth1 + " " + this.nationality1);

}

personInfo('John',1990);
personInfo('John',1990,'Klass');
personInfo('John',1990,'Klass','USA');


//Function Return
function test(){  }
console.log(test());

function test1(){return true;}
console.log(test1());

function  sumWithReturn(a,b)
{
  return a+b;
}
let result=sumWithReturn(1,2);
console.log(result);

function doNothing()
{
  /* empty */
}
console.log(doNothing()===undefined);

function doNothing1()
{
  return;
}
console.log(doNothing1()===undefined);

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