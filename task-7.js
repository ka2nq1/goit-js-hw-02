function filterArray(array) {
    const numbers = [];
    const numberLength = array.length;
  for(let i = 0; i < numberLength; i += 1) {
    // Write code under this line
    //   console.log(array[i]);
      if (Number.isFinite(array[i])) {
          numbers.push(array[i]);
      }

  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

 console.log(filterArray([1, NaN, Infinity]));
// // [1]

 console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

 console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

 console.log(filterArray([{}, () => {}, 2]));
// // [2]