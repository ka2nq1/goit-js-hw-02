// // Напиши функцию checkForSpam(message), 
// принимающую 1 параметр message - строку.Функция
// проверяет ее на содержание слов spam и sale.Если
// нашли запрещенное слово то функция возвращает true,
//     если запрещенных слов нет функция возвращает false.С
// лова в строке могут быть в произвольном регистре.

// function checkForSpam (message) { 
//     const msg = message.toLowerCase();
//     if (msg.includes('spam') || msg.includes('sale')) {
//         return true;
//     }
//     return false;
// }
// // console.log(checkForSpam('pizza'));
// // console.log(checkForSpam('hello'));
// // console.log(checkForSpam('spam'));
// // console.log(checkForSpam('sale'));

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true