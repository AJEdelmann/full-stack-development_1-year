//1
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
const secondCity = euroCities[1];
console.log(secondCity);

//2
euroCities[0] = "Berlin";
console.log(euroCities);

//3
console.log(euroCities.length);

//4
euroCities.pop();
console.log(euroCities);

//5
euroCities.push("Budapest");
console.log(euroCities);


//6 removes elements from index 1-3
euroCities.splice(1, 3);
console.log(euroCities);

//7
const asianCities = ["Beijing", "Phnom Pehn", "Bangkok"];
const clone = asianCities.slice(0);
console.log("clone", clone);

//8
const cities = asianCities.slice(1, 3);
console.log(cities);

//9
const worldCities = euroCities.concat(asianCities);

//10 
console.log(worldCities.reverse());

//11 replaces 1 element at index 2 with Toronto
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);

//12 inserts Washington
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

//13
console.log(worldCities.join(', '));
console.log(worldCities.join(' + '));

//14 
const empty = euroCities.splice(0, 0);
console.log("empty", empty);
console.log(euroCities);

euroCities.length = 0;
console.log(euroCities);

//15 Bonus: Reverse String 
const string = "Hello World";
arr = string.split("");
arr.reverse();
const reversedString = arr.join("");
console.log(reversedString);

//1. Make an array of your siblings' names or your favorite movie characters' names.
let family = ["Miriam", "John", "Erika", "Julian"];

//2. Make an array of your parents' names.
const parents = ["Yasmin", "Adrian"];

//3. Combine these two arrays.
let wholeFamily = family.concat(parents);
console.log(wholeFamily);

//4. Add your pets' names.
wholeFamily.push("Toby");
console.log(wholeFamily);

//5. Reverse the order of the array.
wholeFamily.reverse();
console.log(wholeFamily);

//6. Access one of your parents' names.
let mother = wholeFamily[2];
console.log(mother);

//7. Update the name of one of your parents. 
mother = "Yasmin Borg";
console.log(mother);

wholeFamily[1] = "Adrian Borg";
console.log(wholeFamily);