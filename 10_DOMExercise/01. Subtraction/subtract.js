function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');

    let firstNumber = Number(firstNumElement.value);
    let secondNumber = Number(secondNumElement.value);

    let subtract = firstNumber - secondNumber

    let result = document.getElementById('result');
    result.textContent = subtract
   
}