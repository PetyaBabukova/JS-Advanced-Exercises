

let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function () { //Method with function expretion
        console.log('Beep beep!');
    },
    honk2: () => {
        console.log('Beep beep2!'); //Metghod with arrow function
    },
    honk3() {
        console.log('Beep beep3!'); //Object method notation
    }
};

car.honk();
car.honk2();
car.honk3();

//Change execution context
let singleHonk = car.honk;


let russianCar = {
    model: 'Lada'
};
russianCar.bibitka = car.honk;
russianCar.bibitka()


// //Object as function library
// function division(a, b) {
//     return a/b
// };

// let calc = {
//     sum: function (a, b) {
//         return a + b
//     },
//     multiplication: (a, b) => a * b,
//     subtraction(a, b) {
//         return a - b
//     },
//     division,
// };