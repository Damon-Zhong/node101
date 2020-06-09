let name = "Damon"
const asciiCats = require('ascii-cats')

console.log( `Hey ${name}! I am Node`)

console.log( `^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`)

function getTime(){
    return new Date()
}

console.log( `The date is: ${getTime()}` )

//run npm
const myAsciiCat = asciiCats();
console.log( myAsciiCat )
