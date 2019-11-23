// console.log(console);

//  let console = {
//     log: function () {

//     },
//     etc: 'asfasfa'
// }

////////////////////////////////////////
/////////OBJECT MANIPULATION////////////
////////////////////////////////////////

// let band = {
//     name: 'The National',
//     amountOfMembers: 4,
//     genre: 'Rock',
//     city: 'Cincinnati',
//     latestAlbum: 'I Am Easy To Find',
//     instruments: ['guitar', 'bass', 'keys', 'drums'],
//     kickOutAMember: function(){
//         console.log('I kicked out somebody');
//     },
//     printThis: function() {
//         console.log('////////////////////////////////////////');
//         this.genre = 'Steve';
//         console.log(this);
//         console.log('////////////////////////////////////////');
//     }
// }

// console.log(band.latestAlbum);
// console.log(band.instruments);
// console.log(band["latestAlbum"]);
// band.active = true;
// console.log(band)
// band.kickOutAMember()
// console.log(band.kickOutAMember())
// band.printThis()

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// let myLife = {
//     name: 'Vasilis',
//     nickName: 'Wasabis',
//     yearOfBirth: 1988,
//     myAge: 30,
//     anotherYearPassed: function() {
//         this.myAge++;
//     }
// }

// console.log(myLife);
// myLife.anotherYearPassed();
// console.log(myLife);

////////////////////////////////////////
/////////////   JSON   /////////////////
////////////////////////////////////////
//  JSON JSON JSON

// let response = '{"result": "true", "count": 42}';
// let obj = JSON.parse(response);

// console.log(response);
// console.log(response.result)
// console.log(obj)

////////////////////////////////////////
///////////// CLONING //////////////////
////////////////////////////////////////

// const numbers = [
//     1,
//     [2],
//     [3, [4]],
//     5
// ];

// let res = JSON.parse(JSON.stringify(numbers));

// console.log(res);

//////////////////////////////////////////

// let array = [1,2,3];
// let arrayCopy = array;

// console.log('ARRAY', array)
// console.log('ARRAY COPY', arrayCopy)

// array[0] = 'I have changed, i promise';

// console.log('ARRAY', array)
// console.log('ARRAY COPY', arrayCopy)

///////////////////////////////////////////

// let origArray = [1,2,3];
// let arrayCopy = [...origArray];  // [] + origArray

// console.log('ARRAY', origArray)
// console.log('ARRAY COPY', arrayCopy)

// origArray[0] = 'I have changed, i promise';

// console.log('ARRAY', origArray)
// console.log('ARRAY COPY', arrayCopy)

////////////////////////////////////////

// let nestedArray = [1, [2], 3];
// let arrayCopy = [...nestedArray];

// console.log('ARRAY', nestedArray)
// console.log('ARRAY COPY', arrayCopy)

// arrayCopy[0] = 'Hello';
// arrayCopy[1][0] = 'there';
// // nestedArray[0] = 'Sam';
// // nestedArray[1][0] = 'LOL';

// console.log('ARRAY', nestedArray)
// console.log('ARRAY COPY', arrayCopy)

////////////////////////////////////////

// let nestedArray = [1, [2], 3];
// let arrayCopy = JSON.parse(JSON.stringify(nestedArray));

// console.log('ARRAY', nestedArray)
// console.log('ARRAY COPY', arrayCopy)

// arrayCopy[0] = 'Hello';
// arrayCopy[1][0] = 'there';
// // nestedArray[0] = 'Sam';
// // nestedArray[1][0] = 'LOL';

// console.log('ARRAY', nestedArray)
// console.log('ARRAY COPY', arrayCopy)

////////////////////////////////////////
/////////// DESTRUCTURING //////////////
////////////////////////////////////////

// let arr = ['Maurice', 'Sam', 'Firat', 'Flo'];

// // let name = arr[0];
// let [ bugatsa, okinawua, ...whatever ] = arr;

// // arr[0] = 'asfs'
// console.log(bugatsa);
// console.log(okinawua);
// console.log(whatever);

////////////////////////////////////

let chair = {
    color: 'Black',
    size: 'Tiny',
    wheels: false,
    model: 'TR2000md',
    changeColor: function(){
        console.log('I am yellow now')
    }
}

let { size, color, changeColor } = chair;

console.log(size);
console.log(color);
changeColor()
///////////////////////////////////

let snow = function(){
    console.log('Its snowing')
}

snow()