// primitives
// strings, booleans, numbers, undefined, null, symbols, bigint

const someString = "some string";
console.log(typeof someString)
const bool = true;
const num = 34.54;
console.log(typeof num);
const undef = undefined;
let anotherUndefined;
console.log('anotherUndefined', anotherUndefined)
const nul = null;
console.log(typeof nul);

const someSymbol = Symbol("James")
const bigNum = 12321n /12n;
console.log(typeof bigNum)

// console.log(9999999999999999); // > 10000000000000000
// console.log(9007199254740992 === 9007199254740993) // > true


// objects