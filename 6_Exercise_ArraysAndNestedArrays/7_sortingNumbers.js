function solve(array) {
    let result = array.slice();
    let output = []
    result.sort((a, b) => a - b);
while (result.length>0) {
    output.push(result.shift());
    output.push(result.pop())
}
    return output;
};

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);