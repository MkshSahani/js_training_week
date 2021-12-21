// variable lession for javascript 

function check_scope(data1, data2, data3) {
    console.log(data1 + " " + data2 + " " + data3); 
    data2 = "changed_value"; 
    // let's change some data; 
    string_data = "check";
    return true; 
}

var number = 23; 
var string_data = "string"; 
var float_data = 23.11; 
console.log(number); 
console.log(string_data);
console.log(float_data) 

check_scope(number, string_data, float_data);
check_scope(number, string_data, float_data); 

number *= number 
float_data += 1 
number >>>= 1 

console.log(number)
console.log(float_data)

var check_bool = !true 
console.log(check_bool)

check_bool = true ^ true 
console.log(check_bool)

check_bool = true && false 
console.log(check_bool)
