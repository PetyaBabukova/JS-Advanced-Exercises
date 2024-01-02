function solve(array) {
    let sum = 0;
    let inverceSum = 0;
    let concatSum = '';

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        inverceSum += 1 /array[i];
        concatSum += array[i].toString();
        
    }
    console.log(sum);
    console.log(inverceSum);
    console.log(concatSum);
}

solve([2, 4, 8, 16])
