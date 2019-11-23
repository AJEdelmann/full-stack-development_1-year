//Creating an object
// let myCar = {
//     //key : value,
//     make:'Ford',
//     model: 'Mustang',
//     year: 1969
// };

// console.log(myCar);
// console.log(`The property make : ${myCar.make}`);
// console.log(`The property model : ${myCar.model}`);
// console.log(`The property year : ${myCar.year}`);

//Assigning values to properties
let myCar={};
myCar.model='Mustang';
myCar.make='Ford';
myCar.year=1969;

console.log(myCar);
console.log(`The property make : ${myCar.make}`);
console.log(`The property model : ${myCar.model}`);
console.log(`The property year : ${myCar.year}`);

//Array info
var info=['John','Schulz',32,'Berlin'];
console.log(info[0]);

//Object info
var objInfo={
    firstName: 'John',
    lastName:'Schulz',
    age:32,
    city:'Berlin'
};
console.log(objInfo.firstName);

var family ={
    //children : [{ age:3, name:'paul'},{age:4, name:'susi'}],
    children : [
        { 
            age:3, 
            name:'paul'
        },
        {
            age:4, 
            name:'susi'
        }
    ],
    father:'peter',
    mother:'sandra'
};
console.log(family);
console.log(family.children[1].name);

//complex object
var appleTree={

    apples: [
        {
            color:'red',
            taste: 'very',
            num:12,
            size: [
                'big',
                'small',
                'medium'
            ]
        },
        {
            color:'yellow',
            taste:'very',
            num:11
        }
    ],
    tree: 'wonderful'

};
//access the value medium of the size property.
console.log(appleTree.apples[0].size[2]);
//get value of the num property
console.log(appleTree.apples[1].num);

//user object
let user = {
    name:"John",
    age:30
};
user.isAdmin=true;
console.log(user);

delete user.age;
console.log(user);

let user2 = {
    name:"John",
    age:30,
    "like birds" : true //multiword property name must be quoted
};
console.log(user2);
//console.log(user2.likes birds);  //Error, property can not be with space
//console.log(user2."likes birds"); //Error, property can not assign as string
console.log(user2["like birds"]); //with bracket you can get value for the multiword

let user3={};
user3["like birds"]=true;
//get
console.log(user3);

delete user3["like birds"];
console.log(user3);

//We can use square brackets in an object literal. That's called Computed properties.

let fruit="kiwi";
let fruitBucket={
  [fruit]:5  // ["kiwi"] : 5
};
console.log(fruitBucket); // { kiwi: 5 }
console.log(fruitBucket.kiwi); // 5
console.log(fruitBucket.Kiwi); // undefined bcz Kiwi key is not exist, case sensitive
//console.log(fruitBucket["kiwi test"]);  //if let fruit="kiwi test"

//Reserved words (inbuilt words of the javascript) are allowed as property names

let obj1={
    for:1,
    let:2,
    return: 3
  };
console.log(obj1.for + obj1.let +obj1.return); //6

let obj2={
  for:"return",
  let:2,
  return: 3
};
console.log(obj2.for + obj2.let +obj2.return); //return23

let obj3={
    for:1,
    let:"return",
    return: 3
  };
  console.log(obj3.for + obj3.let +obj3.return); //1return3

  //Comparing objects

  console.clear();
  console.log("Comparing Objects");

  let obj4= {
      name :{
          firstName: 'John',
          lastName:'Schulz'
      },
      age:32
  };

  let obj5= {
    name :{
        firstName: 'John',
        lastName:'Schulz'
    },
    age:32
  };
console.log(obj4==obj5); //false
console.log(obj4.name==obj5.name); //false
console.log(obj4.name.firstName==obj5.name.firstName); //true

//Looping through Objects

//The  better way to loop through objects is first to convert the object into an array. Then you loop through the array.
//you can convert an object into an array with three methods.
//1.Object.keys
//2.Object.values
//3.Object.entries

//1.Object.keys : creates an array that contains the properties of an object.
const fruits ={
    apple:28,
    orange:17,
    pear: 54
};
const keys=Object.keys(fruits);
console.log(keys);

//Looping through arrays created from Object.keys

console.log("--Case 1--");
//case 1 : old way
for(i=0; i<keys.length; i++)
{
    console.log(keys[i]);
}
console.log("--Case 2--");
//case 2 : for (const/var/let key of array)
for(const item of keys)
{
    console.log(item);
}

//case 3 : array.forEach(function(currentValue, index, arr), thisValue)
//thisValue: Optional. A value to be passed to the function to be used as its "this" value.
//If this parameter is empty, the value "undefined" will be passed as its "this" value
console.log("--Case 3--");
console.log(keys);
keys.forEach(displayKeys);
function displayKeys(item, index,keys)
{
    console.log(`The key ${item} has index ${index}`);
}

//in short form
//const x = (param) => {};
keys.forEach((item,index,keys) => {
    console.log(`The key ${item} has index ${index}`);
});


//2. Object.values creates an array that contains the values of every property in an object

const values=Object.values(fruits);
console.log(values);

i=0;
for(const item of values)
{
    values[i]="item";
    fruits[item]="test";
    console.log(item);
    i++;
}
console.log(fruits);

//Object.entries creates an array within an array (an array of arrays). Each inner array has two item. The first item is the property and second item is the value.
const entries =Object.entries(fruits);

console.clear();
console.log(entries);

//entries
// [
//     [ '17', 'test' ],
//     [ '28', 'test' ],
//     [ '54', 'test' ],
//     [ 'apple', 28 ],
//     [ 'orange', 17 ],
//     [ 'pear', 54 ]
// ]

for(const [irem,count] of entries)
{
    console.log(`There are ${irem} ${count}`);
}

//Object Methods
//A method is a function stored as property in object.

var person={
    firstName: "John",
    lastName:"Doe",
    id: 5566,
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName());

const personOne= {

    name:"John",
    dateOfBirth: 2000,
    age(dateOfBirth)
    {
        const today= new Date();
        const year=today.getFullYear();
        const age=year-this.dateOfBirth;
        return age;
    }
};
console.log(personOne.age());

const personTwo = {
    isHuman:false,
    obj: {
        name : "val1",
    },
    name : "Test",
    test:"oldObject",
    displayIntroduction : function(){
        console.log(`My name is ${this.name},Am I human ${this.isHuman}`);
        console.log(`My name is ${this.obj.name},Am I human ${this.isHuman}`);
    }
};
personTwo.displayIntroduction();

//Object.create method
const me = Object.create(personTwo);
me.name="John";
me.isHuman=true;
me.displayIntroduction();

