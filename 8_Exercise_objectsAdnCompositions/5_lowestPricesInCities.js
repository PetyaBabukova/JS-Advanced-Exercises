function solve(input) {
    let products = {};

    input.forEach(element => {
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!products[product] || products[product].price > price) {
            products[product] = { town, price };
        };
    });

    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    };

};


// solve([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);

solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999'
])