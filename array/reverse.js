//Reverse an Array
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]


const array = [1, 2, 3, 4];
// console.log(array.reverse());

//without using the reverse() method

function reverseArray(arr) {
  const result = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  
  return result;
}

// Example
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]