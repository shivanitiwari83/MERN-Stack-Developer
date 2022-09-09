console.log("Hello JavaScript!");
b = "some string";
console.log(b);
age = 30;
console.log(age);
console.log( typeof(age));
if(age >=18){
    console.log('you are eligible for DL');
    g = "this should be global";
    let x = "this hsould be local";
    const y= "this should be local and constant";
    var z = "this work for function";
    // y = "another value of y";

    console.log(x);
    console.log(y);
    


}else{
    console.log('not eligible');
}
// WAP to check if a number is divisible by  7and 11
num = 77;
if(num%11==0 && num%7==0) {
    console.log('its divible');
     g = "this should be global";


}
else {
    console.log('its not divible');

}
console.log(g);
console.log(z);

// console.log(x);
// console.log(y);



// num = 68;
// if (num%7==0 && num%11==0 )
// {
//     console.log('its divisible by 7 and 11 ');

// }else if ( num % 7 == 0 && !(num%11==0))
// {
//     console.log('its divisible by 7  but not by 11 ');
// }
// else if (! (num % 7 == 0) && num%11==0)
// {
//     console.log('its not divisible by 7  but devided by 11 ');
// }
// else {
//     console.log('neither divisible by 7  nore by 11 ');
// }