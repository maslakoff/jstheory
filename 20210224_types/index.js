let a;
let type = typeof a;

// types
a = "str";
type = typeof a; // string

a = 20;
type = typeof a; //  int

// a = 3 n;
// type = typeof a; // bigint

a = null;
type = typeof a; // object - bug

a = {
    name: 'Dima',
};
type = typeof a;

a = 1 === 2;
type = typeof a;

a = undefined;
type = typeof a;

a = Symbol();
type = typeof a;

console.log(a, type)



// function and arrays


function foo() {}

console.log('typeof func: ', typeof foo);

const arr = [];

console.log('typeof arr: ', typeof arr);


// Number

console.group('Number')
console.log(6 / 0)

console.log(-6 / 0)

console.log(undefined - 6);
console.groupEnd('Number');

// type conversion

let number = 5;
let str = String(number);
console.log(str)

let str2 = "7";
let num2 = Number(str2);
console.log('str:', num2, typeof num2)

let und = undefined;
console.log(Number(und))

let nullish = null;
console.log(Number(nullish))


let real = false;
console.log(Number(real))


let strWithChars = '7px';
console.log(Number(strWithChars))

// falsy values

let emptyStr = ""; // 0, null, undefined, NaN
console.log(Boolean(emptyStr))



//  неявное приведение

let result;

result = "" + 1 + 0  // "10"
result = "" - 1 + 0  // -1
result = true + false // 1
result = 6 / "3" // 2
result = "2" * "3" // 6
result = 4 + 5 + "px"  // "45px"
result = "$" + 4 + 5  // $45
result = "4" - 2 // 2
result = "4px" - 2 // NaN
result = 7 / 0 // Infinity
result = "  -9  " + 5 //  "  -9  5"
result = "  -9  " - 5  // -14
result = null + 1 // 1
result = undefined + 1 //  NaN

console.log('res', result, typeof result)

