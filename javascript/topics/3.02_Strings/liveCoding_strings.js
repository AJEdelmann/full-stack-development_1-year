//Let check some strings methods


var txt1 = 'apple, banana, kiwi';


// 1. Slice Method : string.slice(start, end)

/*
The slice() method extracts parts of a string and returns the extracted parts in a new string.

Use the start and end parameters to specify the part of the string you want to extract.

The first character has the position 0, the second has position 1, and so on.

Tip: Use a negative number to select from the end of the string.
*/
var result1 = txt1.slice(15, 19);

console.log(result1);

var result2 = txt1.slice(15);
console.log(result2);

var result3 = txt1.slice(-4);
console.log(result3);

// 2. substr Method : string.substr(start, length)
/*
The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).

Note: The substr() method does not change the original string.
*/

var result4 = txt1.substr(7, 6);
console.log(result4);


//3. replace method : string.replace(searchvalue, newvalue)

/*

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

*/

var result5 = txt1.replace('kiwi', 'orange');
console.log(result5);

//4. toUpperCase method : string.toUpperCase()

/*
The toUpperCase() method converts a string to uppercase letters.

Note: The toUpperCase() method does not change the original string.
*/

var result6 = txt1.toUpperCase();
console.log(result6);


//5. toLowerCase method : string.toLowerCase()

/*
The toLowerCase() method converts a string to lowercase letters.

Note: The toLowerCase() method does not change the original string.

*/

var result7 = txt1.toLowerCase();
console.log(result7);

// 6. concat Method : string.concat(string1, string2, ..., stringX)
/*
The concat() method is used to join two or more strings.

This method does not change the existing strings, but returns a new string containing the text of the joined strings.
*/


var firstName = 'Bob', secondName = 'Jones';
var result8 = firstName.concat(secondName);
console.log(result8);
console.log(firstName+secondName);


var result8a = 'Hallo'.concat(' ', 'World');
console.log(result8a);

var result8b = 'Hallo'.concat(' ', txt1.slice(0,5));
console.log(result8b);


// 7. charAt Method : string.charAt(index)
/*

The charAt() method returns the character at the specified index in a string.

The index of the first character is 0, the second character is 1, and so on.

*/

var str1 = 'Hallo World';
var result9 = str1.charAt(0);
console.log(result9);

var result10 = str1[0];
console.log(result10);

var str2 = ['H', 'a', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];

console.log(str1);
console.log(str2);

var str3 = 'a,b,c,d,e';
console.log(str3);

// 8. split Method : string.split(separator, limit)
/*

The split() method is used to split a string into an array of substrings, and returns the new array.

Tip: If an empty string ("") is used as the separator, the string is split between each character.

*/

var arrStr3 = str3.split(',');
q(arrStr3);

var str4 = 's,d,g,j;a,d,e:c';
var arrStr4 = str4.split(';');
console.log(arrStr4);

var str5 = 's,d,g,j,a,D,e,c';
var arrStr5 = str5.split(',').sort();
console.log(arrStr5);

var str6 = 'schulz ,schulzb,mueller,meier,schmidt,fischer,von bismarck';
var arrStr6 = str6.split(',').sort();
console.log(arrStr6);

// 8. indexOf Method : string.indexOf(searchvalue, start)
/*

The indexOf() method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

*/

var str8 = 'hallo sun';
var result11 = str8.indexOf('sun');
console.log(result11);

var str9 = 'hallo world';
var result12 = str9.indexOf('sun');
console.log(result12);

var str10 = 's,x,g,j,a,o,e,c';
var arrStr10 = str10.split(',');
console.log(arrStr10);

var str11 = arrStr10.join(';');
console.log('joined together back as ' + str11);


var str12 = 'abcdefghijklmnopqrstuvxwz01234567890';
var arrStr12 = str12.split('');
console.log(arrStr12);

// 9. includes () :  string.includes(searchvalue, start)
/*

The includes() method determines whether a string contains the characters of a specified string.

This method returns true if the string contains the characters, and false if not.

Note: The includes() method is case sensitive.

*/

var str = "Hello world, welcome to the universe.";
var n = str.includes("world");

//10. trim() : string.trim()

/*

The trim() method removes whitespace from both sides of a string.

Note: The trim() method does not change the original string.

*/

var str = "       Hello World!        ";
console.log(str.trim());



var mailTemplate = `
    Hallo $USERNAME,
    Thank you for your registration at MyService.com.
    Your account balance is $ACCOUNT_BALANC.
    Please hit the following activation link in order
    to complete your registration at MyService.com:

    https://myservice.com/activation/$ACTIVATIONCODE

    Have Fun,
    Your MyService.com - Team
`;
// task:
// generate an email based on this mailTemplate and
// print it out.
// generate it for the user "alex" who has 100$ and 
// whose activationlink will be generated with the
// activationcode function and has 20 characters
// hint: use the replace function
var mail0 = mailTemplate.replace('$USERNAME', 'alex');
console.log(mail0);

var mail1 = mailTemplate.replace('$ACCOUNT_BALANCE', '$100');
console.log(mail1);

// Piping

var mailFinal2 = mailTemplate.replace('$USERNAME', 'alex')                           .replace('$ACCOUNT_BALANCE', '$100')                           .replace('$ACTIVATIONCODE', '12345');

console.log(mailFinal2);


var pipeMe = 'Hallo World';
var finalStr = pipeMe.replace('Hallo', 'Hi').replace('Hi', 'Good morning').toUpperCase().concat(', students').toLowerCase();

console.log(finalStr);





