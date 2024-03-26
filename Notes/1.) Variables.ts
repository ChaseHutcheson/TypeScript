// Strings
let greetings: string = "hello chase"
console.log(`STRINGS`);
console.log(`Before Upper: ${greetings}`)
greetings = greetings.toUpperCase()
console.log(`After Upper: ${greetings}\n`);

// Numbers
let userId: number = 790135.52810
console.log(`NUMBERS`);
console.log(`Before Fixed: ${userId}`);
let result: string = userId.toFixed(3)
console.log(`After Fixed (String): ${result}\n`);

// Boolean
let isLoggedIn: boolean = false;
console.log(`BOOLEANS`);
console.log(`Before Reassignment: ${isLoggedIn}`);
isLoggedIn = true
console.log(`After Reassignment: ${isLoggedIn}\n`);

// Any (Use as little as possible)
let hero;
function getHero(){
    return "thor"
}
hero = getHero()