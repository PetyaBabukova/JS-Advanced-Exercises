function solve(array) {
    let firstNum = (array.sort((a,b)=>a-b))[0];
    let secondNum = (array.sort((a,b)=>a-b))[1];

    console.log(firstNum, ' ', secondNum);
}

solve([30, 15, 50, 5])