/////////////////////////////////////////
////////////////FOREACH//////////////////
/////////////////////////////////////////

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
console.log('------------------------')

function doubleValues(arr) {
    let res = [];
    arr.forEach(element => {
        res.push(element * 2);
    });

    console.log(res);
}

doubleValues([1, 2, 3]);

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
console.log('------------------------')

onlyEvenValues = (arr) => {
    let res = [];
    arr.forEach(el => {
        if(el%2 == 0)
            res.push(el);
    });

    console.log(res)
}

onlyEvenValues([5,1,2,3,10])
onlyEvenValues([1,2,3])


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
console.log('------------------------')

showFirstAndLast = (arr) => {
    let res = [];
    arr.forEach(el => {
        res.push(el.charAt(0) + el.charAt(el.length-1))
    });

    console.log(res)
}

showFirstAndLast(['hi', 'goodbye', 'smile'])

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
console.log('------------------------')

addKeyAndValue = (arr, key, value) => {
    arr.forEach(el => {
        el[key] = value;
    });

    console.log(arr)
};

addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
console.log('------------------------')

vowelCount = (phrase) => {
    let arr = phrase.toLowerCase().split('');
    let res = {};
    let myVowels = 'oieau';

    arr.forEach(letter => {
        if(myVowels.indexOf(letter) !== -1){
            if(res[letter])
                res[letter]++;
            else res[letter] = 1;
        }
    });

    console.log(res);
};

vowelCount('Elie')
//////////////////////////

// let ob = { a: 2, b:3 };
// let key = 'a';
// console.log(ob.a)
// console.log(ob['a'])
// console.log(ob[key])
/////////////////////////////////////////
/////////////////REDUCE//////////////////
/////////////////////////////////////////

// Write a function that will take as an input an array of words and it will concatenate all the words in one.
// var arr = ['hi', 'myname', 'is', 'slim', 'shady']
// joinAll(arr); 
// output: himynameisslimshady 
var arr = ['hi', 'myname', 'is', 'slim', 'shady']

const myReducerFunction = (acc, cur) => acc + cur;

joinAll = (arr) => {
    return arr.reduce(myReducerFunction);
}

console.log(joinAll(arr)); 


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Turn an array of numbers into a total of all the numbers
var nums = [1, 5, 77, 33]
// call: addAll(arr); 
// output: 116 

const myReducer = (acc, cur) => acc + cur;

addAll = (arr) => {
    return arr.reduce(myReducer, 1000);
}

console.log(addAll(nums));

console.log('------------------------')

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Figure out how many people voted
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];


// function ourReducerFunction(acc, value){
//     if(value.voted == true)
//         return acc + 1;
//     else return acc;
// }

// function whoVoted(arr){
//     return arr.reduce(ourReducerFunction, 0)
// }
///////////////////////////////////////
// function whoVoted(arr){
//     return arr.reduce((acc, value) => {
//         if(value.voted == true)
//             return acc + 1;
//         else return acc;  
//     }, 0)
// }
//////////////////////////////////////
function whoVoted(arr) {
    return arr.reduce(function (acc, value) {
        if (value.voted)
            return acc + 1;
        else return acc;
    }, 0)
}
console.log(whoVoted(voters));



////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const myWishListReducer = (acc, obj) => acc + obj.price

shoppingSpree = (arr) => {
    return arr.reduce(myWishListReducer, 0)
};

console.log(shoppingSpree(wishlist)); 
// output: 227005
console.log('------------------------')



////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
//Given an array of arrays, flatten them into a single array
// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// call: flatten(arrays); 
// output: ["1", "2", "3", true, 4, 5, 6];

var nestedDog = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const myArrayReducer = (acc, val) => acc.concat(val)

flatten = (arr) => {
    return arr.reduce(myArrayReducer);
}

console.log(flatten(nestedDog));
console.log('------------------------')

/////////////////////////////////////////
//////////////////MAP////////////////////
/////////////////////////////////////////

// Make an array of numbers that are doubles of the first array
// call: doubleNumbers([2, 5, 100]); 
// output: [4, 10, 200]
doubleNumbers = (arr) => {
    // let res = arr.map(el => el*2 );
    // return res;
    return arr.map(el => el*2 )
};

console.log(doubleNumbers([2, 5, 100]))
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Take an array of numbers and make them strings
// call: numsToStrings([2, 5, 100]); 
// output: ['2', '5', '100']

numsToStrings = (arr) => {
    return arr.map(el => el.toString() )
};

