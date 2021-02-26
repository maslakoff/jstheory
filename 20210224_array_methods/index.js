const flatArray = [
    'January', 'February', 
    'March', 'April', 
    'May', 'June', 
    'July', 'August', 
    'September', 'October', 
    'November', 'December'
];


// // push, 
// const newArr = flatArray.push("All year");
// console.log(flatArray, newArr);

// // unshift,
// const arrUnshift = flatArray.unshift('Month:'); // всталяет элемент в начале массива
// console.log( flatArray, arrUnshift ); 

// // shift, 
// const firstElement = flatArray.shift();
// console.log('Первый элемент массива должен быть удалён: ',  firstElement, flatArray)

// // concat, 
// seasons = ['winter', 'spring', 'summer', 'autumn'];
// const flatArraySeasons = flatArray.concat(seasons);
// console.log(flatArraySeasons);

// reverse,  // A-Dulevich
const reversed = flatArray.reverse();
 console.log("reversed:", reversed); 
// // forEach,  // dimaurbanovich
flatArray.forEach( ( month ) => { // Проходит по каждому элементу массива и выпоолняет заданную функцию для элемента
    console.log(month);
});
// map,      // valevka
// filter,   // Ivantsov-aa
// sort,     // Elizaveta-Battalova
// indexOf,  // Darl93
// includes, // rominazz
// slice,    // A-Dulevich
console.log( flatArray.slice(3,5));
console.log( flatArray.slice(1));

// splice,   // dimaurbanovich
flatArray.splice(2, 3, 'SPRING'); // Удаляет 3 элемента начиная с индекса 2 и вставляет 'SPRING'
console.log(flatArray);

// reduce,   // valevka
// lastIndexOf,  // Ivantsov-aa
// find,     // Elizaveta-Battalova
// findIndex // Darl93
// pop,      // rominazz

