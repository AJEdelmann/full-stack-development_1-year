// let age = 11;


// if(age == 30)
//     console.log('qwefiugawe,isghj')

// if (age < 10) {
//     console.log('I am a kiddo!')
// } else if (age > 10 && age < 40){
//     console.log('i am not a kiddo for sure!')
// } else if (age > 50) {
//     console.log('I have life figured out')
// } else console.log('You are something else!')


// switch (true) {
//     case (age > 0 && age < 10):
//         console.log('I am a kiddo!');
//         break;
//     case (age > 10 && age < 40):
//         console.log('i am not a kiddo for sure!');
//         break;
//     case (age > 40 && age < 50 ):
//         console.log('I have life figured out');
//         break;
//     default:
//        console.log('You are something else!');
// }

// switch(age) {
//     case 10:
//         console.log('You are 10 years old')
//         break
//     case 20:
//         console.log('You are 20 years old')
//         break
//     case 50:
//         console.log('You are 50 years old')
//         break
//     default:
//         console.log(`You are ${age}`)
// }

let age = 11;

do {
    if(age%5 == 0){
        console.log(`You age is ${age}.`)
    }
    age++
} while (age < 50)