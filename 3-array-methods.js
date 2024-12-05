const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// 1. map
// returns a new array
const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

// 2. forEach
products.forEach(product => {
    // console.log(product);
});

// 3. filter
const sostaProducts = products.filter(product => product.price <= 4000);
console.log(sostaProducts);

const specificNames = products.filter(product => product.name.includes('n'));
console.log(specificNames);

//4. find
const firstFoundItem = products.find(product => product.name.includes('n'));
console.log(firstFoundItem); 

