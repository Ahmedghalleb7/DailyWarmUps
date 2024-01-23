// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
<<<<<<< HEAD
	// write yourcode 
	return firstname + " " + lastname
=======
	// return firstname+" "+lastname  
	return firstname.concat(" ", lastname)
>>>>>>> 61d00f2199b91bf11bb38676c16546ef869c691c
}
// function expression 

let myPartnerName = function (firstname, lastname) {
<<<<<<< HEAD
	return firstname + " " + lastname
	//write your code
=======
	return firstname.concat(" ", lastname)

>>>>>>> 61d00f2199b91bf11bb38676c16546ef869c691c
}

// arrow function 

<<<<<<< HEAD
let PartnerName2 = (firstname, lastname) => {
	return firstname + " " + lastname
	// write your code 
}
=======
let PartnerName2 = (firstName, lastName) => firstName.concat(" ", lastName)
>>>>>>> 61d00f2199b91bf11bb38676c16546ef869c691c

// 2-create a function that return true 
// if the number 13 is a multiple of 3 and false if not.*//

<<<<<<< HEAD
function MultipleOf13orNot(num1) {
	let num2 = 13
	if (num1 % num2 === 0) {
		return true;
	}
         else {
		return false;
	}
}
//write your code

// function expression 
let MultipleOf13orNot2= function (num1) {
	let num2 = 13
	if (num1 % num2 === 0) {
		return true;
	}
         else {
		return false;
	}
=======
function MultipleOf13orNot() {
	if (13 % 3 === 0) {
		return true
	}
	else { return false }
}
// function expression 
let MultipleOf13orNot = function () {
	if (13 % 3 === 0) {
		return true
	}
	else { return false }
>>>>>>> 61d00f2199b91bf11bb38676c16546ef869c691c
}


// arrow function 
<<<<<<< HEAD
let MultipleOf13orNot3=(num1)=> {
	let num2 = 13
	if (num1 % num2 === 0) {
		return true;
	}
         else {
		return false;
	}
}
// 4-create a function that takes a age as a parametre and return that age in seconds.*//

function AgeInSeconds1(age) {
return age = age*365*24*60*60
	//write your code
=======
let MultipleOf13orNot2 = () => {
	if (13 % 3 === 0) {
		return true
	}
	else { return false }
}

// 4-create a function that takes a age as a parametre and return that age in seconds.*//

function AgeInSeconds(age) {
	return age * 365 * 24 * 60 * 60
>>>>>>> 61d00f2199b91bf11bb38676c16546ef869c691c
}

// function expression
let AgeInSeconds2 = function (age){
	return age = age*365*24*60*60

<<<<<<< HEAD
}


// arrow function 
let AgeInSeconds3 = (age)=>{
	return age = age*365*24*60*60

}
=======
let AgeInSeconds = function (age) {
	return age * 365 * 24 * 60 * 60
}

// arrow function 

let AgeInSeconds1 = age => age * 365 * 24 * 60 * 60
























>>>>>>> 61d00f2199b91bf11bb38676c16546ef869c691c
