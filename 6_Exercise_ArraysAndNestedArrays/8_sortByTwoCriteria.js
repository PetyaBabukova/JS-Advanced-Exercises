function solve(array) {
    array.sort((a, b) => {
      // Compare by length
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      // If lengths are equal, compare alphabetically (case-insensitive)
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });
  
    // Print each element on a new line
    array.forEach(element => console.log(element));
  }

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)