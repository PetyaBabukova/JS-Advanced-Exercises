function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let result = {};

    sorted.forEach(item => {
        let [key, value] = item.split(' : ');
        let firstLetter = key[0];

        // Initialize an object for this firstLetter if it doesn't exist
        if (!result[firstLetter]) {
            result[firstLetter] = {};
        }

        result[firstLetter][key] = value;
    });

    // Output the result object
    for (let letter in result) {
        console.log(letter);
        for (let key in result[letter]) {
            console.log(`  ${key}: ${result[letter][key]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);