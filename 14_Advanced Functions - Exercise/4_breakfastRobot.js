function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function restock(ingredient, quantity) {
        ingredients[ingredient] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let required = Object.entries(recipes[recipe]);
        for (let [ing, qty] of required) {
            if (ingredients[ing] < qty * quantity) {
                return `Error: not enough ${ing} in stock`;
            }
        }
        required.forEach(([ing, qty]) => {
            ingredients[ing] -= qty * quantity;
        });
        return 'Success';
    }

    function report() {
        return Object.entries(ingredients)
                     .map(([key, value]) => `${key}=${value}`)
                     .join(' ');
    }

    function manager(commandLine) {
        let [command, item, quantity] = commandLine.split(' ');
        quantity = Number(quantity);

        switch (command) {
            case 'restock':
                return restock(item, quantity);
            case 'prepare':
                return prepare(item, quantity);
            case 'report':
                return report();
            default:
                throw new Error('Invalid command');
        }
    }

    return manager;
}


solution([
    'restock flavour 50',
    'prepare lemonade 4',
    'restock carbohydrate 10',
    'restock flavour 10',
    'prepare apple 1',
    'restock fat 10',
    'prepare burger 1',
    'report',
])

// let manager = solution ();
// console.log (manager ("restock flavour 50")); // Success
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
