const fs = require('fs');
let input = fs.readFileSync('1단계-입출력과 사칙연산/1000_input.txt', 'utf8');

input = input.split(' ');
for(i = 0; i<input.length; i++){
    input[i] = +input[i];
}

function add(input1, input2) {
    return input1 + input2;
}

console.log(add(input[0], input[1]));