function solve(input) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let searchedPower = input.power;

    let result = {}

    if (searchedPower <= 90) {
        result['engine'] = smallEngine;
    } else if (searchedPower <= 120) {
        result['engine'] = normalEngine;
    } else if (searchedPower<= 200) {
        result['engine'] = monsterEngine;
    };

    if (input.wheelsize % 2 === 0) {
        result.wheels = [input.wheelsize-1, input.wheelsize-1, input.wheelsize-1, input.wheelsize-1 ]
    } else {
        result.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize ]
    }

    result.model = input.model;

    result.carriage = {
        type: input.carriage,
        color: input.color,
    };

   return result;


};

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)