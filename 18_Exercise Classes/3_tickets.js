function solve(input, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    input.forEach(element => {
        let [destination, price, status] = element.split('|');
        let currentTicket = new Ticket(destination, Number(price), status);
        result.push(currentTicket)
    });

    // console.log(Object.keys(result[0]));


    switch (criteria) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination))
            break;

        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status))
            break;

            case 'price':
            result.sort((a, b) => a.price - b.price)
            break;
    }

    // result.forEach(x=>{
    //     console.log(x);
    // })
    return result
}


solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')
