function solve(numberOfSteps, footPrint, speedKmH) {

    let distance = numberOfSteps*footPrint; //This value is in meters
    let speed = speedKmH * 1000 / 3600;

    let rest = Math.floor(distance / 500) * 60;

    let time = (distance / speed) + rest;

    let hours = Math.floor(time/3600).toFixed().padStart(2, '0');
    let minutes = Math.floor((time%3600)/60).toFixed().padStart(2, '0')
    let seconds = (time % 60).toFixed().padStart(2, '0')

   console.log(`${hours}:${minutes}:${seconds}`);
};

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);