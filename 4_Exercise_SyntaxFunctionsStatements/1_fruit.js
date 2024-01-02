function solve(fruit, weight, price) {
    let fruitType = fruit
    let convertedWeight = (weight/1000)
    let money = (convertedWeight * price);

    console.log(`I need $${money.toFixed(2)} to buy ${convertedWeight.toFixed(2)} kilograms ${fruitType}.`);
};

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);

