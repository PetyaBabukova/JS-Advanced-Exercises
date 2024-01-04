let cars = ['BMW', 'Audi', 'Opel', 'Lada', 'Moskvich', 'Volga'];

// For Of loop
for (let car of cars) {
    // console.log(car);
};

//forEach method
// cars.forEach(car => console.log(car));

// // Not to cool, but possible:
// function printCar(car) { 
//     console.log(car);
// }
// cars.forEach(printCar)


// Some - returnes boolean (predicat)
let result = cars.some((car) => {
    return car[0] == 'V'
});
// console.log(result);

// Find
let longNameCar = cars.find(car => {
    return car.length > 3;
});

// console.log(longNameCar);

//Filter
let fourLetterCars = cars.filter(car => {
    return car.length == 4;
});
// console.log (cars);
// console.log(fourLetterCars);

// Map
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
// console.log(cars);
// console.log(doubledNumbers);

let upperCaseCars = cars.map(car => car.toUpperCase());
// console.log(upperCaseCars);

// Reduce
let sum = numbers.reduce((acc, currentNum)=>{
    return acc + currentNum //It`s very important to return the value!
}, 0);
console.log(sum);