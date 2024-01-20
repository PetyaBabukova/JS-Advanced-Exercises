function solve(input) {
    let result = [];

    let commands = {
        add: (str) => {
            result.push(str);
        },
        remove: (str) => {
            result = result.filter(x => x !== str);
        },
        print: () => {
            console.log(result.join(','));
        }
    };

    input.forEach(entry => {
        let [command, str] = entry.split(' ');
        commands[command](str);
    });
};

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
