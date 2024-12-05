const student = {
    name: 'Faisal Khan',
    age: 32,
    books: ['Bhooter Baccha Jafor E Bal', 'Pore gelo ICT Polok']
};

// 1. template string [more easy to pronounce] / String interpolation
const about = `My name is ${student.name}, age of ${student.age} years and favorite books are ${student.books[0]} and ${student.books[1]}`;
console.log(about);

// Regular Function
function multiply(num1, num2) {
    return num1*num2;
}

// 2. arrow function
const getFortyFour = () => 44; // Without any arguments
console.log(getFortyFour()); 

const addTaka = taka => 100 + taka; // With single argument
console.log(addTaka(50));

const isEven = number => number % 2 == 0; // Single Conditions in return statement
console.log(isEven(24)); 

// Multiple statements after arrow 
const doComplexOperation = (num1, num2, num3) => {
    if(isEven(num1)) {
        return num1 + num2 * num3;
    } else {
        return num2 * num3;   
    }
};
console.log(doComplexOperation(2, 3, 5));

// spread operator
const numbers = [89, 35, 98, 12];
const newNumbers = [...numbers];


// create a new array from an older array and add an element
numbers.push(99);
newNumbers.push(99);

console.log(numbers);
console.log(newNumbers);


// Rest operator
function sum(...numbers) {
    console.log(numbers[0]);
    return numbers;
}

console.log(sum(100, 200, 300));