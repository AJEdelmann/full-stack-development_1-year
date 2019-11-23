// node app.js 15 hola
const { printMeStars } = require('./stars');

const num = process.argv[2];
const str = process.argv[3];

printMeStars(num, str);
