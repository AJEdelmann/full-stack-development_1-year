
function checkIfPalindrome (phrase) {

    // We take the string
    // We make it lowercase or uppercase
    let lowerPhrase = transformToLowercase(phrase)
    // We produce the reversed string
    let reversedPhrase = reversePhrase(lowerPhrase);
    // We check if original and reverse strings are identical
    let res = comparePhrase(lowerPhrase, reversedPhrase)

    console.log(`The word "${phrase}" is a palindrome: ${res}`)
}

function transformToLowercase(str) {
    let lc = str.toLowerCase()
    return lc;
}

function reversePhrase(sent) {
    let res = ''
    let l = sent.length - 1

    for(let i = l; i >= 0; i--){
        res = res + sent[i]
    }

    return res
}

function comparePhrase(low, rev) {
    if(low == rev) {
        return true
    }
    else {
        return false
    };

    // if(low == rev)
    //     return true
    // else return false

    // let res = (low == rev) ? true : false
    // return res

    // return (low == rev) ? true : false
}

// Our tests
checkIfPalindrome('level')  // Return true
checkIfPalindrome('mAdaM')  // Return true, but send a message that complains about the input
checkIfPalindrome('baBYlon') // Return false
checkIfPalindrome('i level madam level i') // Return true
