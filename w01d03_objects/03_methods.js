// methods
console.log('I am logging to the console');

const fly = function() {
  console.log("flap flapfi wings")
  return 5
}


// fly
// fly()
const bat = {
  color: "purple",
  // fly: fly
  fly: function() {
    console.log("flap flapfi wings")
  }
}
const bat2 = {
  fly: fly 
}

// const fly = function() {}
// fly()
// console.log(bat.fly)
bat.fly()
console.log('bat2.fly', bat2.fly)
