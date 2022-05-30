function crystalGazer(NumOfChildren, PartnerName, Location, JobTitle) {
    console.log(`You will be a ${JobTitle} in ${Location} and married to ${PartnerName} with ${NumOfChildren} children.`)
}

function ageCalculator(birthYear) {
    var year = new Date().getFullYear();
    var age = year - birthYear
    console.log(`You are either ${age} or ${age-1}`)
}

function DegreesToRadians(degrees) {
    Radiant = degrees * (Math.PI/180)
    console.log(Radiant)
}

function Box (width, height, depth) {
    area = width * height;
    volume = width * height * depth;
    var result = [area, volume];
    return result;
}

crystalGazer(2, "Anna", "Barcelona", "Full Stack Developer")
ageCalculator(1998, 2022)
DegreesToRadians(90)

var box = Box(2,7,5)
console.log(`The area of the box is: ${box[0]}\nThe volume of the box is: ${box[1]}`)