console.log(numsToStrings([2, 5, 100]))
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Capitalize each of an array of names
// call: capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 
// output: ["John", "Jacob", "Jingleheimer", "Schmidt"]

capitalizeNames = (arr) => {
    return arr.map(el => {
        let res = el[0].toUpperCase() + el.substring(1).toLowerCase();
        return res;
    } )
};

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))
console.log('------------------------')

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Make an array of strings of the names
let rawData = [
    {
        name: {
            lastName: 'lol'
        },
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16  
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 

takesNames = (arr) => {
    let res = arr.map(el => {
        return el.name
    });
    return res;
};

console.log(takesNames(rawData));
console.log('------------------------')

// call: takeNames(arr);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Using the same array above as input, write a function that returns an array of strings of the names saying whether or not they can go to The Matrix. In order to go to the Matrix you need to be at least 18
// call: whoCanGo(arr)
// output: 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

let celebs = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

whoCanGo = (arr) => {
    let res = arr.map((element) => {
        if(element.age >= 18)
            return `${element.name} can go to the Matrix`;
        else return `${element.name} is under age`;

    });

    console.log(res);
    return res;
}

whoCanGo(celebs)
console.log('------------------------')

/////////////////////////////////////////
////////////////FILTER///////////////////
/////////////////////////////////////////

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// call: fiveAndGreaterOnly([3, 6, 8, 2]); 
// output: [6, 8]

fiveAndGreaterOnly = (arr) => {
    return arr.filter(el => el > 5);
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]))
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Given an array of numbers, return a new array that only includes the even numbers.
// call: onlyEven([3, 6, 8, 2]); 
// output: [6, 8, 2]

onlyEven = (arr) => {
    return arr.filter(el => el%2 == 0);
}

console.log(onlyEven([3, 6, 8, 2]))
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// call: fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); 
// output"["dog", "by",  "wolf", "eaten"] 

function fiveCharactersOrFewerOnly(arr) {
    const smallerThanFive = arr.filter( el => el.length <= 5);
    console.log(smallerThanFive);
};

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]);
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Write a function that will return a new array of people that are members of the Illuminati
let arrIll =[
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris‚ Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]
//  call : whoIsAnIlluminati(arr)

function illuminatiMembers(arr){
    const illuminatiArr=arr.filter(str=>str.member==true)
    console.log(illuminatiArr);
}

illuminatiMembers(arrIll);
console.log('------------------------')

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Filter out all the people who are not old enough to see The Matrix
let matrixArr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16  
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 
// call: canSeeMAtrix(arr);

function canSeeMatrix(arr){
    const matArr = arr.filter(str=>str.age >= 18)
    console.log(matArr);
}
canSeeMatrix(matrixArr);
console.log('------------------------')

/////////////////////////////////////////
/////////////////SORT////////////////////
/////////////////////////////////////////

// Sort an array from smallest number to largest
// call: fromSmallToLarge([1, 3, 5, 2, 90, 20])
// ouput: [1, 2, 3, 5, 20, 90]

fromSmallToLarge = (arr) => {
    console.log(arr.sort())
};

fromSmallToLarge([1, 3, 5, 2, 90, 20])
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Sort an array from largest number to smallest
// call: fromLargeToSmall([1, 3, 5, 2, 90, 20])
// ouput: [90, 20, 5, 3, 2, 1]
fromSmallToLarge = (arr) => {
    console.log(arr.sort( (a, b) => {
        return b - a;
    }))
};

fromSmallToLarge([1, 3, 5, 2, 90, 20])
console.log('------------------------')


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Sort an array from shortest string to longest
// call: x(["dog", "wolf", "by", "family", "eaten"]); 
// output: ["by", "dog", "wolf", "eaten", "family"] 
x = (arr) => {
    console.log(arr.sort( (a, b) => {
        return a.length - b.length;
    }))
};

x(["dog", "wolf", "by", "family", "eaten"])
console.log('------------------------')

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Sort an array alphabetically
// call: alphabetical(["dog", "wolf", "by", "family", "eaten"]); 
// output: ["by", "dog", "eaten", "family", "wolf"] 

let animals = ["by", "dog", "wolf", "eaten", "family"];
animals.sort();
console.log(animals)
console.log('------------------------')

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// Sort the objects in the array by age
let ageArr = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]
//call: sortByAge(arr);

sortByAge = (arr) => {
    console.log(arr.sort( (a, b) => {
        return a.age - b.age;
    }))
};

sortByAge(ageArr)
console.log('------------------------')
