//คล้าย find ปกติ แต่คืนมาเป็น index



let scores = [82,75,48,64,36];

let fail = scores.findIndex(c => c<50 );

console.log(fail);


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
