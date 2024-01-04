let cars = ['BMW', 'Audi', 'Opel'];

// pop() - removes the last element
let lastElement = cars.pop();

//push() - the pushed element goes to the last place
cars.push('Mercedess');

//shift() - Removes the first element
let firstElement = cars.shift()

//unshift() - as pop(), but the element goes to the first place
cars.unshift('Honda')

//splice()
cars.splice(1, 0, 'BMW', 'Renault'); //add elements, without delete any
cars.splice(2, 1); //Delete 1 element on index2
cars.splice(2, 2); //Delete 2 elements, starting from index2
cars.splice(2, 1, 'Huyunday') //Delete 1 element on index2 and add on its place 'Huyunday';

//fill()
let numbers = [];
// console.log(numbers);
numbers.length = 10;
// console.log(numbers);
numbers.fill(0);
// console.log(numbers);
numbers.fill(5, 2, 5)
// console.log(numbers);


// reverse() - returnes reversed array with the same ref
cars.reverse();


//sort() - the same ref!
let sorted = cars.sort();
numbers = [9, 10, 6, 3];
console.log(numbers.sort);

//Custom sorting - compare function - we give the compre logic
// Number Sort
numbers.sort(function(a,b){
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1;
    } else {
        return 0
    }
});

// second variant
numbers.sort((a, b) => a - b)

console.log(numbers);

// Alphabethical sort
cars.sort((a,b)=>a.localeCompare(b))

console.log(cars);