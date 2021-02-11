// 문자열 심화
let myString = 'Hi Codeit';

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2));
console.log(myString.slice(3));
console.log(myString.slice());
/* 결과값 = * Hi
          * Codeit
          * Hi Codeit */

// 양 끝 공백 제거
console.log(myString.trim()); // 문자열 양 옆에 공백이 있으면 제거 해주는 메소드
/* 결과값 = * Hi Codeit */

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자
/* 결과값 = * HI CODEIT
          * hi codeit */

// 요소 탑색
console.log(myString.indexOf('i')); // 앞 부터
console.log(myString.lastIndexOf('i')); // 뒤 부터
console.log(myString.indexOf('a')); // 문자열에 없는 문자를 찾으려고 할때 -1이 출력된다.
/* 결과값 = * 1
          * 7
          * -1 */

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메소드 활용법
/* 결과값 = * C
          * C */

// 문자열 길이
console.log(myString.length); // length 프로퍼티 
/* 결과값 = * 9 */