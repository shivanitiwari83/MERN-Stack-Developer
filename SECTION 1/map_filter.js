const nums = [34, 6, 23, 67, 4, 7, 2];


//WAP to square all the number and store in a new array - [34, 6,23,67,4,7,2].
let newArr = [];
for (let i of nums) {
    console.log(i);
    newArr.push(i * i);

}
console.log(newArr);





// MAP is a function of array that returns a new array
const newNums = nums.map((n) => { return n ** 2 });
console.log(newNums);


//const nums = [ 34, 6, 23, 67,4, 7, 2];     
// WAP tp generate array like this
// ['₹34', '₹6', '₹23','₹67', '₹4', '₹7', '₹2']
const prices = nums.map((n) => { return '₹' + n });
console.log(prices);

// create a new array where if a numnber is even , it is divide by 2
// if number is odd , it is multiplied by 2
// const result = nums.map( (n) =>  {
// if(n%2==0){
// return n/2;
// }else{ 
//     return n*2;
// }
// }
// );
// console.log(result);

const numbers = nums.map((n) => {
    if (n % 2 === 0) return n / 2;
    else return n * 2;
}

)




const numbersv2 = nums.map((n) => {
    return n % 2 == 0 ? n / 2 : n * 2;

})






const numbersv3 = nums.map(n => (n % 2 === 0 ? n / 2 : n * 2));

console.log(numbersv2);

console.log(nums);

const newArr2 = [];
for (let i of nums) {
    if (i % 2 == 0) {
        newArr2.push(i);

    }
}
// console.log(newArr2);

//filter is function of array that return a new array
const filNumsEven = nums.filter((n) => { return n % 2 == 0 });
const filNumsOdd = nums.filter((n) => (n % 2 != 0));

console.log(filNumsEven, filNumsOdd);

// WAP to filter greater than 100 : [985, 25, 52, 67,25, 774, 233]
// WAP to filter greater than 100 : ['₹985','₹25','₹52','₹67','₹25','₹774','₹233']
//hint:// console.log('₹985'.substring(i));
// console.log(100 < '₹985');

let pricesArr = ['₹985', '₹25', '₹52', '₹67', '₹25', '₹774', '₹233'];

const filPrice = pricesArr.filter((p) => { return p.substring(1) > 100 });
console.log(filPrice);

let brands = ['asus', 'lenovo', 'dell', 'hp', 'apple', 'microsoft'];
let search = 'asus';

const filBrands = brands.filter((b) => { search == b })

console.log(filBrands);
console.log('Mubassir'.toLowerCase());
console.log('Mubassir'.includes('be'));





















