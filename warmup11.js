/**
 * 1 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @function objSort
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */


function objSort(array) {
    return array.sort((a, b) => a.id - b.id)
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
  let obj={}
  obj.counter=0,
  obj.up=up,
  obj.down=down
  return obj
}

let up = function() {
    this.counter++
    return this.counter 
}

let down = function(){
    if(this.counter) {
         this.counter--
    }
   
    return this.counter + " cannot go down"
}
let nassimCount = Counter() // instance 

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

let makeBook =(Title,Author,mSRP,Genre,numOfPages,Description,imageUrl)=>{
    let obj={}
    obj.Title=Title,
    obj.Author=Author,
    obj.mSRP=mSRP,
    obj.Genre=Genre,
    obj.numOfPages=numOfPages,
    obj.Description=Description
    obj.imageUrl=imageUrl
    return obj
}

let harryPotter=makeBook("Harry Potter and the Sorcerer's Stone","J. K. Rowling","$6.08"," fantasy novel",309,"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.","https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg")
let Romeoandjuliet=makeBook("Romeo and Juliet","William Shakespeare","$8.88"," Tragedy",123,"Romeo and Juliet Summary. An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party.","https://cdn.kobo.com/book-images/ca07820a-192c-4ec8-a3a6-684a3a7ee2e3/1200/1200/False/romeo-and-juliet-320.jpg")
let SAIOCP=makeBook("Structure and Interpretation of Computer Programs","Gerald Jay Sussman & Julie Sussman & Hal Abelson","$49.50"," Textbook",657,"SICP focuses on discovering general patterns for solving specific problems, and building software systems that make use of those patterns.","https://m.media-amazon.com/images/I/71noXgc3kgL._AC_UF1000,1000_QL80_.jpg")

function displayBook(book) {
    return `the book's Title is ${book.Title}.His author is ${book.Author}.It's price is ${book.mSRP} and the book genre is ${book.Genre}. It's ${book.numOfPages}pages. and it talks abour ${book.Description}`
}