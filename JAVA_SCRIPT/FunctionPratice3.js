// calculateRectangleArea라는 이름의 함수를 만드세요.
// 여기에 코드를 작성해주세요.
function calculateRectangleArea(x, y){
  return x * y  
};
// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);
/* 결과값 = * Area1: 12, Area2: 40, Area3: 14 */  