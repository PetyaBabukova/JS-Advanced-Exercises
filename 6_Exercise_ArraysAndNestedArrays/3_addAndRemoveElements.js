function solve(commands) {
    
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            result.push(i+1)
        } else {
            result.pop()
        }
    }

    if (result.length>0) {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    } else {
        console.log('Empty');
    }

};

// solve(['add', 
// 'add', 
// 'add', 
// 'add']
// );

// solve(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']
// );

solve(['remove', 
'remove', 
'remove']
);