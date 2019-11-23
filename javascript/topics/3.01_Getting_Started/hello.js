console.log("Hello,world");

//1. Console log a line of text eg. "this is an exercise in console logging". (do not forget quotation marks). 

console.log("this is an exercise in console logging");

//2. Declare a variable and give your variable the following value: "This is the value.". Console log your **variable**. 

let firstVar="This is the value";
console.log(firstVar);

//3.Declare a variable called firstName and assign your first name to that variable. Do they same with your last name. Console log both variables. NOTE: When console logging two variables, separate the variables with a comma (,) in the console log e.g. console.log(variable1, variable2);

var firstName="Ashok";
var lastName="Dudhat";

console.log(firstName,lastName);

//4. Make a profile of someone's information. Store all the information in variables eg. name, city, job etc. (five variables total) Console log the variables

var name="Ashok Dudhat";
var city="Berlin";
var job="Tech";
var hobbies="xyz, abc, tech";
const languages="javascript, html, css";

console.log(name, city, job, hobbies,languages,firstName);

//5.Print the sentence "John Smith is a 43 year old teacher who lives in Berlin" using variables (where possible) and text. **you can combine variables with text in the console by using the plus symbol (+) e.g. console.log("this is a " + variable);**

//clear confusion about + and ,
console.log(firstName,lastName);
console.log(firstName+lastName);

var intro="John Smith is a 43 year old teacher who lives in Berlin";
console.log("this is a " + intro);