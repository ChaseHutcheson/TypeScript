// Union Types
// You can assign multiple types to one prop / variable
let score: number | string | boolean = 33
console.log(score)
score = "33"
console.log(score)
score = false
console.log(score)

// Union Type Aliases
// You can make a variable be multiple aliases
type Admin = {
  username: string;
  id: number;
};
type User4 = {
  name: string;
  id: number;
};
let chase: Admin | User4 = {username: "Chase", id: 5}
let john: Admin | User4 = { name: "John", id: 443 };

// Union parameters
// you can make parameters accept mutliple types
function add2Union(num: number | string) {
    if (typeof num === "string") {
        num = Number(num)
        return num + 2
    }
    return num + 2
}
console.log(add2Union("2"));
console.log(add2Union(2));

// Union Arrays
// Arrays can take multiple types
const arrayUnion: (string | number)[] = [];
arrayUnion.push("100");
arrayUnion.push(100);
console.log(arrayUnion);