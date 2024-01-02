function solve(num) {
    let numStr = num.toString();
    let isSame = true;
    let sum = 0;

    let digitToCompare = numStr[0];

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i])

        if (numStr[i] !== digitToCompare) {
            isSame = false;
        }
    };
    
    console.log(isSame);
    console.log(sum);
};

solve(2222222);
solve(1234);