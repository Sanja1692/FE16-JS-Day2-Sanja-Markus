//ex1 Capitalize 
var capital = (function() { //anonymous JavaScript function
    let string = "i am a web developer.";
    let result = string[0].toUpperCase() + string.slice(1); //first Letter can be writen also: str.charAt(0)
    console.log(result)
}()); //brackets call the function immediately

// ex1
// let upper = (function(){
//     let str = "i am a web developer";
//     let result = str.charAt(0).toUpperCase() + str.slice(1);
//     console.log(result);
// }());

//ex2 Average Grade

function grades(math, physics, english) {
    let sum = math + physics + english;
    let avg = sum / 3;
    return [sum, avg];
}
console.log(`The SUM of the grades is ${grades(4,3,5)[0]} and the average is ${grades(4,3,5)[1]}.`)