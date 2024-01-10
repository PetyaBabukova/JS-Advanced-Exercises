function solve(x1, y1, x2, y2) {
    const isIntegerDistance = (xa, ya, xb, yb) => Math.sqrt((xb - xa) ** 2 + (yb - ya) ** 2) % 1 === 0;

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isIntegerDistance(x1, y1, 0, 0) ? 'valid' : 'invalid'}`);

    console.log(`{${x2}, ${y2}} to {0, 0} is ${isIntegerDistance(x2, y2, 0, 0) ? 'valid' : 'invalid'}`);

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isIntegerDistance(x1, y1, x2, y2) ? 'valid' : 'invalid'}`);
}


solve(3, 0, 0, 4);
solve(2, 1, 1, 1);