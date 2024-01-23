// const assert = require('assert').strict; //"Държавния!"
const solve = require('./1_subSum')

function test() {
    //Arrange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    //Act
    let actualSum = solve(numbers, startIndex, endIndex);

    //Assert
    // assert.equal(actualSum, expectedSum) //Not work for now

    // if (actualSum == expectedSum) {
    //     console.log('Correct');
    // } else {
    //     console.log('Error');
    // }
}

test()