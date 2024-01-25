/**
 * 1 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @function objSort
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */


function objSort(array){    
}

/**2. write a closure function called Counter that have 2 behaviours and a state to check the counter and when invoked it increase or decrease the counter. 
//!! ps : the function should return an object ! 
ex : let myCount = Counter();
myCount.up() => 1 
myCount.up() => 2 
myCount.down() => 1 
myCount.counter => 1 
**/ 

let Counter = () => {
  
}

// 3. Think about some different attributes of books – what do all books have? Ideas include:

//  Title 
//  Author 
//  MSRP 
//  Genre 
//  Number of Pages 
//  Description
// . In terms of the properties of books that you thought of, represent the following books as data:
//  Harry Potter and the Sorcerer's Stone (J.K. Rowling) 
//  Romeo and Juliet (William Shakespeare) 
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson) 
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors. 
//  Three other books (see this list for ideas)
// You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). 
// Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
// You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).

//  Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way,

// for example:

// var sorcerersStone = { /* ... */ } 
//  function displayBook(book) { 
//        // ... 
//  } 
//  displayBook(sorcerersStone); 
//  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'
