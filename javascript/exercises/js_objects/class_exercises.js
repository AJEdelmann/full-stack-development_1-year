//Task:
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

// The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

// class Person {
//     constructor (name, age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     describe ()
//     {
//         console.log(His/Her name is ${this.name} and is ${this.age} years old );
//     }
//     static test()
//     {
//         console.log("i am static method...");
//     }
//  }
//  const personOne = new Person ("John", 19);
//  console.log(personOne);
//  personOne.describe();
//  const personTwo = new Person ("Maurice", 25);
//  personTwo.describe();
//  Person.test();

// Task :

// Create a class called Student which accepts 
//the name of a student as string, 
//his/ her class name as string.
//address as string
//birthDate as date, yyyy-mm-dd

// The Student class should have the following methods

// fullName : John Doe
// Address  : vulkenstr 1, 2341, Berlin
// Subjects : return all the subjects which currently studying like ‘Web’, ‘Math’, ‘Science’ etc
// birthDate : need to pass the year and store this year in this object’s property birthDate.
// Age: it will return the age of the student, you no need to pass anything in this method but birthDate will take from previously stored from the object property.

//Outputs
//show fullname, show address, show subjects, birthdate, age


class Student {

    constructor(fullName, className, address, birthDate) {
        this.fullName = fullName;
        this.className = className;
        this.address = address;
        this.birthDate = new Date(birthDate);
        this.xyz = "www";

    }

    getFullName() {
        console.log("getFullName...");
        return this.fullName;
    }

    getAddress() {
        console.log("getAddress...");
        return this.address;
    }

    getSubjects() {
        console.log("getSubjects...");
        this.subjects = 'Math, German, Science, History';
        return this.subjects;
    }
    getBirthDate() {
        console.log("getBirthDate...");
        return this.birthDate;
    }
    getAge() {
        console.log("getAge...");
        this.age = 2018 - this.birthDate.getFullYear();
        return this.age;
    }

}
const studentObj = new Student('John Doe', 'FbW15', 'vulkenstr 1, 12343, Berlin', '1984-03-10');
console.log(studentObj.getBirthDate());
console.log(studentObj.getAge());
console.log(studentObj.getAddress());
console.log(studentObj.getSubjects());
console.log(studentObj);

//Create Class ValidateCreditCard and constructor accept the card number.
//Class contain one method validate and it decide card number is valid or not.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

class ValidateCreditCard {

    validate(creditCardNum) {

        console.log("validate...");

        // The credit card number must be 16 digits in length
        if (creditCardNum.length !== 16)
            return false;

        //All of the digits must be numbers
        for (var i = 0; i < creditCardNum.length; i++) {
            var currentNumber = creditCardNum[i]; // '9'
            currentNumber = Number.parseInt(currentNumber);
            if (!Number.isInteger(currentNumber))
                return false;

                
        }

        // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
        var obj = {};
        for (var i = 0; i < creditCardNum.length; i++) {
            obj[creditCardNum[i]] = true;
            /*
            obj ={
                a : true,
                9 : true,
                ...
                so on
            }
            */
        }
        //console.log(obj);
        //console.log(Object.keys(obj));
        if (Object.keys(obj).length < 2) {
            console.log("this is not match my condition of least two different digit");
            return false;
        }

        // The final digit of the credit card number must be even
        //console.log(creditCardNum.length);
        //console.log(creditCardNum[creditCardNum.length-1]);
        if (creditCardNum[creditCardNum.length - 1] % 2 !== 0)
            return false;

        // The sum of all the digits must be greater than 16
        var sum = 0;
        for (i = 0; i < creditCardNum.length; i++) {
            sum += Number.parseInt(creditCardNum[i]);
        }
        if (sum <= 16)
            return false;

        return true;
    }
}

var ccObj = new ValidateCreditCard();
console.log(`9999777788880000==> ${ccObj.validate('9999777788880000')}`); //true
console.log(`6666666666661666==> ${ccObj.validate('6666666666661666')}`); //true
console.log(`a92332119c011112==> ${ccObj.validate('a92332119c011112')}`); //false
console.log(`4444444444444444==> ${ccObj.validate('4444444444444444')}`); //false
console.log(`1211111111111112==> ${ccObj.validate('1211111111111112')}`); //true

//Case 2

// class ValidateCreditCard {
//     constructor(number) {
//         this.number = number;
//     }
// ​
//     validate() {
//         let arr = this.number.split('').map(item => parseInt(item, 10));
//         console.log(arr);
//         let differentNumbers = [];
//         arr.forEach(a => {
//             if (!differentNumbers.includes(a)) differentNumbers.push(a);
//         });
//         console.log(differentNumbers);
//         // return (arr.length != 16 || differentNumbers.includes(NaN) || arr.reduce((a, b) => a + b) < 16 || arr[arr.length - 1] % 2 != 0 || differentNumbers.length < 2) ? false : true;
//         console.log('arr.length != 16   ->', arr.length != 16)
//         if (arr.length != 16) return false;
//         console.log('differentNumbers.includes(NaN)   ->', differentNumbers.includes(NaN))
//         if (differentNumbers.includes(NaN)) return false;
//         console.log('differentNumbers.length < 2   ->', differentNumbers.length < 2)
//         if (differentNumbers.length < 2) return false;
//         console.log('arr.reduce((a, b) => a + b) < 16   ->', arr.reduce((a, b) => a + b) < 16)
//         if (arr.reduce((a, b) => a + b) < 16) return false;
//         console.log('arr[arr.length - 1] % 2 != 0   ->', arr[arr.length - 1] % 2 != 0)
//         if (arr[arr.length - 1] % 2 != 0) return false;
//         return true;
//     }
// }
// ​
// // test
// const x = new ValidateCreditCard('4a44444444444442'); 
// const x = new ValidateCreditCard('9999777788880000'); // true
// const x = new ValidateCreditCard('6666666666661666'); // true
// const x = new ValidateCreditCard('a92332119c011112'); // false
// const x = new ValidateCreditCard('4444444444444444'); //false
// const x = new ValidateCreditCard('1211111111111112'); // true