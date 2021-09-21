

// setTimeout 
// parameters: callback, optional delay

console.log('(1) i should run first')


setTimeout(() => {
  console.log('(2) hello there')
}, 50)

setTimeout(() => {
  
  console.log('(3) am i second?')
}, 2)

// will run before our callbacks in our setTimeouts
// no matter what the amount of time we pass as the
// delay
const stop = 20000;

for(let i = 0; i < stop; i++){
  const date = new Date();
  console.log(date)
}

console.log('(4) when will i run?')

