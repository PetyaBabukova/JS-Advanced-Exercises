function solve(input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());

    let sum = firstElement + lastElement;

    return sum;
};

solve(['20', '30', '40'])