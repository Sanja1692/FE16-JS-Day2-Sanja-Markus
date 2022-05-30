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

function toUpper(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
}
console.log(toUpper("this is a test"));

//ex2 Average Grade

function grades(math, physics, english) {
    let sum = math + physics + english;
    let avg = sum / 3;
    return [sum, avg];
}
console.log(`The SUM of the grades is ${grades(4,3,5)[0]} and the average is ${grades(4,3,5)[1]}.`)

//same with IF
function avgGrade(x, y, z) {
    if (Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)) {
        let sum = x + y + z;
        let avg = sum / 3;
        let result = [sum, avg];
        console.log("Sum: " + result[0], "Avg: " + result[1]);
        return result;
    } else {
        return console.log("Something went wrong");
    }
};

avgGrade(5, 6, 7);