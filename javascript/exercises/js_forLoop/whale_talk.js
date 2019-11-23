// Whale Talk

// Take a phrase like ‘dogs and turtles’ and translate it into its “whale talk” equivalent: ‘OAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops!

// Step 1: Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

// Step 2: Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated.
// Note: Whales don’t consider “y” a vowel.

// Step 3: Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

// Step 4: Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

// Step 5: To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string. Comment out this code when you’re ready to move on.

// Step 6: Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs. This will enable you to check each letter of input against all the vowels elements during each iteration.

// Step 7: To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.

// Step 8: Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.

// Step 9: Whales double their e‘s and the u‘s in their language. Write an if statement that checks if each letter in the input string is equal to 'e'. If so, .push() input[i] to the resultArray. Note, this statement belongs after the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.

// Step 10: Next, you want to double the letter u, so you must mimic the code from the last step. Re-create the if statement, but modify it so it pushes the letter u a second time.

// Step 11: At the bottom of the program, log resultArray to the console.

// Step 12: Notice when we log the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string.

// Step 13: Run the program and sing the output out loud — you officially speak whale! To confirm, if you change the value of input to ‘dogs and turtles’, the whale version would read: 'OAUUEE'. Try other tests like 'Hi, Human' (to get IUUA) or 'a whale of a deal!' (to get 'AAEEOAEEA').

// Tests
// "dogs and turtles" should print: OAUUEE
// "serpentines and turtles" should print: EEEEIEEAUUEE
// "Hi, human" should print: IUUA
// "a whale of a deal!" should print: AAEEOAEEA


let input = "a whale of a deal!";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for(let i = 0; i < input.length; i++) {
  //console.log(`number of input index = ${i}`);
  //console.log(`Another way to see = ${input[i]}`);
  for(let j = 0; j < vowels.length; j++) {
  //console.log(`n° of vowels = ${j}`);
    if(input[i] === vowels[j]){
      if(input[i] === "e"){
      	resultArray.push("ee");
    	} else if (input[i] === "u") {
      	resultArray.push("uu");
    	} else {
      	resultArray.push(input[i]);
    	}
    }
  }
}
console.log(resultArray.join("").toUpperCase());