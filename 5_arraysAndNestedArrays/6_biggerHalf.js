function solve(array) {
    let sorted = array.sort((a, b) => a - b);
    let half = Math.ceil(array.length / 2);
    let result = array.slice(array[half]);

    console.log(result);
};

solve();