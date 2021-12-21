// loops in javascript. 

function isprime(number) {
    for(var i = 2; i <= Math.sqrt(number); i++) {
        if(number % i == 0) {
            return true; 
        }

    }
    return false; 
}

// print prime number from 1 to 100 
var num = 1; 

while(num < 100) {
    if(!isprime(num)) {
        console.log(num); 
    }
    num++; 
}
