/**
 * 1- write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 * @function reverseArray
 * @param {array} array
 * @return {Array}
 */

let reverseArray1=(array)=> {
    let result =[]
    for (let i = 0; i = array.length;i++) {
        result.push(array.pop())
    }
    return result
    }

/**
 * 2 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @function objKey
 * @param {Object} obj
 * @return {Array}
 */

let objKey=(object)=>{
    let result=[]
    for (let key in object) {
        result.push(key)
        
    }
    return result 

}

/**
 * 3 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @function objLength
 * @param {Object} obj
 * @return number
 */
let objLength = (obj) => {
    return Object.keys(obj).length
    
}


/**
 * 4-Given an array of integers and an integer n.
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
let findAll2 = function (array, n) {
  
};






// IMMERCIVE
// 5.Write a function called extend that takes two objects and adds all the properties of the second object to the first object if the property’s key does not already exist.

function extend (object1,object2){

    for(let key in object2){
        if (object1[key]===undefined){
        object1[key]=object2[key]
    }

    }
    return object1
    
}