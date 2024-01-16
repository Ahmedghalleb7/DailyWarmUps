/**
 * 1 Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "fr", "es", "en")
 * returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 * ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *    helloWorld('es') ==> 'Hola, Mundo'
 *    helloWorld('') ==> 'Hello, World'
 *
 * @function helloWorld
 * @param {string} str
 * @return {string}
 */

let helloWorldzz=(str)=>{
        if (str==="fr") {
          return 'Bonjour tout le monde' ;  
        } 
        else if (str==="es") {
          return 'Hola, Mundo';
        }
         else if (str==="en") {
          return 'Hello, World';
        } else {
          return 'choos a valid language';
        }
      }



/**
 * 2 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 * followed by a number starting from zero(solve it using while loop).
 * example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */


function reverseStr(str){
}

/**
 * 3 Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */

let laugh = (num)=> {
    const word = ("ha");
   return (` ${word.repeat(num)}`)
} 