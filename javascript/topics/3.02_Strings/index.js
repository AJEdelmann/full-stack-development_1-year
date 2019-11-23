// let name = 'Vasilis';               // String
// let lastName = "Psychas";           // String
// var fullName = 'Vasilis Psychas';  // String
// var age = 18

// const myFullName = name + ' ' + lastName;
// const myFullName1 = name + lastName;
// const myFullName2 = `${name} ${lastName}`

// console.log(myFullName);
// console.log(myFullName1);
// console.log(myFullName2);

// var smt = 'Hello ' + name + '! ' + 'Your age is: ' + age + '.';
// var smt = `Hello Vasilis! You age is 18.`
// var smt = `Hello ${name}! You age is ${age}.`
// console.log(smt)


// // var vr = typeof smt
// // console.log(vr)

// // console.log(typeof smt)

// // console.log(smt.length)

// var l = smt.length
// console.log(l)

// console.log(age)    // 18
// age = age + 1;      // 19 
// age++               /* 20 */
// age--               // 19
// age = age + 20      // 39
// age = age / 20       // 1,95
// age = age * 8       // 15,6 
// age+=5              // 20,6
// age-=.6             // 20
// age = age % 7       // mod give the remain of the prefetct division
// console.log(age)


// name = name + ' P.'
// name = `${name} P.`
// console.log(name)



//Strings 

let poem = 'To be or not to be.'
console.log(`The original poem: ${poem}`);
console.log('========================')

// toUpperCase
var steve = poem.toUpperCase()
console.log(`Poem Uppercased in the face: ${steve}`)

// toLowerCase
steve = poem.toLowerCase()
console.log(`Poem lowercased in the face: ${steve}`)

// endWith
let result = poem.endsWith('.');
console.log(`This poems ends with '.': ${result}`)


// slice

result = poem.slice(0,15);
console.log(`Sliced poem: ${result}`)