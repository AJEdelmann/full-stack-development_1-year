// const axios = require("axios");
// // const url = "https://official-joke-api.appspot.com/random_joke";

// // axios.get(url).then(response => {
// //   let joke = response.data;

// //   console.log(joke.setup);
// //   for (let i = 0; i < 20; i++) {
// //     console.log(`|`);
// //   }
// //   console.log(joke.punchline);
// // });

////////////////////////////
////////////////////////////
////////////////////////////
// // https://rickandmortyapi.com/api/character/?name=rick&status=alive

const name = process.argv[2];
const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

printTheCharacter = character => {
  console.log(`Name: ${character.name}`);
  console.log(`Status: ${character.status}`);
  console.log(`Species: ${character.species}`);
  console.log("---------------------------");
};

axios
  .get(url)
  .then(res => {
    const data = res.data.results;
    data.filter(el => {
      if (el.status === "Alive") {
        printTheCharacter(el);
      }
    });
  })
  .catch(err => {
    console.log(`Do you even watch the show?`);
  });
