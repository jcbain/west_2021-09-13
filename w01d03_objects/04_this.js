// what is `this`

const bat = {
  color: "purple",
  // fly: fly
  fly: function() {
    // console.log(this)
    console.log("flap flapfi wings")
  },
  sayColor: function() {
    console.log(`I am a bat and my color is ${this.color}`)
  }
}


const bat2 = {
  color: "green",
  // fly: fly
  fly: function() {
    // console.log(this)
    console.log("flap flapfi wings")
  },
  sayColor: function() {
    console.log(`I am a bat and my color is ${this.color}`)
  }
}

bat.sayColor()
bat2.sayColor()