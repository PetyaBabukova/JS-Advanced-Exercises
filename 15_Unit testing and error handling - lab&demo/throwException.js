function getNumber() {
    let randomNumber = Math.random();

    if (randomNumber < 0.5) {
        // throw new Error('Your number is too low!')
        throw 'Your number is too low!'
    }

    return Math.floor(randomNumber*100)
}

function app() {
    let number;  // It`s not so good, but if this variable is defined into TRY scope it won`t be visible into the CATHC scope
    try {
    number = getNumber();
        // console.log(number);
        
    } catch (error) {
        console.log(error);
    }
}

app()

let number = getNumber();
// console.log(number);