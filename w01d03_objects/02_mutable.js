// immutable
const name = "James";

const printDifferentName = function(someName) {
  someName = "Jennifer";
  console.log(`The name is ${someName}`);
}


console.log(`the name before the function call: ${name}`);
printDifferentName(name);
console.log(`the name after the function call: ${name}`);

// mutable
const lego = {
  color: "yellow",
  shape: "rectangular prism",
  size: 2,
  1: 'some values'
};


const bat = {
  color: 'red',
}


// obj => object
const printDifferentLegoColor = function(obj) {
  obj.color = "purple";
  console.log(`the color of the lego is ${obj.color}`);
}

console.log(`the object color before function call: ${lego.color}`);
printDifferentLegoColor(lego);
console.log(`the object color after function call: ${lego.color}`);


