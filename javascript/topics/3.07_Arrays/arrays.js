const fruits = ['mango', 'pineapple', 'banana']
let vegetables = new Array('tomato', 'pak choi', 'aubergine')

console.log(fruits)         // ['mango', 'pineapple', 'banana']
console.log(fruits[1])      // pineapple
console.log(vegetables)

fruits[1] = 'apple'
console.log(fruits)         // [ 'mango', 'apple', 'banana' ]

fruits[1] = fruits[1].toUpperCase()
console.log(fruits)         // [ 'mango', 'APPLE', 'banana' ]

let names = ['Erwan', 'Irem', 'Maurice', 'Sam', 'Flobby', 'Flozzy', 'Mahammadi']

for(let i = 0; i<names.length; i+=2) {
    console.log(names[i])
}

let bands = 
[
    [
        'Queen', 
        'Iron and Wine', 
        'Tokyo Hotel', 
        'Green Day'
    ] , 
    'Black Sabbath', 
    'Guns n Roses'
];

let singers = ['Britney Spears', 'Justin Timberlake']
bands[1] = singers
console.log(bands)
console.log(bands[0])
console.log(bands[0][1])
console.log(bands[0][1][0])

for(let i = 0; i<bands.length; i++) {
    console.log(bands[i])
    for(let j = 0; j<bands[i].length; j++){
        console.log(bands[i][j])
    }
}
console.log('_______________________')
let characters = ['Rick', 'Morty', 'Noobnoob', 'Jessica', 'Balrog']

console.log(characters.indexOf('Noobnoob'))  // 2
console.log('_______________________')

console.log(characters.concat(fruits))
console.log(characters.concat(['Vasi', 'Blabla']))
console.log('_______________________')

console.log(characters.slice(2))
console.log(characters.slice(1,3))
console.log(characters.slice(-2))

console.log('_______________________')
characters.splice(1, 0, 'Summer')
console.log(characters)

console.log('_______________________')
console.log(characters.reverse())

console.log('_______________________')
console.log(characters.join())
console.log(characters.join(' * '))
console.log(characters.join('_'))

console.log('_______________________')
console.log(characters.pop())
console.log(characters.pop())
console.log(characters.pop())
console.log(characters)

console.log('_______________________')
console.log(characters.push('Birdman', 'Aragorn'))
console.log(characters)

console.log('_______________________')
console.log(characters.shift())
console.log(characters)

console.log('_______________________')
console.log(characters.unshift('Legolas'))
console.log(characters)

characters[10] = 'Something'
console.log(characters)