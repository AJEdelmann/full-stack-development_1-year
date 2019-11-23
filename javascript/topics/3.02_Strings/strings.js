//String Methods
/*
toUpperCase
toLowerCase
Slice
Split
length
endsWith

*/

var txt1= "apple,banana, kiwi";


//Substr Method : string.substr(start,length);

var result1=txt1.substr(7,6);
console.log(`substr method : txt1.substr(7,6) => ${result1}`);

// concat Method : string.concat(string1,string2, ...stringx);
var firstName='Bob', secondName='Jones';
var resultName=firstName.concat(secondName);
console.log(`concat method : firstName.concat(secondName) => ${resultName}`);

console.log(`+ method for join string: firstName + secondName ==> ${firstName + secondName}`);


// chatAt method : string.charAt(index)

var str1="Hello world";
console.log(str1.charAt(0));
console.log(str1.charAt(6)); //W
console.log(str1[6]); //W

var str2 = ['H', 'a', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
console.log(str2);

var str3="a,b,c,d,e";
console.log(str3);

// indexOf Method : string.indexOf(searchValue,start)

var str4="hallo sun";
console.log(str4.indexOf("sun"));

// includes () : string.includes(searchValue,start) - Case Sensitive

var str5="Hello World,welcome to the universe";
console.log(str5.includes("world"));

// trim() method :  remove white spaces
var str6="             Hello World!           ";
console.log(str6.trim());


// replace method : string.replace(searchValue, newValue);
var result2=txt1.replace('kiwi','orange');
console.log(result2);





