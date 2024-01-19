//1.Write a function to print all the even numbers befor the given parameter.

let printEven =(num) => {
    for (let i = 2; i < num; i += 2) {
        console.log(i);
    }
   
}


//2.Write a function to find the power of a number using a for loop.


function findPower(base, exponent) {
    {
if (exponent===0)
return 1
}
let result = 1
for (let i = 1; i <=exponent ; i++) {
    result *=base  
}
return result
}


//3.Write a function called sumOfFirstAndLast that 
//takes a number as a parameter and returns the sum of the first and last digits.
// Please do this without turning the number into a string.

function sumOfFirstAndLast(number) {
// num % 10 ----> last Digit
// Math.floor num/10 -----> first Digit
}


//4.Write a function called multiplyBy10NTimes that takes two numbers as parameters and 
// returns the first number multiplied by 10 the amount of times indicated by the second number.

function multiplyBy10NTimes(num, n) {
let result =num
for (let i = 1; i <=n; i++) {
     result *= 10

}
return result
} 
