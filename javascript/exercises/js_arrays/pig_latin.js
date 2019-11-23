// 7. Pig Latin Translation
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

// **Rules**
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

// //Examples:
// pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay"
// pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay"
// pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay"

// //**Notes**
// //Be sure to preserve proper capitalization, ignore punctuation.

// "TO DOs" FOR YOU MY STUDENTS: CLEAN IT UP, MAKE IT SEXY, BREAK IT INTO MORE FUNCTIONS THAN ONE
function pigLatin (str) {
    let arr = str.toLowerCase().split('.').join('').split(' ');

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let firstLetter = word[0];
        if(firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
            // We need to make it +way
            arr[i] = word + 'way';
        } else {
            // make it ord + w + ay
            arr[i] = word.substring(1) + firstLetter + 'ay';
        }
    }
    
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
    console.log(arr.join(' '))
}

pigLatin("Tom got a small piece of pie.")
pigLatin("Tom got a .small piece of pie.")




