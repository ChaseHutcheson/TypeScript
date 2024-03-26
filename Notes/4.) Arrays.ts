// Array
// You can make an array that holds any type of variable
const array1: any = [];
array1.push("Hello, World")
array1.push(69420);
array1.push(false);
console.log(array1, "\n");

// Typed Arrays
// You can make an array that only holds objects of a vertain type
const numArray: number[] = [];
const stringArray: Array<string> = [];
const boolArray: boolean[] = [];

numArray.push(1, 2, 3);
stringArray.push("Hello, World", "Apple", "Bannan");
boolArray.push(true, false);
console.log(numArray);
console.log(stringArray);
console.log(boolArray, "\n");

// Type Alias Arrays
// You can make an array that hold variables of a certain type alias
type Users = {
    name: string,
    age: number
}
const userArray: Users[] = [];
userArray.push({name: "Chase", age: 17}, {name: "Noah", age: 18}, {name: "Jon", age: 18})
console.log(userArray, "\n");

// Array-ception
// You can make the type arrays within arrays
const MLModels: number[][] = [
    [255, 255, 255],
    [0, 0, 0]
]
console.log(MLModels, "\n");