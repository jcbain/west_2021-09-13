const fs = require('fs');


// const file = fs.readFileSync('./index.html', {encoding: 'utf-8'});
// console.log(file)

console.log('1 i will happen first')
fs.readFile('./index.html', {encoding: 'utf-8'}, (err, data) => {
  if(err){
    console.log(err)
    return
  }
  console.log('2', data.split(' '))
})
console.log('3 when will i happen?')