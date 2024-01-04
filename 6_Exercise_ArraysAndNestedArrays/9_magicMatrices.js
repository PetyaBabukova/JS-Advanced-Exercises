function solve(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0); // Sum of the first row
  
    // Check if all rows sum up to the first row's sum
    for (let row of matrix) {
      if (row.reduce((a, b) => a + b, 0) !== sum) {
        return false; // If a row doesn't match the sum, it's not a magic matrix
      }
    }
  
    // Check if all columns sum up to the first row's sum
    for (let col = 0; col < matrix[0].length; col++) {
      let colSum = 0;
      for (let row = 0; row < matrix.length; row++) {
        colSum += matrix[row][col];
      }
      if (colSum !== sum) {
        return false; // If a column doesn't match the sum, it's not a magic matrix
      }
    }
  
    // If we haven't returned false by now, it's a magic matrix
    return true;
  }

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );