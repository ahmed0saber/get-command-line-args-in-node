const functions = {
    sum: (x, y) => `${x} + ${y} = ${parseInt(x) + parseInt(y)}`,
    multiply: (x, y) => `${x} * ${y} = ${parseInt(x) * parseInt(y)}`
}

const args = process.argv.slice(2) // cancels "node index.js", then creates an arrays from the others
const [action, number1, number2] = args

console.log(functions[action](number1, number2))
