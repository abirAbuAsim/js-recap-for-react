// 1. array destructuring
const years = [2024, 2025];
const year1 = years[0];
const year2 = years[1];

// const [y1, y2] = [2024, 2025]; 
const [y1, y2] = years;
// console.log(year1)
// console.log(y1);

function provideYears() {
    return [2020, 2021];
}

const [year2020, year2021] = provideYears();
console.log(year2020);

const student = {
    name: 'Faisal Khan',
    age: 32,
    books: ['Bhooter Baccha Jafor E Bal', 'Pore gelo ICT Polok']
};
const [book1, book2] = student.books;
console.log(book1);

// 2. object destructuring
const {productName, productPrice} = { productName: 'iPhone', productPrice: 100000};
console.log(productName);

const employee = { // Parent Object 
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: { // Nested Object, Child
        height: 66,
        weight: 67,
        address: 'Kumira',
        drink: 'water',
        watch: { // Nested object, Grand Child
            color: 'black',
            price: 500,
            brand: 'garmin' // Grand Grand Child
        }
    }
};

const {designation, languages, specification} = employee;
console.log(designation);
console.log(languages);
console.log(specification);
const {brand} = employee?.specification?.watch;
