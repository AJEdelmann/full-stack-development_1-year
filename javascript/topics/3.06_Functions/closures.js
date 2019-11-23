// IIFE vs SIAF
// Immediately Invoked Function Expression vs Self Invoked Anonymous Functions

// function printSmt(str) {
//     console.log(str)
// }

// printSmt('Ba by lo nia')

// (function () {
//     console.log('Priiiiiiint')
// })()

// (function () {
//     console.log("IIFE!");
// })();
 
// //Another style
// (function () {
//     console.log("IIFE!");
// }());
 
// //passing in variables
// (function ($) {
//     console.log('jQuery:', $);
// })(jQuery);


/************************************************/
/************************************************/
/*****************  CLOSURES  *******************/
/************************************************/
/************************************************/
//Vague definition of a closure: A function that contains at least one variable, and one nested scope

function outer() {
    var b = 10
    var c = 100
    function inner(){
        var a = 20
        console.log(`a=${a} b=${b}`)
        a++;
        b++;
    }

    return inner;
}


var X = outer()  // X equals to whatever outer returns x = inner()
var Y = outer()  // X equals to whatever outer returns x = inner()

console.log(typeof(X)) // I am a function

X() // inner()
X()
X()

Y()


