// #Array Exercises ##These exercises are aimed at practicing arrays and array methods. Print each task the console.

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.


// Change the first item in the array to "Berlin".

// Print the length of the array "euroCities".

// Remove the last item of the array "euroCities".

// Use an array method to add "Budapest" to the euroCities array.

// Remove the second and third items from the euroCities array.

// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

// Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

// Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

// Reverse the order of worldCities.

// Replace the 3rd item in the array of worldCities with "Toronto".

// Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

// Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Output: "Berlin,London,Bangkok,Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

// Empty the array euroCities while keeping the original intact.

// #Bonus

// Write a program to reverse the string: "Hello World".
// ##Extra Practice

// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.
// Make an array of your parents' names.
// Combine these two arrays.
// Add your pets' names.
// Reverse the order of the array.
// Access one of your parents' names.
// Update the name of one of your parents.


// //Write a program to compute the average marks of the following students Then, this average is used to determine the corresponding grade. The grade for whole class not for individual student.
// //David	80
// //Vinoth 77
// //Divya	88
// //Ishitha 95
// //Thomas 68
// //
// //The grades are computed as follows :
// //Range	Grade
// //<60	F
// //<70	D
// //<80	C
// //<90	B
// //<100 A

//2. Write a program to compute the sum and product of an array of integers. 



// Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Examples:
// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

//Remove duplicate items from an array (ignore case sensitivity).
// Input : var nums = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
//Output nums= [1, 2, 3, 4, 5, 6,7,8]


//Create a function that takes an array of numbers and return the number that's unique.
//Examples:
//unique([3, 3, 3, 7, 3, 3]) ➞ 7
//unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0


//Create a function toCamelCase() that takes a single string and convert it into camelCase from snake_case. 
//Examples:
//toCamelCase("hello_world") ➞ "helloWorld"
//toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

function xo(str) {
    str = str.toLowerCase();
    //let array = lowerCase.split("");
    let countX = 0;
    let countO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            countX++;
        } else if (str[i] === "o") {
            countO++;
        }
    }

    if ((countX === 0) && (countO == 0)) {
        return `${true} no instance of either x or o`;
    } else if (countX === countO) {
        return `${true} same number of x and os`;
    } else if (countX !== countO) {
        return `${false} not the same number of x and os`;
    }
}

console.log(xo("ooxXm"));
