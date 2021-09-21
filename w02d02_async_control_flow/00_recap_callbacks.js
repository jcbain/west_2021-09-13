// const addTwo = (num) => {
//   return num + 2;
// }

// // value
// const value = addTwo;
// console.log(value)

// const number = value(5);
// console.log(number)

const chickens = [ 'poulet', 'pollo', 'chicken' ];

// HOF
const myForEach = (arr, callback) => {

  for(const element of arr) {
    callback(element)
  }
}


// const printChicken = (str) => {
//   console.log(str)
// }

myForEach(chickens, (str) => {
  console.log(str)
})

