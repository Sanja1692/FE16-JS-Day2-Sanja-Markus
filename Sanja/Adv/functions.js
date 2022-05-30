//Time Convert
function convert(minutes) {
    const hour = Math.floor(minutes / 60);
    return [hour, minutes];
}
console.log(convert(90))

// function timeConvert(minutes) {
//     hours = Math.floor(minutes / 60);
//     restOfMinutes = minutes % 60;
//     return (minutes + " minutes" + " = " + hours + " hour(s) and " + restOfMinutes + " minutes.");
//   }

//   console.log(timeConvert(200));

//Seconds
function calcTime(totalSeconds) {
    let week = Math.floor(totalSeconds / 604800);
    let day = Math.floor((totalSeconds % 604800) / 86400);
    let hour = Math.floor(((totalSeconds % 604800) % 86400) / 3600);
    let min = Math.floor((((totalSeconds % 604800) % 86400) % 3600) / 60);
    let sec = Math.floor((((totalSeconds % 604800) % 86400) % 3600) % 60);
    let result = [week, day, hour, min, sec];
    console.log(totalSeconds + " seconds = week(s): " + week + ", day(s): " + day + ", hour(s): " + hour + ", minute(s): " + min + ", second(s): " + sec);
    return result;
}
calcTime(51561651);

// Input num_sec

// min = num_sec / 60;
// hours = num_sec / (60 * 60);
// days = num_sec / (60 * 60 * 24);
// weeks = num_sec / (60 * 60 * 24 * 7);
// rest = sec;

// OUTPUT  weeks:days:hours:minutes:seconds