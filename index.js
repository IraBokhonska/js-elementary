// правильні імена для змінних

const fullName = "Ira Bockhonska";
const surname = "Topolskyy";
const personName = "Alex Black";
const surnameFirstName = "Lee Choe";
const leoGreen = "Leo Green";

/* неправильні імена для змінних

const Personname = "Ira Bockhonska";
const fullname1 = "Max Topolskyy";
const person+name = "Alex Black";
const surnamefirstname = "Lee Choe";
const leogreen = "Leo Green"; */

/*
стилі написання імен змінних

Camel case:  myVariableName.

Upper case: MY_VARIABLE_NAME.
*/ 

const userName = prompt("What is your name?");
alert(`Hello, ${userName}!`);
console.log(`Hello, ${userName}!`);

const userAge = prompt("What is your age?");
alert(`My age is ${userAge}.`);
console.log(`My age is ${userAge}.`);

const lengthSquare = prompt("What is the length of a square side?");
const perimeterSquare = lengthSquare * 4;
alert(`The perimeter of a square is ${perimeterSquare}.`);
console.log(`The perimeter of a square is ${perimeterSquare}.`);

const circleRadius = prompt("What is the radius of a circle?");
const circleArea = 3.14 * circleRadius ** 2;
alert(`The radius of a circle is ${circleArea}.`);
console.log(`The radius of a circle is ${circleArea}.`);

const sumOfDollars = prompt("How many dollars do you have?");
const courseOfEuro = 0.907;
const sumOfEuro = courseOfEuro * sumOfDollars;
alert(`The sum of euro is ${sumOfEuro}€.`);
console.log(`The sum of euro is ${sumOfEuro}€.`);