// 1. How to declare a variable using let and const
const fatherName = "Ibrahim";
let season = 'winter';
season = 'spring';

// Avoid var declaration


// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||
if(fatherName !== 'Ibrahim' || season === 'winter') {
    console.log('Conditions met.');
} else if (fatherName === 'Ibrahim') {
    console.log('Else conditions met too');
} else {

}


// 3. array declare
// index, 
// length, push, 
const years = [2022, 2023, 2024];
years[0] = 2000;
years.push(2025);
console.log(years);

// 4. for loop 
for (let index = 0; index < years.length; index++) {
    const element = years[index];
    console.log(element);
}

// 5. function 
function multiply(num1, num2) {
    return num1*num2;
}

// 6. Object
const student = {
    name: 'Faisal Khan',
    age: 32,
    books: ['Bhooter Baccha Jafor E Bal', 'Pore gelo ICT Polok']
}

const propertyName = 'books';

// 3 ways to access property by name 
console.log(student.name); // Dot notation, direct by property
console.log(student['age']);
console.log(student[propertyName]);
