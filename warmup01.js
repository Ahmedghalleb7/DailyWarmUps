// 1-using + operator create a function that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
	// write yourcode 
	return firstname + " " + lastname
}
// function expression 

let myPartnerName = function (firstname, lastname) {
	return firstname + " " + lastname
	//write your code
}

// arrow function 

let PartnerName2 = (firstname, lastname) => {
	return firstname + " " + lastname
	// write your code 
}

// 2-create a function that return true if the number 13 is a multiple of 3 and false if not.*//

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
}


// arrow function 
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
}

// function expression
let AgeInSeconds2 = function (age){
	return age = age*365*24*60*60

}


// arrow function 
let AgeInSeconds3 = (age)=>{
	return age = age*365*24*60*60

}