// // this

// function foo() {
//     console.log( this.name )
// }

// let person1 = {
//     name: 'Ihar',
//     getName: foo
// };


// let person2 = {
//     name: 'Alex',
// };


// let person3 = person1.getName.bind(person2);

// console.log(person3())



// console.log(foo())


// scopes

if(true) {
    const m = 'mes';

    var variable = 'variable'
    {
        let n = 'nested';
        // console.log(n, m)

    }
}

function foo() {
    var funcVar = 'funcVar';

}
// console.log(foo())

// hoisting

a = 2;

var a;

// console.log(a)

// closure


function adder(f) {
    return function sum(b) {
        return f + b;
    }
}

let addTen = adder(10);
console.log(addTen(3), addTen(6));

let addTwo = adder(2);
console.log(addTwo(3), addTwo(6));