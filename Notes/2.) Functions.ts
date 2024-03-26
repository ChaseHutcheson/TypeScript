// Poorly Written Function:
// The params have no type, so you wont get an error until compile
function addTwoPoor(num){
    return num + 2;
};

// num input
let numInput = addTwoPoor(5);
console.log(`${numInput}`);
let stringInput = addTwoPoor("5");
console.log(`${stringInput}`);

// Strongly Written Function:
// The params have a type, so there is errors when passing a variable thats not a number
function addTwoStrong(num: number) {
  return num + 2;
};

// Even More Strongly Written Function:
// The return has a type, so you cant accidentally return a different type
function addTwoExtraStrong(num: number): string {
  return (num + 2).toString();
};

// Arrow Functions:
// Arrow funtions make writing functions more readable
const sayHello = (name: string): string => {
    return `Hello ${name}`;
};

// Void Returns 
// Void returns are a return type that raises an error if you try to return anything
function consoleError(errorMsg: string): void {
    console.error(errorMsg);
};

// Never Returns
// Never represents a value that never occurs for functions that throw errors or have infinite loops
function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
};

// Object Returns
// Object returns let you return an object that follows a certain syntax
function createUser(username: string, userAge: number):{name: string, age: number, createdAt: number} {
    let dateOfCreation: number = Date.now();
    return {name: username, age: userAge, createdAt: dateOfCreation}
}