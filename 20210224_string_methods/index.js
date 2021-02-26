// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
let str = " Welcome To The Real World | The Matrix (1999)";

//charAt // A-Dulevich
//concat // dimaurbanovich
// const str2 = ' - the film with Keanu Reeves in the lead role.'; // объединяет строки
// const newStr = str.concat(str2);
// console.log(newStr);

//indexOf // valevka
//includes // Ivantsov-aa
//replace // Elizaveta-Battalova
//toUpperCase // Darl93
//toLowerCase // rominazz

//trim // A-Dulevich
//split // dimaurbanovich
const newStr = str.split( '|' ); // находит заданный разделяющий элемент в строке и возвращает массив из разделенных строк
console.log(newStr);


//lastIndexOf // valevka
//slice // Ivantsov-aa
//substring // Elizaveta-Battalova
//substr // Darl93
//startsWith // rominazz
