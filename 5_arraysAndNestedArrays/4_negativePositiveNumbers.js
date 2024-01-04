function solve(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i];

        if (current < 0) {
            // result.splice(0, 0, current)
            result.unshift(current)
        } else {
            result.push(current)
        }
        
    }

    console.log(result);
};

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);