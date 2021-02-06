// 형 변환(Type Conversion)

// String, Number, Boolean
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

/* 결과값 = * 15,105 */

// 숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof(x));
console.log(typeof String(x));

/* 결과값 = * 123,123,number.string */

// 불린 -> 문자
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

/* 결과값 = * true,true,boolean,string */

// 문자 -> 숫자
let x = '문자';
console.log(x);
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));

/* 결과값 = * 문자,NaN,string,number */

// 불린 -> 숫자
let y = true;
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));

/* 결과값 = * true,1,boolean,number */

// 문자 -> 불린
let x = '문자';
console.log(x);
console.log(Boolean(x));
console.log(typeof x);
console.log(typeof Boolean(x));

/* 결과값 = * 문자,true,string,boolean */

// 숫자 -> 불린
let y = 123;
console.log(y);
console.log(Boolean(y));
console.log(typeof y);
console.log(typeof Boolean(y));

/* 결과값 = * 123,true,number,boolean */

// 산술 연산(+,-,*,/,&,**)
console.log(4 + '2');
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

/* 결과값 = * 42,6,3,0,2,4,NaN */

// 관계 비교 연산(<,<=,>,>=)
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);

/* 결과값 = * true,true,false,false */

// 같음 비교 연산(===,!==,==,!=)
console.log(1 === '1'); //일치, 불일치(!==)
console.log(1 === true);
console.log(1 =='1'); //동등, 부등(!=)
console.log(1 == true);
/* 결과값 = * false,false,true,true */