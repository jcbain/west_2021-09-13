const lego = {
  color: "yellow",
  shape: "rectangular prism",
  size: 2,
};

// iterate over keys in obj
for(const key in lego) {
  console.log("key:", key)
  console.log("value:",lego[key])
}



// const animals = ['dog', 'cat', 'giraffe'];

// for(let i = 0; i < animals.lengty; i++){
//   console.log(animals[i])
// }

// for(const animal of animals){
//   console.log(animal)
// }