function solve(array, firstFlavour, secondFlovour) {
    let firstIndex = array.indexOf(firstFlavour);
    let secondIndex = array.indexOf(secondFlovour);

    let result = array.slice(firstIndex, secondIndex+1)

    return result;
};

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)