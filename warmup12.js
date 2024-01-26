 // Write a JavaScript function that will iterate from n to 0. For each iteration,
 // it will check if the current number is odd or even, and display a message to the screen.
 // iterateAndLog(3); =>
 // Sample Output :
 // "2 is even"
 // "1 is odd"
 // "0 is even"

function iterateAndLog(n) {

  // TODO: your work goes here
let result =""
for (let i = n; i>0; i--) {
  if (i%2===0){
    result +=i+" is even"
  }
  else result += i+ " is odd"
  
  
}
return result
}

 // RECURSIVELY
 // Write a JavaScript program to get the first n Fibonacci numbers
 // That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
 //  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
 //  with the exception of the first two: fib(0) and fib(1). More succinctly,
 //  fib(0) is 1
 //  fib(1) is 1
 //  fib(n) is fib(n - 1) + fib(n - 2)
 //  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
 

function fib(number) {

  // TODO: your work goes here

}


// The Reading List 
// An object-oriented book-list!

// Create a class BookList

// Create another class called Book

// BookLists should have the following properties:

// Number of books marked as read
// Number of books marked not read yet
// A reference to the next book to read (book object)
// A reference to the current book being read (book object)
// A reference to the last book read (book object)
// An array of all the Books
// Each Book should have several properties:

// Title
// Genre
// Author
// Read (true or false)
// Read date, can be blank, otherwise needs to be a JS Date() objectLinks to an external site.
// Every Booklist should have a few methods:

// .add(book)
// should add a book to the books list.
// .finishCurrentBook()
// should mark the book that is currently being read as "read"
// Give it a read date of new Date(Date.now())
// Change the last book read to be the book that just got finished
// Change the current book to be the next book to be read
// Change the next book to be read property to be the first unread book you find in the list of books
// Booklists and Books might need more methods than that. Try to think of more that might be useful.


let Book=()=> {
 prop(title,genre,author,read,readDate)
    this.title=title
    this.genre=genre
    this.author=author
    this.read=false
    this.readDate=""
  }

let BookList=()=> {
prop()
  this.readBooks=0
  this.unreadBooks=0
  this.nextBook=[]
  this.currentBook=[]
  this.lastBook=[]
}
