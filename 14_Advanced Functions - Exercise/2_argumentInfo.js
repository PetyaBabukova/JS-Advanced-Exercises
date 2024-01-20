function solve(...input) {
    let result = {};
    
    input.forEach(el => {
        let type = typeof(el);
        if (!result.hasOwnProperty(type)) {
            result[type] = [el]
        } else {
            result[type].push(el)
        }
    });

for (const key in result) {
    result[key].forEach(x=> console.log(`${key}: ${x}`))
}

Object.entries(result)
.sort((a, b)=> b[1].length - a[1].length)
.forEach(entry => {
    let [key, num] = [entry[0], entry[1].length];
    console.log(`${key} = ${num}`);
})

};

// solve('cat', 42, function () { console.log('Hello world!'); })
solve({ name: 'bob'}, 3.333, 9.999)

// [
//     'string: cat',
//     'number: 42',
//     "function: function () { console.log('Hello world!'); }",
//     'string = 1',
//     'number = 1',
//     'function = 1'
// ];