function solve(input) {
    const brands = {};
   
    for (const item of input) {
      const [brand, model, quant] = item.split(" | ");
   
      if (!brands.hasOwnProperty(brand)) {
        brands[brand] = {};
      }
   
      if (!brands[brand].hasOwnProperty(model)) {
        brands[brand][model] = 0;
      }
   
      brands[brand][model] += Number(quant);
    }
   
    for (const [brand, models] of Object.entries(brands)) {
      console.log(brand);
   
      for (const [model, quant] of Object.entries(models)) {
        console.log(`###${model} -> ${quant}`);
      }
    }
  };


// //The Solution from lecturer - currently doesn`t work
// function solve(input) {
//     let brands = new Map();

//     while (input.length > 0) {
//         let [brand, model, quantity] = input.shift().split(' | ');
//         let models = new Map();

//         if (!brands.has(brand)) {
//             models.set(model, Number(quantity));
//             brands.set(brand, models);
//         } else {
//             let models = brands.get(brand);
//             if (!models.has(model)) {
//                 models.set(model, (quantity))
//             } else {
//                 let currentQuantity = brands.get(brand);
//                 models.set(model, currentQuantity + Number(quantity));
//             }

//             brands.set(brand, models)
//         }
//     };
// };


solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])

//pastebin.com/eDy3f8Vw
//pastebin.com/wpi8vDcm
