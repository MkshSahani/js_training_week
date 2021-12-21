// conditional_operator 

/*
    simple programs to demostrate the conditional 
*/

function print_data(number) {
    console.log("number"); 
    console.log("is"); 
    console.log(number); 
}

var age = 19; 
if(age > 18) {
    console.log("You are eligible"); 
} else {
    console.log("You are not Eligible");
}

console.log("----------------------------------------------")
var check = 5; 

switch(check) {
    case 1: 
        print_data(1); 
        break; 
    case 2: 
        print_data(2); 
        break; 
    case 3: 
        print_data(3); 
        break; 
    case 4: 
        print_data(4); 
        break; 
    default: 
        print_data(null); 
        break; 
}