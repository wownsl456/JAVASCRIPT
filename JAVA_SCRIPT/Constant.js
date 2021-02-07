// 상수 (constant)
const PI = 3.14;       //원주율 //상수를 적용할때는 const를 선언하고 이름에 들어가는 알파벳을 대문자나 밑줄(_)로 작성한다.
let radius = 0; //반지름

// 원의 넓이를 계산하는 함수
function calculateArea() {
    return PI * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());
/* 결과값 = * 반지를이 4일 때, 원의 넓이는 50.24
          * 반지름이 7일 때, 원의 넓이는 153.86
          * 반지름이 8일 때, 원의 넓이는 200.96 */