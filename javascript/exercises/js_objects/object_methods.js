// *************TASK JUST COOL STUFF***************


// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// let arr1 = ['this', 'not this', 'nor this'];
// let arr2 = ['thing 1', 'thing 2', 'this'];

// justCoolStuff(arr1, arr2); // Should return ['this']
// You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!

/*
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

// console.log should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
*/

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))


// ============================================================
// ============================================================

// *************TASK SORT YEARS***************

// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

// array
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

// solution
const sortYears = arr => arr.sort((a, b) => b-a);

console.log(sortYears(years))


// ============================================================
// ============================================================

// *************TASK DINNER VEGAN***************

// Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

// {name: 'cabbage', source: 'plant' }
// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

// const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

// isTheDinnerVegan(meal); // Should return true
// You can test your function when you’re ready by passing in the dinner array or by making your own!

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))



// ============================================================
// ============================================================

// *************TASK SPECIES BY TEETH***************

// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }
// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().


const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// SOLUTION
const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray))


// ============================================================
// ============================================================

// *************TASK FINDING KEYS***************

// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

// const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
// findMyKeys(drawer);
// // Should return -1
// You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))