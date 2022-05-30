 // ex1 Crystal Gazer
 function crystalGazer(childrenNum, partnerName, location, jobTitle) {
     let result = `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${childrenNum} kids.`;
     console.log(result);
 }
 crystalGazer(3, "Doe", "New York", "Develover");
 // ex2 Age Calculator
 //  function ageCalculator(birthYear, currentYear) {
 //      let age = currentYear - birthYear;
 //      console.log(`You are either ${age - 1} or ${age}`);
 //  }
 //  ageCalculator(2022, 1992);
 //OUTPUT: You are either -30 or -31!!!! WHY?

 function ageCalculator(born, current) {
     let age = current - born;
     return `You are either ${age-1} or ${age}`;
 }
 console.log(ageCalculator(1992, 2022));

 // ex3 Age Calculator-improved
 function ageCalc(birth) {
     let currently = new Date();
     let age1 = currently.getFullYear() - birth; // getFullYear not just getYear
     return `You are either ${age1-1} or ${age1}`
 }
 console.log(ageCalc(1992));

 function ageCalcImp(born) {
     let current = new Date;
     let age = current.getFullYear() - born;
     return `You are either ${age-1} or ${age}`;
 }
 console.log(ageCalcImp(1992));

 let now = new Date();
 console.log(now.getDate());
 console.log(now.getMonth() + 1);
 const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 console.log(month[now.getMonth()]);

 // ex4 Degree-Radian Conversion
 function degreeConversion(degrees) {
     let radians = degrees * (Math.PI / 180);
     return radians;
 }
 console.log(degreeConversion(90))

 //ex5 Area and Volume of a box
 function box(width, height, depth) {
     let area = width * height;
     let volume = width * height * depth;
     return [area, volume];
 }
 console.log(`The area of the box is: ${box(2,7,5)[0]}`);
 console.log(`The volume of the box is: ${box(2,7,5)[1]}`);

 //  console.log(`The area of the box is: ${box(5,5,5)[0]}`);
 //  console.log(`The volume of the box is: ${box(5,5,5)[1]}`);