// Type Aliases
// Type aliases are like object return types, but you can define the return type beforehand
type User = {
    name: string, 
    age: number,
    createdAt: number
}

function createUserNew(
  username: string,
  userAge: number
): User {
  let dateOfCreation: number = Date.now();
  return { name: username, age: userAge, createdAt: dateOfCreation };
}

// Multiple Type Aliases
// You can create a type that is a combination of 2 or more type aliases (Not really a good practice)
type cardNumber = {
  cardNumber: number
}

type cardDate = {
  cardDate: number;
};

type cardDetails = cardNumber & cardDate & {
  cvv: number;
};

let card: cardDetails = { cardNumber: 123123, cardDate: 3123123, cvv: 12312 }

// Readonly
// the Readonly option prevents you from reassigning props after they are created.
type User2 = {
  readonly _id : number,
  name: string,
  age: number;
  createdAt: number;
};

let newUser: User2 = {
  _id: 789897,
  name: "John",
  age: 52,
  createdAt: 1010101001
}
// newUser._id = 5 //! Cannot assign to '_id' because it is a read-only property.