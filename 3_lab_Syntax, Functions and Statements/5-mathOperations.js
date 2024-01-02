function solve(firstNum, secondNum, operand) {
    let result;

    switch (operand) {
        case '+':
            result = firstNum + secondNum
            break;

        case '-':
            result = firstNum - secondNum
            break;

        case '*':
            result = firstNum * secondNum
            break;

        case '/':
            result = firstNum / secondNum
            break;

        case '%':
            result = firstNum % secondNum
            break;

        case '**':
            result = firstNum ** secondNum
            break;

        default:
            result = 'Invalid operand'
            break;
    }

    console.log(result);
};

solve(5, 6, '+');
solve(3, 5.5, '*');
solve(3, 5.5, 'pesho');