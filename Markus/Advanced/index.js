function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

function grades (maths,physics, english) {
    sum = maths+physics+english
    average = sum / 3
    return `Sum: ${sum} <br> Average: ${average}`
}

console.log(capitalizeFirstLetter("i am a web developer"))
document.write(grades(3,4,5));