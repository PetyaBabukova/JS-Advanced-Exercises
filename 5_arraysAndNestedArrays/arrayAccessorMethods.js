let cars = ['BMW', 'Audi', 'Opel'];
let oldCars = ['Lada', 'Moskvich', 'Volga'];

// join()
let stringResult1 = cars.join();
console.log(stringResult1); //Mutates array to string
let stringResult2 = cars.join(', ');
console.log(stringResult2); //Mutates array to string

// concat() - get two arrays and make one of them
let allCars = cars.concat(oldCars);
console.log(allCars);

//slice() !!!this is NOT splice. Slice mutates the array and makes new ref. 
//It returnes a new array, containing sliced elements 
let slicedCars = allCars.slice(2, 4); //Elements with index 2 and 3
console.log(slicedCars);
let slcedAllCars = allCars.slice(3); // Elements from 3 to end
console.log(slcedAllCars);
let clonedAllCars = allCars.slice(); // All elements but in other ref.
console.log(clonedAllCars);

//Includes
let isAvailable = allCars.includes('Lada'); //Returnes Boolean
console.log(isAvailable);

let isAvailable1 = allCars.includes('Lada', 4); // After index 4

//indexOf
let ladaIndex = allCars.indexOf('Lada'); //Returnes index
console.log(ladaIndex);
let trabantIndex = allCars.indexOf('Trabant') //Returnes -1 if element doesn`t exists

//