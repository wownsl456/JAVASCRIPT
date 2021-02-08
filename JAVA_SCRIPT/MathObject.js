// 절대값 (Absolute Number) 
console.log(Math.abs(-10)); // Math.abs(x)를 하면 x의 절댓값이 리턴된다.
console.log(Math.abs(10));
/* 결과값 = * 10
          * 10 */

// 최댓값 (Maximum)
console.log(Math.max(2, -1, 4, 5, 0)); // Math.max함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴된다.
/* 결과값 = * 5 */

// 거듭제곱 (Exponentiation)
console.log(Math.pow(2, 3)); // 자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴된다.
console.log(Math.pow(5, 2));
/* 결과값 = * 8
          * 25 */

// 제곱근 (Square Root)
console.log(Math.sqrt(25)); // 제곱근은 제곱의 반대라고 생각할 수 있다. Math.sqrt(x)를 하면 x의 제곱근이 리턴된다.
console.log(Math.sqrt(49));
/* 결과값 = * 5
          * 7 */

// 반올림 (Round)
console.log(Math.round(2.3)); // Math.round(x)를 하면 x의 반올림된 값이 리턴된다.
console.log(Math.round(2.4));
console.log(Math.round(2.49)); // 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고 0.5 미만이면 가장 가까운 정숫값으로 내려간다.
console.log(Math.round(2.5));
console.log(Math.round(2.6));
/* 결과값 = * 2
          * 2
          * 2
          * 3
          * 3 */

// 버림과 올림 (Floor and Ceil)
console.log(Math.floor(2.4)); // Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴된다.
console.log(Math.floor(2.49)); // 소소 부분이 얼마 인지와는 상관이 없다.
console.log(Math.floor(2.8));
console.log('_');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));
/* 결과값 = * 2
          * 2
          * 2
          * _
          * 3
          * 3
          * 3 */

// 난수 (Random)
console.log(Math.random()); // Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴된다.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
/* 결과값 = * 0.140212019520195091273
          * 0.1231158329082950235
          * 0.7892371294591257012
          * 0.12747210958329590235 */