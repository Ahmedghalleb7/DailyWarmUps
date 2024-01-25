//1- write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr2(str){
    let output =""
    let container=[];
    let words = str.split(" ")
    for (let i = words.length-1; i >= 0; i--) {
        container.push(words[i]+" ");    
    }
    
    for (let i = 0 ; i<container.length; i++){
        output+=container[i]
    }

    return output
 } 

//  function reverseStr1(str){
//     let output=""
//     let container=[];
//     let words=""
//     for (let i =0; i<str.length,i++)
//     if (i===str.length-1){
//         words+=str[i]
//         container.push(words)
//     }
// else if (str[i]===" "){
//     container.push (words," ")

// }
//  }



/**
 *2- Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */ 

let findAll = function (array, n) {
 let arr=[]
 for (let i=0 ; i<array.length;i++){
    if (array[i]=== n){
        arr.push(i)
    }

 }
 return arr
};


/**
 * 4 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @function objSort
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */


function objSort(array){
    return array.sort((a,b)=>a.id-b.id)
    }



/** write a closure function called Counter that have 2 behaviours and a state to check the counter and when invoked it increase or decrease the counter. 
//!! ps : the function should return an object ! 
ex : let myCount = Counter();
myCount.up() => 1 
myCount.up() => 2 
myCount.down() => 1 
myCount.counter => 1 
**/ 

let Counter1231 = () => {
  
}

