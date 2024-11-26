"use strict";
function performOperation() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = multiply(num1, num2);
        displayResult(String(result));
    }
    else {
        displayResult("Please enter valid numbers");
    }
}
function multiply(num1, num2) {
    debugger;
    return num1 * num2;
}
function displayResult(result) {
    let inputResult = document.getElementById('result');
    const resultEle = inputResult;
    resultEle.textContent = `The result is: ${result}`;
}
