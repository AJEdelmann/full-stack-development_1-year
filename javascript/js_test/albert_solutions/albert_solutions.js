// 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array. Do not use a loop.
const largeThanTen = arr => {
    let res = arr.filter(el => el > 10);
    return res
}
console.log(largeThanTen([12, 7, 6, 65, 11, 10]));
console.log("============");

// 2. Validation
// Come up with a new way to validate a pin code with a simple function called validatePin that returns true (for a valid pin code) or false (for an invalid pin code).
// Here are the rules for a valid password:
// The pin code must consist of only numbers
// The pin code must be 4 digits long
// The pin code should have at least two different digits represented
// The pin code's last digit should be even
// The pin code should add up to at least 5
const validatePin = pinCode => {
    let arr = pinCode.toString().split("");
    let sum = arr.reduce((total, num) => total + Number(num), 0);
    if (typeof pinCode !== "number") return false; //first rule
    else if (pinCode.toString().length !== 4) return false; //second rule
    // else if() return false // #########third rule is missing!!!!!!!!!!###########
    else if ((pinCode - 1) % 2 === 0) return false; //fourth rule
    else if (sum < 5) return false; //fifth rule
    else return true;
}
console.log(validatePin(1112)); //true
console.log(validatePin(1994)); //true
console.log(validatePin("1c24")); //false - is not a number
console.log(validatePin(12344)); //false - five digit pin code
console.log(validatePin(1235)); //false - last digit is odd
console.log(validatePin(1110)); //false - sum less than 5
console.log("============");

// 4. Events
// Each event below has a different turnout. Sort the array of objects based on which day of the week had the highest turnout. Highest turnout -> lowest turnout.
let events = [{
        weekDay: 'Monday',
        turnout: 20
    },
    {
        weekDay: 'Tuesday',
        turnout: 23
    },
    {
        weekDay: 'Wednesday',
        turnout: 61
    },
    {
        weekDay: 'Thursday',
        turnout: 19
    },
    {
        weekDay: 'Friday',
        turnout: 30
    },
]
const highestTurnout = arr => {
    let res = arr.sort((a, b) => b.turnout - a.turnout);
    return res;
}
console.log(highestTurnout(events));
console.log("============");

// 5. Return Squared Odds
// Complete this without using a loop. Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers.
const squareNums = arr => {
    let res = arr.map(el => Math.sqrt(el)).filter(el => el % 2 !== 0);
    return res
}
console.log(squareNums([1, 2, 3, 4, 5]));
console.log("============");

// 6. 10,000
// Create a (small) game!
// Each player has 6 dice. (Each dice has the possibility to roll from 1-6).
// Each player rolls all 6 dice during each turn and the player's score is added to their individual total.
// The first player to reach 10,000 wins.
// Example of expected output: "Player 1: 9984, Player 2: 10,002 - Player 2 wins!"


const game = () => {
    var player1 = 0;
    var player2 = 0;
    for (i = 0; i < 10000; i++) {
        player1 += sixDices();
        player2 += sixDices();
        if (player1 >= 10000 && player2 < 10000) {
            return `Player 1: ${player1}, Player 2: ${player2} - Player 1 wins`
        } else if (player1 < 10000 && player2 >= 10000) {
            return `Player 1: ${player1}, Player 2: ${player2} - Player 2 wins`
        }
    }
}

let sixDices = () => {
    return diceOne() + diceOne() + diceOne() + diceOne() + diceOne() + diceOne();
}

const diceOne = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(game());
console.log("============");

// 7. World Cup
// How long has it been since Germany won the world cup? Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014.
const howManyDays = (date1, date2) => {
    const timeDiff = (new Date(date2)) - (new Date(date1)),
        days = timeDiff / (1000 * 60 * 60 * 24);
    return days
}
console.log(howManyDays(new Date('July 13, 2014'), new Date('September 11, 2019'))); // 1886 days
console.log("============");

// 8. Working Hours
// Calculate how many hours (total) this person worked in the week.
// Note: start is always morning time, end is always afternoon.
const hourTracking = [{
        day: 'Monday',
        start: 8,
        end: 17
    }, //9
    {
        day: 'Tuesday',
        start: 9,
        end: 15
    }, //6
    {
        day: 'Wednesday',
        start: 10,
        end: 18
    }, //8
    {
        day: 'Thursday',
        start: 7,
        end: 14
    }, //7
    {
        day: 'Friday',
        start: 6,
        end: 12
    }, //6 => total of 36 (Bingo!)
];
const totalWorkedHours = arr => {
    let res = arr.reduce((acc, hour) => acc + (hour.end - hour.start), 0);
    return res
}
console.log(totalWorkedHours(hourTracking));
console.log("============");

// 9. Callback
// Part 1: Given the code below, write a function with a callback. The function should return a new array with each element calculated to the power of 2.
function mapping(arr) {
    const powerOfTwo = arr.map(val => Math.pow(val, 2));
    const squareRoot = powerOfTwo.map(el => Math.sqrt(el));
    return [powerOfTwo, squareRoot];
}
console.log(mapping([1, 2, 3, 4, 5]));
console.log("============");
// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

// Part 2: Create another variable, call the mapping function again, but now change the callback function to return an array of the square root of each element.
// I created const squareRoot inside the function

// 10. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
]

const array2D = arr => {
    let str = arr.toString();
    return [str];
}
console.log(array2D(board));