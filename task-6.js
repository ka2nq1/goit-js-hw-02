// Конструкция new Array(10) создаст массив, длинной в 10 элементов.
// Значения в таком массиве будут отсутствовать, т.е.не будет даже undefined.
// Поэтому такой массив нужно заполнить значениями для дальнейшего использования.

// Есть еще способ создания и заполнения массива - можно создать пустой массив[]
// и заполнять его методом push()


// function mapArray(array) {
// //   const numbers = new Array(array.length);
//     const newArr = [];
//     const len = array.length; 
//   for(let i = 0; i < len; i += 1) {
//     //   console.log(array[i]);
//       newArr.push(array[i] * 10);
//   }
//   return newArr;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

function mapArray(array) {
  'use strict';
    const numbers = new Array(array);
    const kostulArr = [];
    for (let i = 0; i < array.length; i += 1) {
      kostulArr.push(array[i] * 10)
    // Write code under this line
  }
    return kostulArr;
}


console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]
//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]