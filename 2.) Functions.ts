// Poorly Written Function:
// The params have no type, so you wont get an error until compile
function addTwo(num){
    return num + 2
}

// num input
let numInput = addTwo(5)
console.log(`${numInput}`)
let stringInput = addTwo("5");
console.log(`${stringInput}`);

// Strongly Written Function