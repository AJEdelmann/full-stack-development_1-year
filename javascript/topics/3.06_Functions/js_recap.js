// //Functions

// //////////////////////////////////////////
// //////////////////////////////////////////
// console.log('-----------------------------');
// // Return from function
// function addTwoNumbers(a, b){
//     return  a + b;
// }

// // addTwoNumbers(20, 30)
// let res = addTwoNumbers(20, 20);
// console.log(res);

// //////////////////////////////////////////
// //////////////////////////////////////////
// console.log('-----------------------------');
// // Console.log from function
// function subTwoNumbers(a, b){
//     console.log(a - b);  
// }

// subTwoNumbers(20, 30);
// // console.log(subTwoNumbers(20, 30))

// //////////////////////////////////////////
// //////////////////////////////////////////
// console.log('-----------------------------');
// // Loop function with console.log and return

// function printAll(arr) {
//     console.log('I am about to start a loop')
//     for (let i = 0; i < arr.length; i++) {
//         if(i == 3)
//             return;
//         console.log(arr[i]);
//     }
//     console.log('I am about to finish the loop')
// }

// let nums = [12, 15, 99, 871, 1029];
// printAll(nums)

// //////////////////////////////////////////
// //////////////////////////////////////////
// console.log('-----------------------------');
// // Loop function with console.log and break

// function printAll(arr) {
//     console.log('I am about to start a loop')
//     for (let i = 0; i < arr.length; i++) {
//         if(i == 3)
//             break;
//         console.log(arr[i]);
//     }
//     console.log('I am about to finish the loop')
// }

// let nums = [12, 15, 99, 871, 1029];
// printAll(nums)

// //////////////////////////////////////////
// //////////////////////////////////////////
// console.log('-----------------------------');
// // Loop function with console.log and continue

// function printAll(arr) {
//     console.log('I am about to start a loop')
//     for (let i = 0; i < arr.length; i++) {
//         if(i == 3)
//             continue;
//         console.log(arr[i]);
//     }
//     console.log('I am about to finish the loop')
// }

// let nums = [12, 15, 99, 871, 1029];
// printAll(nums)

// //////////////////////////////////////////
// //////////////////////////////////////////
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// console.log('-----------------------------');
// // Function's arguments

// function babylonize(a, b , c) {
//     // let arguments = [a, b, c]
//     arguments[0] = '120'
//     arguments[1] = arguments[1].toUpperCase()
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
// }

// babylonize(12, 'Babylon', 'lol');


// //////////////////////////////////////////
// //////////////////////////////////////////
// console.log('-----------------------------');
// // Mean grades of classroom

// function calculateMeans(...grades) {
//     //   let mean = (a + b + c + d) / 4
//     //   console.log(mean)
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum = sum + grades[i]
//     }

//     let res = sum / grades.length;
//     console.log(`The sum is ${sum} and the length if ${grades.length}`)
//     console.log(res);
//     // console.log(arguments);
//     // console.log(grades);
// }

// calculateMeans(44, 33, 87, 99)
// calculateMeans(44, 33)
// calculateMeans(44)
// calculateMeans()
// calculateMeans(44, 33, 12, 44, 89, 50, 04, 55)

//////////////////////////////////////////
//////////////////////////////////////////
console.log('-----------------------------');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// Mean grades of classroom with at least 2 numbers

// function calculateMeans(a,b,...grades) {
//     // console.log(arguments);
//     // console.log(grades);
//     //   let mean = (a + b + c + d) / 4
//     //   console.log(mean)
//     if(arguments.length < 2){
//         console.log(`Please give at least two args`)
//         return
//     }

//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }

//     let res = sum / arguments.length;
//     console.log(`The sum is ${sum} and the length if ${arguments.length}`)
//     console.log(res);

// }

// calculateMeans(44, 33, 87, 99)
// calculateMeans(44, 33)
// calculateMeans(44)
// calculateMeans()
// calculateMeans(44, 33, 12, 44, 89, 50, 04, 55)

// String Methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

// let res = 'cabcdefgbc'.lastIndexOf('c', 5);
// console.log(res)
// Math Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// let num = 5;
// console.log(Math.pow(num, 3))

// Math.pow = function (num, i) {
//     console.log('I am poaaaawww')
// } 

// console.log(Math.pow(num, 3))

// Array Methods