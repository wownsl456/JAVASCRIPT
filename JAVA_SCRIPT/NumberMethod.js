// Number
let myNumber = 0.3591;

// toFixed(0 ~ 100)
console.log(myNumber.toFixed(3)); // 소수점 이후 4번째 자리에서 반올림을 한다.
console.log(myNumber.toFixed(7)); // 자리수를 초과하면 0으로 대체 된다.
console.log(typeof myNumber.toFixed(7)); // 문자열 값으로 출력 된다.
console.log(Number(myNumber.toFixed(7))); // 형변환을 이용하여 숫자형으로 바꿔줄 수 있다.
console.log(+myNumber.toFixed(2)); // toFixed 메소드를 활용할 때 +를 사용해주면 number함수와 똑같은 결과를 가져오게 할 수 있다.
/* 결과값 = * 0.359
          * 0.3591000
          * string
          * 0.3591 
          * 0.36 */

// toString (2 ~ 36)
let myNumber = 255;

console.log(myNumber.toString(2)); // 255를 2진수로 변환하는 값
console.log(myNumber.toString(8)); // 255를 8진수로 변환하는 값
console.log(myNumber.toString(16)); // 255를 16진수로 변환하는 값
/* 결과값 = * 11111111
          * 377
          * ff */

console.log(255..toString(2));
console.log((255).toString(8));
console.log(myNumber.toString(16));
/* 결과값 = * 11111111
          * 377
          * ff */