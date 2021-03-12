
 myMathAssignment = (numOne, numTwo, aString) => {
    if (aString === "add" && "add"=== "add" ) {
        return numOne + numTwo;
    }else if(aString === "multiply" && "multiply" === "multiply"){
        return numOne * numTwo;
    }else if (aString === "division" && "division" === "division") {
        return numOne / numTwo;
    }else {
        return "please check your letter casing"
    }
}

console.log(myMathAssignment(23, 24, "add"));