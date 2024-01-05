function solve(array) {
    let result = [];
    let output = [];


    for (let i = 1; i < array.length; i += 2) {
        result.push(array[i]);
    };

    result.reverse();
    result.map(x => {
        output.push(x * 2)
    })

    console.log(output.join(' '));
};

solve([10, 15, 20, 25])