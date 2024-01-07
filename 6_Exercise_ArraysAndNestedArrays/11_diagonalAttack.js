function solve(array) {
    let matrix = [];

    while (array.length > 0) {
        matrix.push(array.shift().split(' ').map(Number));
    };

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]
    };

    if (primaryDiagonal === secondaryDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && i + j !== matrix.length - 1) {
                    matrix[i][j] = primaryDiagonal
                }
            }

        }
    }

    matrix.forEach(row => console.log(row.join(' ')))

};

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

// solve(['1 1 1',
//        '1 1 1',
//        '1 1 0'])