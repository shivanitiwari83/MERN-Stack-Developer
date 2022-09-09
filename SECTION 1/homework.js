let num = 2345657;
let reverse = 0;

while (num > 0) {
    console.log(reverse);

    let r = num % 10;
    reverse = reverse * 10 + r;
    num = parseInt(num / 10)
}
console.log(reverse);

//1. WAP to check if a numberr is prime.
//2. WAP to square all the number and store in a new array - [34, 6,23,67,4,7,2].
//3. WAP to find all perfect squares from 1 to 100.
//4. WAP filter all even number and store in a new array -[34, 6, 23,64,4, 7, 2]
//5.

// let y = 15;

// let sqrt = 
for (let i = 1; i <= 100; i++) {
    let start = i ** 0.5
    if (sqrt == parseInt(sqrt)) {
        console.log();

    }
}






x = 0;
y = 1;
console.log(x);
console.log(y);
for (let i = 0; i < 10; i++){
    let temp = x;
x = y;
y = temp + y;
console.log(y);
}


