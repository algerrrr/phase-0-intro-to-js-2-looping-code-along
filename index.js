// Code your solutions in this file
const names = []

function writeCards(names, greeting) {
    const greetings = []
    for (let i = 0; i<names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    
    return greetings
}


function countDown(number) {
    for (let i = number; i>=0; i--) {
        console.log(i)
    }
}