function performOperation(): void{


    let input1 = document.getElementById('input1') as HTMLInputElement;
    let input2 = document.getElementById('input2') as HTMLInputElement;


    let num1 : number = parseInt(input1.value);
    let num2 : number = parseInt(input2.value);

    if (!isNaN(num1) && !isNaN(num2)){
        let result : number = multiply(num1,num2);

        displayResult(String(result));
    }else{
        displayResult("Please enter valid numbers");
    }

}

function multiply(num1 : number, num2: number): number{
    debugger;

    return num1*num2;
}

function displayResult(result: String){
    let inputResult = document.getElementById('result') as HTMLInputElement;
    const resultEle = inputResult;
    resultEle.textContent = `The result is: ${result}`;
}