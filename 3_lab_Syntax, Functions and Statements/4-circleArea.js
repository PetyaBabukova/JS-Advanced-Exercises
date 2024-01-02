function solve(input) {
    let result;
    if (typeof(input) === 'number') {
        result = (input**2 * Math.PI).toFixed(2);
    } else{
        let type = typeof(input)
        result = `We can not calculate the circle area, because we receive a ${type}.`
    }

    console.log(result);
}

solve(5)
solve('name')