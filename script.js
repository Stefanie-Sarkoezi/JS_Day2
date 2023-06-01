// IF ELSE:

let age = 25;
let haslicense = false;

// || = oder
// && = und 
// ! vor haslicense = not true = false

if(age >= 18 && haslicense){
    console.log("You are aligible to drive")

}
else if(age < 18 || !haslicense){
    console.log("You are not eligible to drive")

}
else {
    console.log("Please enter a valid age and license status");
}


// SWITCH:

let dayoftheweek = 5;

switch(dayoftheweek){
case 1 :
    console.log("Today is Monday");
break;
case 2:
    console.log("Today is Tuesday");
break;
case 6:
case 7:
    console.log("It is a weekend day")
default:
    console.log("Unknown day of the week");
}


// FUNCTION:

function greet(name="user"){
    console.log(`Hello ${name}`);
}

greet("John")
greet()

// In diesem Fall ist "user" der default Wert!




function calculateArea(length, width) {
    const area = length * width
    console.log(`The area of rectangle is ${area}`);
    return area;
}

const rectangleArea = calculateArea(5,8);
console.log(rectangleArea);



