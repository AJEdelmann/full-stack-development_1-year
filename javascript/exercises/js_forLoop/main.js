// 12345678910
// ---------------

let res = ''
for (let i = 0; i <= 10; i++) {
    res = res + i    
}
console.log(res)

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// ----------------

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// *
// **
// ***
// ****
// *****
// ----------------

let res1 = ''
for (let i = 0; i <= 10; i++) {
    res1 = res1 + '*' 
    console.log(res1)
}

// This is iteration number 1
// This is iteration number 2
// This is iteration number 3
// This is iteration number 4
// This is iteration number 5
// This is iteration number 6
// …….
// This is iteration number 20
// ----------------

for (let i = 0; i <= 20; i++) {
    console.log(`This is iteration number ${i}`)
}
// Print all the odd numbers between 0 and 33
// ----------------

for (let i = 0; i <= 33; i++) {
    if(i%2 == 0)
        console.log(i)
}
// Print all the even numbers between 0 and 33
// ----------------

for (let i = 0; i <= 33; i++) {
    if(i%2 == 1)
        console.log(i)
}

// Print all the numbers that are perfectly divided by 6 from 0 till 100
// ----------------

for (let i = 0; i <= 100; i++) {
    if(i%6 == 0)
        console.log(i)
}
// BA-BA-BA-BA-BA-BY-LON (5 BAs)
// ----------------

let s1 = 'BA-'
let s2 = 'BY-'
let s3 = 'LON'
let res3 = ''
for (let i = 0; i <= 10; i++) {
    if(i<9)
        res3 = res3 + s1; 
    else if (i==9)
        res3 = res3 + s2; 
    else res3 = res3 + s3; 

}
console.log(res3)
// I am a normal for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a normal for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a normal for loop
// I am a nested a for loop
// I am a nested a for loop
// I am a nested a for loop

// -----------------

for (let i = 0; i <= 2; i++) {
    console.log(`I am a normal for loop`)
    for (let i = 0; i <= 2; i++) {
        console.log(`I am a nested for loop`)
    }
}

// *
// *!
// *!!
// *!!!
// *!!!*
// *!!!*!
// *!!!*!!
// *!!!*!!!
// *!!!*!!!*
// *!!!*!!!*!
// *!!!*!!!*!!
// *!!!*!!!*!!!
// -------------------

let res4 = ''
for (let i = 0; i <= 2; i++) {
    res4 = res4 + '*'
    console.log(res4)
    for (let i = 0; i <= 2; i++) {
        res4 = res4 + '!'
        console.log(res4)
    }
}

// 2
// 901
// 902
// 903
// 3
// 904
// 905
// 906
// 4
// 907
// 908
// 909
// ----------------

let s4 = 1;
let s5 = 900;
for (let i = 0; i <= 2; i++) {
    s4++
    console.log(s4)
    for (let i = 0; i <= 2; i++) {
        s5++
        console.log(s5)
    }
}

// *****
// ****
// ***
// **
// *
let res5 = ''

for (let i = 5; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        res5 = res5 + '*'
    }
    console.log(res5)
    res5 = ''
}
