// for(let i = 0; i<100; i++) {
//     // the code block that will run in the above check is true
//     console.log(`This is loop number ${i}`)
// }

// VasilisVasilisVasilisVasilisVasilis
// let name = 'Vasilis';
// for(let i = 0; i<3; i++) {
//     console.log(`This is loop number ${i}`)
//     name = name + name
//     console.log(name)
//     console.log(`This is the end of loop number ${i}`)
// }

// let amount = 2;

// for (let i=0; i<5; i++) {
//     console.log(`This is loop number ${i}`)
//     amount = amount * amount
//     console.log(amount);
//     console.log(`This is the end of loop number ${i}`)
// }

// let amount = 2;

// for (let i=5; i>0; i--) {
//     console.log(`This is loop number ${i}`)
//     amount = amount * amount
//     console.log(amount);
//     console.log(`This is the end of loop number ${i}`)
// }


// for (let i=1; i<100; i++) {
//     if (i%17 == 0){
//         console.log(`The first number that is being perfectly divided by 17 is : ${i}`)
//         break
//     } else {
//         console.log(`${i} is not cool`)
//     }
// }

let string = ''
for(let i = 0; i<=3; i++) {
    string = string + '*';
    console.log(string)
    for(let j = 0; j<=2; j++) {
        string = string + '-';
        console.log(string)
    }
}
