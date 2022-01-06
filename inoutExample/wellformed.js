// 코딩테스트 혹은 프로그래머스처럼 입력이 정제된 형태로 주어지는 경우가 있다.
// 그런 경우와 마찬가지로 BOJ에서도 미리 입력값을 모두 정제 후에 문제를 풀기위한 함수를 만들어서 해당 입력값을 입력하는 방법으로 풀자.
// 입력정제와 코드와 문제풀이 코드를 분리시키는 것이다!

// 1. 문제를 풀 때 solution 함수를 만든다. 어떤 입력이 들어오면 문제를 풀 수 있을 지 생각해본다. 그 입력을 매개변수로 사용한다.
// 2. 입력이 어떤식으로 들어오면 좋을지 주석으로 적어보자.
// 3. 작성한 입력(input.js)을 바탕으로 1, 2를 수행한다.

//textCase는 N과 N명의 점수 배열로 이루어짐

/*C = 5;
testCase = [
    {
        N: 5,
        arr: [50, 50, 70, 80, 100]
    },
    {
        N: 7,
        arr: [100, 95, 90, 80, 70, 60, 50]
    }
    ...
]
*/
//testCase의 숫자를 C로 입력받고 각각의 테스트 케이스는 첫번째 숫자와 이후의 숫자들을 각각 나누는 것이 좋겠다. 라고 생각하자.


const fs = require('fs');
let input = fs.readFileSync('./inoutExample/input.txt', 'utf8');


input = input.split('\n');
// console.log(input); //여기서 생성된 배열의 첫번째 값이 C가 된다.
const inputC = +input[0];
const inputTestCase = [];

for(let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(' ') .map((item) => +item);
    // console.log(arr);
    const newArr = [];
    for(let i = 1; i <= arr[0]; ++i){ //37번째 줄의 console.log의 결과를 보고 arr값을 결정하였다. arr의 첫번째 값을 제외한 값을 넣어주는 for문
        newArr.push(arr[i]);
    }
    const testCase = { //41번째 줄의 console.log의 결과를 보고 N과 arr값을 결정해주었다.
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}
console.log('inputTestCase : ', inputTestCase); //입력을 확인


function solution(C, testCase) {}; //문제를 푸는 코드

solution(inputC, inputTestCase);