// Let's make a function that concats 'bla' 5 times to a string
// function concat(str) {
//     for(var i=0; i<5; i++){
//         str = str + 'bla'
//     }
//     console.log(str)
// }

// function concat(str){
//     str = str + 'bla'
//     console.log(str)

//     if(str.length > 22){
//         return;
//     }

//     concat(str);
// }

// concat('babylon')


// Make a recursive function that takes a number n and prints all the number from 0 till n

function printNumbers(n){
    // // body
    // console.log(n)
    // // termination
    // if(n==0) return
    // // recursion
    // printNumbers(n-1)
    var cnt = 20;
    console.log(cnt - n);
    if(n == 0) return;

    printNumbers(n - 1)
}

printNumbers(40)


function printNumbersBa(n, cnt){
    console.log(cnt - n);
    if(n == 0) return;

    printNumbersBa(n - 1, cnt)
}
printNumbersBa(20, 20)
printNumbersBa(40, 40)