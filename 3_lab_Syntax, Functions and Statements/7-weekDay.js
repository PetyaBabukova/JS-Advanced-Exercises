function solve(text) {
    let result; 

    let value = text.toLowerCase()

    switch (value) {
        case 'monday':
            result = 1
            break;

            case 'tuesday':
            result = 2
            break;

            case 'wednesday':
            result = 3
            break;

            case 'thursday':
            result = 4
            break;

            case 'friday':
            result = 5
            break;

            case 'saturday':
            result = 6
            break;

            case 'sunday':
            result = 7
            break;
    
        default:
            result = 'error'
            break;
    }

    console.log(result);
};

solve('Monday')
solve('Friday')
solve('Invalid')