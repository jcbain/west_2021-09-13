
const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  };

  console.log('(1) before the setTimeout')

  setTimeout(() => {
    data.userName = "Scully";
    callback(data)
  }, 1000)


  console.log('(2) after the setTimeout')
}

console.log('(3) before main function call')

const printData = (dat) => {
  console.log(dat)
}
higherOrderFunction(printData)

console.log('(5) after main function call')