// javascript is synchronous

const stop = 10000;

console.log('(1) i run first')

for(let i = 0; i < stop; i++){
  const date = new Date();
  console.log(date)
}

console.log('(2) i run last')

