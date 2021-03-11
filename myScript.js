// const first = 10;
// const second = 10;
// let theSum;

// if(first !== 10 && second === 10) {
//     theSum = false;
// }else {
//     theSum = true;
// }
// console.log(theSum);

// const sand = 6;
// const stone = 7;
// let cum;

// if(sand == stone){
//     cum = "not smart";
// }else if(stone > sand) {
//     cum = "smart";
// }else {
//     cum = "ooin";
// }
// console.log(cum);
// // sand == stone ? console.log("you're smart") : console.log("not smart");

// function firstTest(a1, a2) {
//     return a1 * a2;
// }
// console.log(firstTest(60, 2));

function myMathAssignment(num1, num2, word) {
    if (word === "add") {
        return num1 + num2;
    }else if(word === "multiply"){
        return num1 * num2;
    }else if (word === "division") {
        return num1 / num2;
    }
}

console.log(myMathAssignment(23, 24, "division"));



