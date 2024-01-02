function solve(num) {
    let numStr = num.toString();
    let sum = 0;
    let result = true;

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i])
        for(let z = 0; z<numStr.length; z++){
            if (numStr[i] !== numStr[z]) {
                result = false;
            
            }
        }
    }
    console.log(result);
    console.log(sum);
};

solve(2222222);
solve(1234);