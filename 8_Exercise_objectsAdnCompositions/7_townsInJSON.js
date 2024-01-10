function solve(input) {
    // Skip the first row, as it contains the table headings
    let dataRows = input.slice(1);

    let towns = [];

    dataRows.forEach(row => {
        // Split the row by '|' and trim each part to remove unnecessary whitespace
        let [empty, town, latitude, longitude] = row.split('|').map(x => x.trim());

        // Parse latitude and longitude, rounding them to two decimal places
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        // Add the town object to the towns array
        towns.push({Town: town, Latitude: latitude, Longitude: longitude});
    });
    // Convert the towns array to JSON
    return JSON.stringify(towns);

}



// solve([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]);

solve(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ])