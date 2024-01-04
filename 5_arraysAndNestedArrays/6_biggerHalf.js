function solve(array) {
    let sorted = array.sort((a, b) => a - b);
    let half = array.length / 2;
    let result = sorted.slice(half);

    return result;
};

solve([3, 19, 14, 7, 2, 19, 6]);
solve([4, 7, 2, 5])