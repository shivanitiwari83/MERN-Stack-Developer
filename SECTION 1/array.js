// 1. arrrays  can contain similar and multiple dataatype 
// 2. arrays are dynamic - can change size
// 3. arrrays support indexing and slicing.


const nums = [1, 2, 4, 8, 3, 5, true, 'nice'];
console.log(nums);

const fruits = ['apple', 'banana', 'orange', 'grapes', 'mango' ];
console.log(fruits);

// indexing 
console.log(fruits[3]);

//this will be undefined
console.log(fruits[10]);

//slicing
console.log(fruits.slice(1,4));
console.log(fruits.slice(1));
console.log(fruits.slice(1,10));

// adding elementto array
fruits.push('cherry');
console.log(fruits);

// removing element from array
// 1. pop() - removes last element 
console.log(fruits.pop());
console.log(fruits);

//2. splice() - removes elemnet from array
fruits.splice(2,3);
console.log(fruits);













