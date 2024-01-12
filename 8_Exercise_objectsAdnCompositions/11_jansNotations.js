function solve(array) {
    let operands = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            operands.push(array[i]);
        } else {
            if (operands.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let secondOperand = operands.pop();
            let firstOperand = operands.pop();

            switch (array[i]) {
                case "+":
                    operands.push(firstOperand + secondOperand);
                    break;
                case "-":
                    operands.push(firstOperand - secondOperand);
                    break;
                case "*":
                    operands.push(firstOperand * secondOperand);
                    break;
                case "/":
                    operands.push(firstOperand / secondOperand);
                    break;
                default:
                    console.log("Invalid operation");
                    return;
            }
        }
    }

    if (operands.length === 1) {
        console.log(operands[0]);
    } else {
        console.log("Error: too many operands!");
    }
};

//Second solution, using object
function solve(input) {
    let stack = {
        operands: [],
        push: function(item) {
            this.operands.push(item);
        },
        pop: function() {
            if (this.operands.length === 0) {
                return 'Error: not enough operands!';
            }
            return this.operands.pop();
        },
        size: function() {
            return this.operands.length;
        }
    };

    for (let item of input) {
        if (typeof item === 'number') {
            stack.push(item);
        } else {
            let secondOperand = stack.pop();
            if (typeof secondOperand === 'string') {
                console.log(secondOperand);
                return;
            }
            let firstOperand = stack.pop();
            if (typeof firstOperand === 'string') {
                console.log(firstOperand);
                return;
            }

            switch (item) {
                case "+":
                    stack.push(firstOperand + secondOperand);
                    break;
                case "-":
                    stack.push(firstOperand - secondOperand);
                    break;
                case "*":
                    stack.push(firstOperand * secondOperand);
                    break;
                case "/":
                    stack.push(firstOperand / secondOperand);
                    break;
                default:
                    console.log("Invalid operation");
                    return;
            }
        }
    }

    if (stack.size() === 1) {
        console.log(stack.pop());
    } else if (stack.size() > 1) {
        console.log("Error: too many operands!");
    }
}

solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([15,'/'])