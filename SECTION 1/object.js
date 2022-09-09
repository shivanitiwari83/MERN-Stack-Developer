let a = 10;
let arr = [23, 42, 1, 4, 5];
//let student ={ 'Raju' ,  5, 47638};
let stu = { name: 'Raju', age: 5, 'roll no': 47638 };

console.log(stu);
console.log(stu.name);
console.log(stu['roll no']);
console.log(stu['age']);

console.log(stu.address);

//this will add a new key and value 
stu.address = 'Bangalore';

stu.age = 30;

console.log(stu);

const product = {
    name: 'Laptop',
    price: 40000,
    colors: ['Black', 'White', 'Red', 'Blue'],
}

console.log(product.colors[1]);

const orders = [
    { id: 1456, product: 'Laptop', price: 40000 },
    { id: 2563, product: 'Mobile', price: 30000 },
    { id: 3845, product: 'Tablet', price: 20000 },
]
// 2nd oreder product name 
//this code is in written in a Destructing Assignment
console.log(orders[1].product);

const { age, address, sname } = stu;

console.log(age, address, sname);


//rolNo
//thisCalledCamelCase

const brand = 'Samsung';
const price = 40000;
const model = 'Note 9';
const rating = 5.6;

const mobile = { brand, price, model, rating };
console.log(mobile);

mobile.brand = 'Apple';
console.log(mobile);

//Inbuilt/Predefined     Object.Function(Object)
console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));

// var add = 0;
// for (let n of orders) {
//     add = add + n.price; // {add += n.price}  
// }
// console.log(add);

//traverse the array

let s = 0;
for(let temp of orders){
    console.log(temp.price);
    s+=temp.price;
};

console.log(s);

//reduce
let prices = orders.map( ord => ord.price)
console.log(prices);
const sum = prices.reduce( (p1,p2) => { return p1+p2} )
console.log(sum);











