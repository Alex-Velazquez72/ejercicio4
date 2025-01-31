let age = prompt('Enter your age')
let num = parseInt(age)
let falta = 18 - num
switch (true) {
    case num >= 18:
        console.log('You are old enought to drive')
        break;
    case num < 18:
        console.log(`You are left with ${falta} years to drive `)
        break;
    default:
        console.log('Entered value was not a number')
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the
// result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 19
let yourAge = parseInt(prompt("Enter your age: "))

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`)
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
} else {
    console.log("We are the same Age")
}

// - If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// ● using if else
// ● ternary operator.

let a = parseInt(prompt("Enter the value of A "))
let b = parseInt(prompt("Enter the value of B"))

if (a > b) {
    console.log(`result with if...else: ${a} is greater than ${b}`)
} else {
    console.log(`result with if...else: ${a} is less than ${b}`)
}

let result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`
console.log("result with ternary operator " + result)

// 4.- Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
// ● Septiembre, Octubre o Noviembre, la temporada es Otoño.
// ● Diciembre, Enero o Febrero, la temporada es Invierno.
// ● Marzo, Abril o Mayo, la temporada es Primavera
// ● Junio, Julio o Agosto, la temporada es Verano

let month = prompt("Enter a month: ").toLowerCase()

if (month === "september" || month === "october" || month === "november") {
    console.log("The season is Autumn.")
} else if (month === "december" || month === "january" || month === "february") {
    console.log("The season is Winter.")
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring.")
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer.")
} else {
    console.log("Please enter a valid month.")
}


// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
// ● 80-100, A
// ● 70-89, B
// ● 60-69, C
// ● 50-59, D
// ● 0-49, F

let score = parseInt(prompt("Enter the student's score:"))

if (score >= 80 && score <= 100) {
    console.log("Grade: A")
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B")
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C")
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D")
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F")
} else {
    console.log("Please enter a valid score between 0 and 100.")
}

