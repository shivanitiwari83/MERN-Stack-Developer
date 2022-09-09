
// for(let i=0; i<20 ;i++){
//     console.log(i);

// }
// WAP to print all even number from 1 to 100

// for(let i=0; i<100; i+=2){
// //     console.log(i)
// // }
// for(let i=1;i<=100;i++){
//     if(i%2==0)
//     console.log(i)

// }
// nums = [5,45,67,23,89,90,43,67];
// for(let n of nums ){
//     console.log(n);


// }
// a =1;
// while(a<10){
//     console.log(a)
//     a++;
// }
// n=8;
// do{
//     console.log(n)
//     // n++;
// }while(n<10);
// n=10;
// do{
//     console.log(n)
//      n++;
// }while(n<10);
// WAP to calculate factorial
let z = 6;
let f = 1;
for(let i=1;i<=z;i++)

{
    f = f*i;

}
console.log(f);


const numbers = [45, 23,67,89,90,43, 73];
//travesing arrays
for(let i=0;i<numbers.length; i++){
console.log(numbers[i]);
}

for(let n of numbers){
    console.log(n);
}

console.log('---forEach---');
numbers.forEach( (a, i) => { console.log(a, i) } );


