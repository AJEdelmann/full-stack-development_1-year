//Exercise 1:  Pyramid Star
//Define function that takes one parameter and it will draw the following pyramid.
//      *
//     ***
//    *****
//   *******
//  ********* 
// 1 step
//      *
//     **
//    ***
//   ****
//  ***** 
//e.g drawPyramid(5);

function drawPyramid(num){
    let res;

    for(let j=0; j<num; j++){
        res = '*'
        //Add the spaces
        for(let k=num-j; k>0; k--){
            res = ' ' + res
        }

        //Add the stars
        for(let i=0; i<j; i++){
            res = res + '**'
        }

        console.log(res)
    }

}

drawPyramid(3)

// function drawPyramid(num){
//     let res;
//     console.log(`I am about to print some stuff`)
//     for(let j=0; j<num; j++){
//         console.log(`This is for line number ${j}`)
//         res = '*'

//         console.log('I am starting the spaces loop')
//         //Add the spaces
//         for(let k=num-j; k>0; k--){
//             console.log(`This is spaces iteration number ${k}`)
//             res = '@' + res
//             console.log(`I have added a space`)
//             console.log(res)
//         }
//         console.log('I am done with the spaces loop')

//         //Add the stars
//         console.log('I am starting the stars loop')
//         for(let i=0; i<j; i++){
//             console.log(`This is stars iteration number ${i}`)
//             res = res + '**'
//             console.log(`I have added two stars`)
//             console.log(res)
//         }
//         console.log('I am done with the stars loop')

//         console.log(res)
//     }

// }

/*
num lines  x spaces   y stars
1st line   6 spaces   1 star
2nd line   5 spaces   3 stars
3rd line   4 spaces   5 stars
4th line   3 spaces   7 stars
5th line   2 spaces   9 stars









*/