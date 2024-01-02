function solve(type, weight, price) {
    let convertedWeight = (weight/1000).toFixed(2)
    let result = (convertedWeight * price).toFixed(2);

    console.log(`I need $${result} to buy ${convertedWeight} kilograms ${type}.`);
};

solve('apple', 1563, 2.35);

