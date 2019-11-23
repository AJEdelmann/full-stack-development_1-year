//function instantiation
// function Animal(name, energy)
// {
//     let animal = {}; //let create animal object
//     animal.name = name;
//     animal.energy=energy;

//     animal.eat = function(amount)
//     {
//         console.log(`${this.name} is eating`);
//         this.energy +=amount;
//     }

//     animal.sleep = function(length)
//     {
//         console.log(`${this.name} is sleeping`);
//         this.energy +=length;
//     }

//     animal.play = function(length)
//     {
//         console.log(`${this.name} is playing`);
//         this.energy -=length;
//     }
//     return animal;
// }

// const leo=Animal('Leo',7);
// const snoop=Animal('Snoop',10);
// leo.eat(10);  // same like console.log
// leo.sleep(5);

//Functional Instantiation with shared methods.
const animalMethods = { //this is animalMethods object

    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    },

    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    },

    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
};

// function Animal(name, energy)
// {
//     let animal={};
//     animal.name=name;
//     animal.energy=energy;
//     animal.eat=animalMethods.eat;
//     animal.sleep=animalMethods.sleep;
//     animal.play=animalMethods.play;
//     return animal;
// }
// const leo=Animal('Leo',7);
// const snoop=Animal('Snoop',10);
// leo.eat(10);

//Object.create
const parent = {
    name: "John",
    age: 30,
    nationality: "German"
};

const child = Object.create(parent);
child.name = "Doe";
child.age = 20;

console.log(child);
console.log(child.name);
console.log(child.age);
console.log(child.nationality);
console.log(parent.name);

//Functional Instantiation with shared methods and Object.create
// function Animal(name, energy)
// {
//     let animal=Object.create(animalMethods);
//     animal.name=name;
//     animal.energy=energy;
//     // animal.eat=animalMethods.eat;
//     // animal.sleep=animalMethods.sleep;
//     // animal.play=animalMethods.play;
//     return animal;
// }
// const leo=Animal('Leo',7);
// const snoop=Animal('Snoop',10);
// leo.eat(10);

//So far, so good. There are still some improvements we can make though. It seems that still have to manage a separate object (animalMethods) in order to share methods across instances. 
//that we can implement through prototype.
//Prototype -every function in JavaScript has a prototype property that references an object.
function doThings() { }
console.log(doThings.prototype); // doThings {}
// function doThings() {} = doThings.prototype

//Prototype Instantiation
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype); // Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
}
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
}
const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);
leo.eat(10);

//let arr=[9,29,3];
//arr.forEach() // Array.prototype.forEach

//Object Prototype
let obj={};
console.log(obj);

//Built in prototypes : Array, Date, Function
let arr= [1, 2,3];
console.log(arr.__proto__ ===Array.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype );
console.log(arr.__proto__.__proto__.__proto__);

console.log(arr);  //the result of Array.prototype.toString.

//Another example
function f() {}
console.log("Function...");
console.log(f.__proto__==Function.prototype);
console.log(f.__proto__.__proto__==Object.prototype);

//Javascript array prototype constructor

Array.prototype.myTest = function() {
    console.log('Array prototype...');
    for(i=0; i<this.length; i++)
    {
        this[i]=this[i].toUpperCase();
    }
};

var fruits = ["Orange","Apple","Mango","Banana"];
console.log(fruits);
fruits.myTest();
console.log(fruits);

var testArr= ['a','b','c'];
testArr.myTest();
console.log(testArr);

//Array Method : Map
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// Note: this method does not change the original array.

// array.map(function(currentValue, index, arr), thisValue)

//Example 1
var arr1=[2,3,9,16]; //0..3

//old way
var temp=[];
for(i=0; i<arr1.length; i++)
{
  temp.push(arr1[i]*2);
}
console.log(temp);


//using array method
const result=arr1.map(x=>x*2);
console.log(result);

//Example 2
//with function defination
var counter=0;
var newArr=arr1.map(myFunction);  //arr1 : 2,3,9,16
console.log(newArr);
function myFunction(num)
{
    //console.log(counter);
    //counter++;
    return num*10;
}

//Example 3
var persons =[
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jayne", lastName: "Frye"},
    {firstName: "Sabine", lastName: "Ebert"},
];

console.log(persons.map(getFullName));

function getFullName(item)
{
   return [item.firstName,item.lastName].join(" ");
}

//Example 4
//Using var arr1=[2,3,9,16];
var x=arr1.map(Math.sqrt);
console.log(x);

