function solve(a, b) {
    for (let i = a; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            console.log(i);
            return;
        }
    }
}

// // The version from the exercise
// function solveWhile(a, b) {
//     let firstNum = Number(a);
//     let secondNum = Number(b);

//     while (firstNum !== secondNum) {
//         if (firstNum > secondNum) {
//             firstNum -= secondNum
//         } else {
//             secondNum -+ firstNum
//         }
//     }


//     if (firstNum > secondNum) {

//     }

// }

solve(2154, 458)