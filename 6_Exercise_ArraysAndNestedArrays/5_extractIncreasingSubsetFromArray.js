function solve(array) {
    let result = [array[0]];
    let biggest = array[0]

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        if (current >= biggest) {
            biggest = current;
            result.push(biggest)
        }
    }

    return result;

};

// // Solution from GPT - 80%
// function solve(array) {
//     return array.reduce((result, current) => {
//       if (current > result[result.length - 1]) {
//         result.push(current);
//       }
//       return result;
//     }, [array[0]]);
//   }

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );