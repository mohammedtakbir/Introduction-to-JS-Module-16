// ? Practice problem 1
/* function appleOrange(motherGaveMoney){
    let OangePrice = 400;
    let AppelePrice = 700;
    let total = OangePrice + AppelePrice;
    let ShopkeeperReturn = motherGaveMoney - total;
    return ShopkeeperReturn;
}
let motherGaveMoney = 1900;
let ShopkeeperReturn = appleOrange(motherGaveMoney);
console.log(ShopkeeperReturn); */

// ? Practice problem 2
/* function studentMarks(mark1, mark2, mark3, mark4, mark5){
    let sum = mark1 + mark2 + mark3 + mark4 + mark5;
    let averageMarks = sum / studentMarks.length;
    return averageMarks;
}
let mathmetics=75.25;
let biology=65;
let chemistry=80;
let physics=35.45;
let bangla=99.50;
let averageMarks=studentMarks(mathmetics, biology, chemistry, physics, bangla);
let fixedAverageNumber = averageMarks.toFixed(2);
console.log(parseFloat(fixedAverageNumber)); */


// ? practice problem 3
function concatinate(line1, line2){
    let concatinate = line1 + line2;
    return concatinate;
}
let firstLine='I am going to be';
let seconedLine=' an awesome web developer';
let concatinateTheLine = concatinate(firstLine, seconedLine);
console.log(concatinateTheLine);

// ? practice problem 4

function modulo(numner){
    let divided = 5;
    let reminder = numner % divided;
    return reminder;
}
let numnerSheGave = 119;
let reminder = modulo(numnerSheGave);
console.log(reminder);