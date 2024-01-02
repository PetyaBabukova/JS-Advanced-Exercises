
function solve(year, month, day) {
    let currentDate = new Date(`${year}-${month}-${day}`);
    currentDate.setDate(day-1);

    let serchedDay = currentDate.getDate();
    let serchedMonth = currentDate.getMonth()+1;
    let searchedYear = currentDate.getFullYear();
    

    console.log(`${searchedYear}-${serchedMonth}-${serchedDay}`);
};

solve(2016, 9, 30);
solve(2016, 1, 1);
solve(2016, 10, 1);