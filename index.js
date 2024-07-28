console.log("in index.js - hello world")

let name_ = "Naruto";
console.log(name_);

let firstName, lastName;
firstName = "Vishal";
lastName = "Verma"
console.log(`${firstName} ${lastName}`);

const interstRate = 0.3;
console.log(interstRate);

// premitive types
let fullName = "Vishal Verma"; // string
let age = 25; // number
let isApproved = true; // Boolean
let firstName_ = undefined;
let lastName_ = null;
console.log(`type of fullName: ${typeof(fullName)}`)
console.log(`type of age: ${typeof(age)}`)
console.log(`type of isApproved: ${typeof(isApproved)}`)
console.log(`type of firstName_: ${typeof(firstName_)}`)
console.log(`type of lastName_: ${typeof(lastName_)}`)

// Object
let person = {
    name: "Naruto Uzumaki",
    age: 13,
    village: "Hidden Leaf"
};
console.log(`\n person: ${person}`)
console.log(`name of the person: ${person.name}`)
console.log(`age of the person: ${person.age}`)
console.log(`name of the person: ${person['name']}`)
console.log(`age of the person: ${person['age']}`)

// Arrays
let selectedColors = ['red', 'blue'];
console.log(`length of the array: ${selectedColors.length}`)
console.log(`selected colors: ${selectedColors}`)
console.log(`first selected colors: ${selectedColors[0]}`)
console.log(`second selected colors: ${selectedColors[1]}`)
selectedColors[2] = 'green'
console.log(`third selected colors: ${selectedColors[2]}`)
console.log(`length of the array: ${selectedColors.length}`)

// Functions
function greet(person) {
    console.log(`Namastey ${person.name} of ${person.village}!`);
}
greet(person);

function sqaure(number) {
    return number * number
}
let number = 45
let spquared_number = sqaure(number);
console.log(`sqaure of ${number}: ${spquared_number}`)