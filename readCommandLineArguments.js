
const argument = process.argv

function printName(name){
    return `hello ${name}`
}

console.log(printName(argument[2]))

