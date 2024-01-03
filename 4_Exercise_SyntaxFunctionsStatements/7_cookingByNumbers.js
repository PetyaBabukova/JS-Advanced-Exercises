function solve(a, b, c, d, e, f) {
    let num = Number(a)
    let commands = [b, c, d, e, f];

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        // if (currentCommand === 'chop') {
        //     num = num / 2;
        //     console.log(num);
        // } else if (currentCommand === 'dice') {
        //     num = Math.sqrt(num);
        //     console.log(num);
        // } else if (currentCommand === 'spice') {
        //     num = num + 1
        //     console.log(num);
        // } else if (currentCommand === 'bake') {
        //     num = num * 3
        //     console.log(num);
        // } else if (currentCommand === 'fillet') {
        //     num = num * 0.8
        //     console.log(num.toFixed(1));
        // }

        switch (currentCommand) {
            case 'chop':
                num = num / 2
                console.log(num);
                break;

            case 'dice':
                num = Math.sqrt(num)
                console.log(num);
                break;

            case 'spice':
                num = num + 1
                console.log(num);
                break;

            case 'bake':
                num = num * 3
                console.log(num);
                break;

            case 'fillet':
                num = num * 0.8
                console.log(num.toFixed(1));
                break;

            default:
                console.log("There are no available commands");
                break;
        }

    }

};

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');