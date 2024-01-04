function solve(n, k) {
    let sequence = [1];
  
    for (let current = 1; current < n; current++) {
      let start = Math.max(0, current - k);
      let sum = 0;
      for (let i = start; i < current; i++) {
        sum += sequence[i];
      }
      sequence[current] = sum;
    }
  
    return sequence;
  }

solve(6, 3);