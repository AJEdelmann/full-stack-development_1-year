const giveMeAJoke = require('give-me-a-joke');

module.exports.printMeAJoke = (type) =>{
    if(type == 'dad'){
        giveMeAJoke.getRandomDadJoke (function(joke) {
            console.log(joke);
        });
    }
    else if(type == 'chuck') {
        giveMeAJoke.getRandomCNJoke (function(joke) {
            console.log(joke);
        });
    } else {
        console.log(`I have no jokes for ${type}. Do you want a dad joke?`)
    }
}

