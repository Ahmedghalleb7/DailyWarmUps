/**
 * 1 - Complete the function cube that returns the cube of x:
 */
function cube(x) {
    return x**3
}
/**
 * 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the
//   same length, and false otherwise.
 */
function sameLength(str, str1) {
    if (str.length === str1.length) {
      return true
    } else {
      return false
    }
  }

/**
 * 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a 
 * letter grade corresponding to that score.
 */
function scoreToGrade(score){
        if (score >= 90) {
          return 'A';
        } else if (score >= 80) {
          return 'B';
        } else if (score >= 70) {
          return 'C';
        } else if (score >= 60) {
          return 'D';
        } else {
          return 'F';
        }
      }

/**
 4- Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str,
 *  which is the string to be repeated, and count -- a number representing how many times the string str should be 
 * repeated
 * repeatString('dog', 0); // => ''
 * repeatString('dog', 1); // => 'dog'
 * repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
 * repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
 */
function repeatString(string, num) {
    const mood = (string);
   return (` ${mood.repeat(num)}`);
} 
