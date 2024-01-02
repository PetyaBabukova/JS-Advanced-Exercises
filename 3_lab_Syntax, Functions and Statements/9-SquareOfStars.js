function solve(num) {
    if (!num) {
        num = 5
    }

    for(let i = 1; i<=num; i++){
        let result = ''
        for (let y = 1; y <= num; y++) {
                  result += '* '      
        }
        console.log(result);
    }
}

solve(3)