//Reduce Method
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
// Note: this method does not change the original array.

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//Example 1
var numbers =[50,60,70,10];
var resultOut=numbers.reduce(myReduceFunc);
function myReduceFunc(total,num)
{
    console.log(`Total : ${total} and Num : ${num}`);
    return total+num;  // total =50+60  = 110   total=110+70=180  total=180+10=190;
}
console.log(resultOut);

//Example 2
const euros = [29.76, 41.85, 46.5];

const average=euros.reduce((total,amount,index,array)=>{

    console.log(`Total : ${total} and Amount : ${amount}`);

    total +=amount;

    console.log(`Total : ${total}`);

    if(index==array.length-1)
     return total/array.length;
    else
     return total;
});
console.log(average);

//Example 3
console.log("With adding Initial value...");
const averageAddInitial=euros.reduce((total,amount,index,array)=>{

    console.log(`Total : ${total} and Amount : ${amount}`);

    total +=amount;

    console.log(`Total : ${total}`);

    if(index==array.length-1)
    return total/array.length;
   else
    return total;

},0);
console.log(averageAddInitial);

//Example 4 : [29.76, 41.85, 46.5];
const averageAddInitialArr=euros.reduce((total,amount,index,array)=>{

    total.push(amount);
    if(index==array.length-1)
    {
        var average=0, temp=[];
        for(i=0; i<total.length; i++)
        {
            console.log("i=>" + total[i]);
            average +=total[i];
        }
        temp.push(average/array.length);
        return temp;
    }
   else
   {
    return total;

   }
    
},[]);
console.log(averageAddInitialArr);

//Example 5
const dataArr=[[1,2,3],[4,5,6],[7,8,9]];

const flatValues= dataArr.reduce((total,value)=>{

    console.log(`Total : ${total} and value : ${value}`);
    return total.concat(value);

},[]);
console.log(flatValues);

//Task : reduce Method
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
//output :  { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

 //case 1 
var result1 = fruitBasket.reduce(countfruits1,{banana :0, cherry : 0, orange : 0, apple :0, fig :0 })
function countfruits1 (intermed,cur_val) {
     if (cur_val === "banana") intermed.banana ++
     if (cur_val === "cherry") intermed.cherry ++
     if (cur_val === "orange") intermed.orange ++
     if (cur_val === "apple") intermed.apple ++
     if (cur_val === "fig") intermed.fig ++
     return intermed
}
console.log(result1)
// case 2 and 3
var result2 = fruitBasket.reduce(countfruits2,{})
function countfruits2 (intermed,cur_val) {
   
    if (intermed[cur_val] == undefined) intermed[cur_val] = 1  
    else intermed[cur_val] ++ 
    
    return intermed;
    
    // how to access the property of an object (like intermed) 
    // intermed["name of property"]
    // intermed.name_of_property 
    
    //case 3     
    
    //intermed[cur_val] = (intermed[cur_val] || 0 ) + 1;
    //return intermed
}
 console.log(result2)

 //Filter : Array Method

//  The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

// array.filter(function(currentValue, index, arr), thisValue)


//Example 1, check adult age and return all ages which is greater than 18
var ages =[32,33,16,40];

function checkAdult(age)
{
    console.log("age=>"+age);
    return age >=18;
}
console.log(ages.filter(checkAdult));

//Example 2, Get all event number
const numbers2=[1,3,4, 6, 8,9];

const filterValue = () => {

    return numbers2.filter(number =>{
        return number %2 == 0;
    });
}
console.log(filterValue());

//Example 3, count fruits in basket
var objTemp= {};
var tempArr=fruitBasket.filter((fruit) => {   
    objTemp[fruit] =  (objTemp[fruit] || 0) + 1;
});
console.log(objTemp);

const calculateFruits = fruitBasket.reduce((basketObj, fruitParam,index,array) => {
        basketObj[fruitParam] = array.filter((fruit)=> (fruit === fruitParam)).length;
        return basketObj;
    }, {});
console.log(calculateFruits);


//Example 4, Manipulate country data

const data =[
    {
        country : 'China',
        population : 13799999.999999998
    },
    {
        country : 'India',
        population : 13390000
    },
    {
        country : 'USA',
        population : 3257000
    },
    {
        country : 'Germany',
        population : 827900.0000000001
    },
];

let newData =data.filter(item =>{
    return item.population < 900000;
});
console.log(newData);

//Task : Searching in an array using filter method
//const students = ['krunal', 'ankit', 'appdividend', 'nehal', 'dhaval'];
//return all item who has 'al' inside.
//output :  ['krunal', 'nehal','dhaval']

var students = [krunal, ankit, appdividend, nehal, dhaval];
function checkLetters(name) {
   return name.includes(al)
};
console.log(students.filter(checkLetters))
