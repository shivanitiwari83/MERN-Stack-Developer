// functions are reusable blocks of which can be 
// called anywhere in program
function addNums(a,b){
    console.log(a, b);
       var c = a+b;
    console.log(c);

}
addNums(34,56);
// console.log(c);
//if parameter are not defined in funtion

// addNums(573);
// console.log(a);
const prodNums = function(x,y){
    console.log(x*y);
    return x*y;
    // console.log("what will happen");// unreachable code
}
   
    
  
// prodNums(36, 62);
const res = prodNums(36,62);
console.log(res);


const sumProd = (a, b) => {
    const sum = a+b;
    const prod = a*b;
     
    return [sum, prod];
}
 
const [s, p]= sumProd(2345, 345);
console.log(s, p);





