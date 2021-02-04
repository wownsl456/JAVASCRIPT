// 여기에 코드를 작성해 주세요.
let x = 1;
let y = 0;
for (let i = 1; i <= 50; i++){
  console.log(x);
  let j = y;
  y = x;
  x = x + j;
}