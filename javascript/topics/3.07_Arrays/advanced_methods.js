
// FOREACH
var names = ['Steve', 'John', 'Stella', 'Matilda', 'John', 'Goran']

names.forEach(function(element){
    console.log(element);
});

console.log('-------------------------')


function printOutElements(el, i, arr) {
    console.log('My current element: ',el)
    console.log('My current index: ', i)
    console.log('My current array: ',arr)
};

names.forEach(printOutElements);

console.log('-------------------------')

names.forEach((element) => {
    console.log(element);
});


// REDUCE
var nums = [5,4,3,2,1,2,3,4,5,6,7,8];

function addEverything (acc, val) {
    console.log(acc + val);
    return acc + val;
};

nums.reduce(addEverything)

console.log('-------------------------')

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( accumulator, currentValue ) => accumulator.concat(currentValue)
  );

console.log(flattened)
console.log('-------------------------')

// MAP
const doubleNums = nums.map((el) => el * 2);
console.log(nums)
console.log(doubleNums)

console.log('-------------------------')

function concatName (el){
    return el+el;
};

const doubleNames = names.map(concatName)
// const doubleNames = names.map((el) => el + el)
// const doubleNames = names.map(el => el + el)

console.log(names)
console.log(doubleNames)

console.log('-------------------------')

let res = [];
for (let i = 0; i < names.length; i++) {
    res.push(names[i]+names[i]) 
}
console.log('My result', res)

console.log('-------------------------')

function addYay (el){
    let firstLetter = el.slice(0, 1);
    let rest = el.slice(1, el.length);
    return rest+firstLetter+'YAY'
};

const pigLatin = names.map(addYay)

console.log(names)
console.log(pigLatin)

console.log('-------------------------')

// FILTER
const capitals = names.filter((el) => {
    if(el[0] === 'S')
        return el;
})

console.log(capitals)

console.log('-------------------------')

const myNums = nums.filter(el => el > 4);
// const myNums = nums.filter(el => {return el > 4});
// const myNums = nums.filter((el) => {return el > 4});
// const myNums = nums.filter(function(el) {return el > 4});
console.log(myNums)
console.log('-------------------------')

// SORT

const arr1 = [4, 10, 1, 20, 5];
arr1.sort(function(a,b){
    return a-b;
})

console.log(arr1)

const arr2 = ['Hello', 4, 9 ,1 ,'A', 'D', 'B']
arr2.sort()

console.log(arr2)

console.log('-------------------------')


let arr3 = [
    {
        name: 'I am twentu',
        age: 20
    },
    {
        name: 'I am twenty six',
        age: 26
    },
    {
        name: 'I am eight',
        age: 8
    },
    {
        name: 'I am hundred and 8',
        age:108
    },
    {
        name: 'I am four',
        age:4
    }
];

arr3.sort(function(a, b){
    return a.age - b.age;
})

console.log(arr3)