function solve(array, n) {
    let result = array.slice()
    for (let i = 0; i < n; i++) {
        let currentElement = result.pop()
        result.unshift(currentElement)
    }

    console.log(result.join(' '));
};

solve(['1', 
'2', 
'3', 
'4'], 
2
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);