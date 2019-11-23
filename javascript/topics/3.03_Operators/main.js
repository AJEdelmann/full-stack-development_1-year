// Escaping special characters
console.log(`Hi there my name is D\`Angelo`)
console.log("Hi there my name is D\"Angelo")


// The ternary operator

let sunny = false;
let temp = !sunny ? 12 : 35
console.log(`Is it sunny? : ${sunny}`)
console.log(`What's the temp? : ${temp}`)

// Mathematical operators

let myAge = 30;
let vladAge = 30;

console.log(`Am i younger than Vlad: ${myAge < vladAge}`)
console.log(`Am i younger or the same age as Vlad: ${myAge <= vladAge}`)
console.log(`Am i the same age as Vlad: ${myAge === vladAge}`)
console.log(`Am i the same age as Vlad: ${myAge !== vladAge}`)

let cloudy = false;
console.log(!cloudy)


// Logical operators

let password = false;
let username = true;
let login = (password && username)
console.log(`Can i login? : ${login}`)


let age = 18
let validId = true
let blackLeather = true

let enterDaKlab = (age >= 18) && (validId) && blackLeather
console.log(`Can i enter mr bounca? : ${enterDaKlab}`)


let wig = false
let id = false
let enterTheClub = wig || id

console.log(`Can i enter the wig club mr bounca? : ${enterTheClub}`)

let enterTheNewClub = ((age >= 18) && validId) || wig;

let enterTheNEEEEEWClub = (validId && blackLeather) ? true : false;


let num = 7.8;
console.log(Math.floor(num))
console.log(Math.ceil(num))

let a = 25
a++
console.log(a)
