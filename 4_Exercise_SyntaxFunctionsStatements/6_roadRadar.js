function solve(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentalLimit = 20;
    let status = '';
    let difference = speed - motorwayLimit;
    
    if (area === 'motorway') {
        if (speed <= motorwayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else {
            difference = speed - motorwayLimit;
            if (difference <= 20) {
                status = 'speeding'
            } else if (difference <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving';
            };
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        };
    };

    if (area === 'interstate') {
        if (speed <= interstateLimit) {
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        } else {
            difference = speed - interstateLimit;
            if (difference <= 20) {
                status = 'speeding'
            } else if (difference <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving';
            };
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        };
    };

    if (area === 'city') {
        if (speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else {
            difference = speed - cityLimit;
            if (difference <= 20) {
                status = 'speeding'
            } else if (difference <= 40) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving';
            };
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        };
    };

    if (area === 'residential') {
        if (speed <= residentalLimit) {
            console.log(`Driving ${speed} km/h in a ${residentalLimit} zone`);
        } else {
            difference = speed - residentalLimit;
            if (difference <= 20) {
                status = 'speeding'
            } else if (difference <= 20) {
                status = 'excessive speeding'
            } else {
                status = 'reckless driving';
            };
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentalLimit} - ${status}`);
        };
    };
};

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');