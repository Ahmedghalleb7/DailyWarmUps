
// - create a data model to represent your classmates
// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.
// - create an array to hold the classmates that you created.
// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
// - calculate the number of male friends that your class have by writing a function called nbOfMale.
// - Write a function searchMates that, given a query and an array of Mates,
//   searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

let classmates = (name, age, sexe, favecolor, fears, allergi) => {
    return {
        name: name,
        age: age,
        sexe: sexe,
        favecolor: favecolor,
        fears: fears,
        allergi: allergi

    }
}
let Sabrine = classmates("Sabrine", 27, "female", "Cyan", "Reptiles", "Smoke")
let Nassim = classmates("Nassim", 25, "Male", "Blue", "Dogs", "Flowers")
let Ahmed = classmates("Ahmed", 26, "Male", "Dark Blue", "Highlands", "Coconut")

let classm = [Sabrine, Ahmed, Nassim]

let displayFriend = (classmate) => {
    return `${classmate.name},is ${classmate.age} YO ,her/his gender is ${classmate.sexe}, her/his favorite color is ${classmate.favecolor}, she/he does fear of ${classmate.fears},and she/he is allergic to ${classmate.allergi}`

}

let addFriend = (mate) => {
    classm.push(mate)
    return classm
}
let nbOfMale = (array) => {
    let count = 0
    for (const e of array) {
        if (e.sexe === "Male"){
         count++
        }
    }
    return count
}

let searchMates = (array, query) => {
    let output = []
    for (const e of array) {
        if (e.name.includes(query)) {
            output.push(e)
        }
    }
    return output
}