function solve(matrix) {
    let maxNum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentMax = matrix[i].sort((a, b) => b - a)[0]
        if (currentMax>=maxNum) {
            maxNum = currentMax
        }
    }

   
    // console.log(maxNum);
    return maxNum;
};

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);