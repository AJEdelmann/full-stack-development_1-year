//Implicit & Explicit Coercion

var x1=Boolean(0);
console.log(x1);
var x2="12345";
console.log(String(x2));
var x3="10";
console.log(Number(x3));

var x4=toString(10); //obsolute in javascript
console.log(x4);

//operators
var x=1, y=2, z=1;
console.log(x==y==z); 

//Math Floor Method
console.log(Math.floor(1.6)); //1
console.log(Math.floor(3.5)); //3

//Math Round Method
console.log(Math.round(2.5)); //3
console.log(Math.round(2.4)); //2
console.log(Math.round(-2.49)); // -2 
console.log(Math.round(-2.70)); // -3

//Math Ceil Method
console.log(Math.ceil(0.60)); //1
console.log(Math.ceil(0.40)); //1
console.log(Math.ceil(0.30)); //1
console.log(Math.ceil(0.01)); //1
console.log(Math.ceil(1.60)); //2
console.log(Math.ceil(5.1)); //6
console.log(Math.ceil(-5.1)); // -5

//conversation
console.log(parseFloat("123.456").toFixed(2));
var num=123.34567;
console.log(typeof num);
var strNum=num.toFixed(2);
console.log(typeof(strNum));
console.log(typeof(parseInt(strNum)));