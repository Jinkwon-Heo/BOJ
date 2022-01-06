//1. 입력을 읽어오면 console.log를 찍어서 어떻게 들어왔는지 확인해보자
//2. 들어온 값을 어떻게 나누어야 할 지 생각해보자
//3. 한가지 작업을 수행하면 다시 console.log를 찍어서 확인 후 1, 2를 반복하자

const fs = require('fs');
let input = fs.readFileSync('./inoutExample/input.txt', 'utf8'); //.toString().split('\n').map(()); 블로그에 보면 뒤에 이런 코드들이 붙어있는 것들은 잘하는 사람들이 한 것이므로 나도 익숙해져서 작성할 수 잇또록 하자..
console.log(input);
//fs변수에 require메서드를 할당해서 필요한 파일을 불러온다. require메서드는 파일을 불러온다. 'fs'는 파일시스템이다.
//require의 속성 중 redaFileSync메서드는 파일을 동기방식으로 읽는다. 첫번째 인자는 경로/파일명, 두번째 인자는 불러오는 불러오는 방식이다.
//readFileSync를 통해 test.txt라는 파일을 읽어서 input변수에 문자열로 할당한다.
//JS는 파일을 한번에 읽어서 문자열 형태로 저장한다.


input = input.split('\n');
//input변수에는 현재 문자열이 저장되어 있다. 해당 문자열을 split메서드를 이용해서 줄을 기준으로 나누는 작업을 거친다.
console.log(input);

const testCaseNum = +input[0];
//number(input[0]);와 같다. +연산자를 쓰면 뒤에오는 값이 숫자가 아닌 경우 숫자로 바꿔준다.
//그냥 input[0];을 입력하면 문자 '5'가 들어가게 된다. 따라서 숫자로 바꿔주는 작업을 해줘야 한다.

console.log('testCaseNum : ', testCaseNum)

//두번째 줄의 5 50 50 70 80 100 에서 5는 뒤에 오는 배열의 길이를 의미하므로 또 따로 분리시켜줘야한다. 또한 뒤에 오는 값들도 모두 '숫자'로 바꿔줘야한다.
//-> 공백을 기준으로 분리하자!
for(let i = 1; i <= testCaseNum; ++i) {
    const arr = input[i].split(' ')    //.map((item) => +item); 아래 3줄의 코드를 이 한줄로 대체가능.
    let newArr = [];
    for (let i = 0; i < arr.length; ++i){
        newArr.push(Number(arr[i]));
    }
    console.log('arr : ', arr);
    console.log('newarr : ', newArr);
    break;
}