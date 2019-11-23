// Flo B
// Write a recursive function that prints all numbers from 0 till 100
function countingUpwardsFromXToZ(x, z) {
    if (x == z + 1) 
        return;
    else console.log(x);
    return countingUpwardsFromXToZ(x + 1,z)
}
// countingUpwardsFromXToZ(0, 10);
// Write a recursive function that prints all odd numbers 100 till 0
function oddNumberFromNDownwardstoZ(n, z) {
    if (n == z) return;
    //if (n % 2 != 0) console.log(n);
    if ((n - 1) % 2 == 0) console.log(n);
    return oddNumberFromNDownwardstoZ(n - 1,z);
}
//oddNumberFromNDownwardstoZ(20, 0);
// Write a recursive function that takes a number and returns the sum of all numbers from 1 up to the number passed in.
// 5 (1 + 2 + 3 + 4 + 5 = 15)
function sumOfNumbersFromOneToN(n) {
    if (n == 1) return 1;
    return n + sumOfNumbersFromOneToN(n - 1);
}
// console.log(sumOfNumbersFromOneToN(5));
// Write a recursive function that calculates the factorial of a number. Factorial of 5 is 5*4*3*2*1 = 120
function fakultaet(n) {
    if (n <= 1) return n;
    return n * fakultaet(n - 1);
}
// console.log(fakultaet(5));
// Write a recursive function that raises a number x to the power of y
// x= 5 y= 3 x^y = y times n in this case 5 * 5 * 5
function numberXToThePowerOfY(x, y) {
    if (y == 0) return 1;
    return x * numberXToThePowerOfY(x, y - 1);
}
// console.log(numberXToThePowerOfY(5, 3));
// Write a recursive function that reverses a string
// Taken from the article . . .
function reverseAString(str) {
    if (str === '') return '';
    return reverseAString(str.substr(1)) + str[0];
}
// console.log(reverseAString('cat'));

// Erwan - Function that reverses a string
function revstr(strr) {
    if (strr.length === 0) return ""
    else {
        // console.log(strr.substr(0,strr.length-1))   
        return (strr[strr.length-1] +  revstr(strr.substr(0,strr.length-1)))
    }
}