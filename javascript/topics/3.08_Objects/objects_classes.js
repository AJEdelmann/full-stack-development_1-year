//Let go deeper to create class

// function Animal (name,energy)
// {
//     let animal= Object.create(Animal.prototype);
//     animal.name=name;
//     animal.energy=energy;
//     return animal;
// }

//we can also created instance of the function/class or object using 'new' keyword and then 'this' keyword hold the all the references of that object.

//we have removed Object.create and used new keyword from the previous prototype example.

// function Animal (name,energy)
// {
//     //let animal= Object.create(Animal.prototype);
//     this.name=name; //animal.name =name;
//     this.energy=energy; //animal.energy=energy;
//     //return animal;
// }
// Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount;
// }

// Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
// }
// Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing`);
//     this.energy -= length;
// }
// const leo =  Animal('Leo',7); 
// const snoop =  Animal('Snoop',10);
// console.log(leo);  // undefined

// const leo = new Animal('Leo',7); 
// const snoop = new Animal('Snoop',10);
// console.log(leo);  //return object

// Pseudoclassical Instantiation.
// Constructor 
// Object reference
// combine all methods into one bucket/basket - Class

//A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties is assigned inside a constructor() method.

//Use the keyword class to create a class, and always add a constructor method.

// The constructor method is called each time the class object is initialized.

class Animal {

    constructor(name, energy) {
        console.log("constructor...");
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }
    
    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    }
    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }

    static nextToEat(animals) {
        const sortedLeastEnergy = animals.sort((a, b) => {
            return a.energy - b.energy;
        });
        console.log(sortedLeastEnergy);
        return sortedLeastEnergy[0].name;
    }

}

// Every object has own storage/reference area in the memory
// const firstObj=new Animal();
// console.log(firstObj);

// const secondObj=new Animal('second',1);
// console.log(secondObj);

// firstObj.name="first";
// firstObj.energy=2;

// console.log(secondObj);

// console.log(firstObj);
// firstObj.name="replace";
// firstObj.energy=3;
// console.log(firstObj);
// firstObj.eat(5);
// console.log(firstObj);

// const test=new Animal(); 
// const leoObj = new Animal('Leo',7);  // leo instance of the Animal class or leo is object of this Animal class
// const snoopObj = new Animal('Snoop',10);
// leoObj.eat(5);
// console.log(leoObj.name);//Leo
// console.log(snoopObj.name);
// console.log(leoObj);

//Static Methods
//Static methods are defined on the class itself, and not on the prototype/object.That means you cannot call a static method on the object


//
// function nextToEat(animals)
// {
//     const sortedLeastEnergy = animals.sort((a,b)=>{
//         return a.energy -b.energy;
//     });
//     return sortedLeastEnergy[0].name;
// }
const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop', 10);
//console.log(nextToEat([leo,snoop])); // Leo
//console.log(Animal.nextToEat([leo,snoop])); //Leo
//console.log(Animal.eat(5)); // eat is not static method and accessing non static method always need object.

//-------------------Encapsulation--------------------------

// One of the core concepts of OOP is encapsulation. 
//An important part of encapsulation is that data (object properties) should not be directly accessed or modified from outside the object. 

//To access or modify a property we would use a getter (access) or a setter (modify), which are specific methods we define in our class. 

//Currently there is no native support for private properties in JavaScript (it is possible to mimic private properties but we’re not going to go into that). So all the properties we’ve declared can be directly accessed from outside the object.



class User {

    constructor(name,age, email)
    {
        this.fullName=name;
        this.age=age;
        this.email=email;
    }

    get name()
    {
        console.log("get name...");
        return this.fullName;
    }
    set name(newName)
    {
        console.log("set name...");
        this.fullName=newName;
    }

}
console.clear();
// const objUser= new User("John",30, "test@gmail.com");
//  console.log(objUser.name); //output John
//  objUser.name="test";   //this called set name method
// console.log(objUser.name); //it called get name method


//------------------- Inheritance ------------------------------

//Inheritance: Classes can also inherit from other classes. The class being inherited from is called the parent, and the class inheriting from the parentis called the child. In our example, another class, let’s say Administrator, can inherit the properties and methods of the User class:

//To create a class inheritance, use the extends keyword.

//User class= Parent  and Administrator class = child, inherited, derived

//There are a few things to keep in mind when using super():
// 1. You can only use super() in a derived class. If you try to use it in a non-derived class (a class that doesn’t use extends) or a function, it will throw an error.
// 2. You must call super() before accessing this in the constructor. Since super() is responsible for initializing this, attempting to access this before calling super() results in an error.
// 3. The only way to avoid calling super() is to return an object from the class constructor.

class Administrator extends User {

    constructor(name,age,email,role)
    {
        super(name,age,email); //it calling User class constructor
        this.role=role;
    }

    get rolePermission()
    {
        console.log("get role....");
        return this.role;
    }

    set rolePermission(newRole)
    {
        console.log("set role...");
        this.role=newRole;
    }
}

const objAdmin=new Administrator("Sara",25,"sara@gmail.com","Admin");
console.log(objAdmin.name);
console.log(objAdmin.rolePermission);


//Hoisting
//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
//That means that you must declare a class before you can use it.