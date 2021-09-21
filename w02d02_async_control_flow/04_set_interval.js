

let iteration = 0;

const handle = setInterval(() => {
  iteration++;
  console.log(`current iteration is at ${iteration}`)
  if(iteration === 10){
    clearInterval(handle)
  }
}, 500)


// setTimeout(() => {
//   console.log('set time out', iteration)

// }, 1000)