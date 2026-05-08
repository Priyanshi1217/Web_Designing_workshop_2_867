let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
console.log(numbers[3]); // 4

// Mixed Array
let mixedArray = [1, "Hello", true, { name: "Alice" }, [1, 2, 3]];

console.log(mixedArray[0]); // 1
console.log(mixedArray[1]); // Hello
console.log(mixedArray[2]); // true
console.log(mixedArray[3]); // { name: "Alice" }
console.log(mixedArray[4]); // [1,2,3]

// Length of array
console.log(numbers.length); // 5


// Normal function with no parameters
function greet() {
    console.log("Hello, World!");
}

greet(); // Hello, World!


// Normal function
function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 2)); // 20


// Function expression
let divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2)); // 5


// Function expression for addition
let add = function(a, b) {
    return a + b;
};

console.log(add(5, 7)); // 12


// Arrow function with no parameters
let sayHi = () => console.log("Hi!");

sayHi(); // Hi!


// Arrow function with single parameter
let square = x => x * x;

console.log(square(4)); // 16


// Arrow function with parameter
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};

greetUser("Alice"); // Hello, Alice!


// MAP on Array
let newarray = [1, 2, 3, 4, 5];

let squaredArray1 = newarray.map((num) => num * num);

console.log(squaredArray1); // [1,4,9,16,25]


// Another map example
let multipliedArray = newarray.map((num) => num * 5);

console.log(multipliedArray); // [5,10,15,20,25]


// FILTER on Array
let evenNumbers = [1, 2, 3, 4, 5];

let filteredEvenNumbers = evenNumbers.filter(
    num => num % 2 === 0
);

console.log(filteredEvenNumbers); // [2,4]


// REDUCE on Array
let sum = [1, 2, 3, 4, 5];

let total = sum.reduce(
    (accumulator, currentValue) =>
        accumulator + currentValue,
    0
);

console.log(total); // 15


// MAP, FILTER, REDUCE on Object Array
let student = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];


// MAP to get marks
let marks = student.map(student => student.marks);

console.log(marks); // [85,92,78]


// MAP to get names
let names = student.map(student => student.name);

console.log(names); // ["Alice","Bob","Charlie"]


// FILTER students with marks > 80
let topStudents = student.filter(
    student => student.marks > 80
);

console.log(topStudents);


// REDUCE to get total marks
let totalMarks = student.reduce(
    (acc, student) => acc + student.marks,
    0
);

console.log(totalMarks); // 255