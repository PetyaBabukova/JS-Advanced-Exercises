function solve(array) {
    array.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      return a.localeCompare(b);
    });
  
    array.forEach(element => console.log(element));
  }

  // function solve(array) {
  //   array.sort((a, b) => {
  //     if (a.length !== b.length ) {
  //       return a.length - b.length || a.localeCompare(b);
  //     }
      
  //   });
  //   array.forEach(element => console.log(element));
  // }

// solve(['alpha', 'beta', 'gamma'])
// solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
solve(['test', 'Deny', 'omen', 'Default'])