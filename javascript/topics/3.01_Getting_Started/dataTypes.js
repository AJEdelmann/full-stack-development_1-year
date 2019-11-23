/*  Data Types 
Strings (represents textual data)
Number (numbers of any kind)
Boolean (logical type)
Undefined
Null 
Symbol
*/

// Data Type : String

let str="Hello";
let str1='Single quote are ok too';
console.log(str, str1);   //Hello Single quote are ok too
let name="John";

console.log(`Hello, ${name}`);  //Hello, John

console.log(`the result is ${1+2}`);  //the result is 3

let myName="Ashok 1234567890";  // A=0 s=1 h=2 o=3 k=4
console.log(myName[9],myName[20]);  //4 undefined
console.log(myName.length);  // 16
console.log(myName[5]); //space


// Data Type : Numbers

console.log(1/0);  //Infinity
console.log("this is number"/2);   // NaN
let currentYear=2019;
console.log(currentYear); // 2019
console.log(currentYear[3]);   //undefined
console.log(currentYear.length); //undefined

let n=12.344;
console.log(n);  //12.344

let myNumber=1234e17;
console.log(myNumber);  //123400000000000000000

let myNumber1= 1234e-3;
console.log(myNumber1); //1.234

let myNumber2= 1234e-5; 
console.log(myNumber2); //0.01234

let newNum=20;
console.log(newNum * Infinity); // Infinity
console.log(newNum * -Infinity); // -Infinity

let country="Germany";
console.log(country/newNum);  //NaN

//concatenation
let concat1="Hello";
let concat2="World";
let concat3=concat1 + concat2;
console.log(concat3);
console.log(concat1 + " " + concat2 + "!");

//concatenate numbers and strings
let num1=20;
let num2=20;
let num3="hello";
let num4=num1 + num2 + num3;
console.log(num4); //40hello

let num5="hello";
let num6=num5+num1+num2;
console.log(num6); //hello2020
let num7=num5+(num1+num2);
console.log(num7); //hello40

//Data Type : Boolean
let isGreater = 4>1;
console.log(isGreater);

let isDay=true;
console.log(isDay);

// Data Type : Object

let myObject= {
                 key1: "Value",
                 key2: 12345,
                 key3: {
                    newObject: "hello",
                 }
              };

console.log(myObject);

//personal information object

var infoObject= {
        firstName:"Ashok",
        lastName:"Dudhat",
        address:{
            streetName: "septimer str 111",
            plz: 12345,
            city:"Berlin",
        }
};

console.log(infoObject);
console.log(infoObject.address.city);
console.log(infoObject.lastName);

//typeof

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof infoObject);
console.log(typeof infoObject.firstName);
console.log(typeof infoObject.address.plz);
console.log(typeof isDay);