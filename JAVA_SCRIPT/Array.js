// 배열 (Array)
let courseRanking = [
    '자바스크립트 프로그래밍 기초',
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초'
];


console.log(courseRanking[0]); // index == PropertyName //indexong (0~...)
/* 결과값 = * 자바스크립트 프로그래밍 기초 */

// 배열의 length
let members = [
    '쿤갈레', 
    'Zerrard66', 
    '우리생각해써', 
    '흙토끼', 
    'End Miracle'
];


console.log(members.length);    // length는 배열이 가지고 있는 총 개수를 표시해준다.
console.log(members['length']);
console.log(members[members.length - 1]);
/* 결과값 = * 5 , 5 , End Miracle */


members[3] = '달토끼';           // 배열을 추가하거나 수정하는 방법
members[5] = 'NiceCodeit'; 
console.log(members[5]);
/* 결과값 = * 달토끼(흙토끼에서 달토끼로 수정) , NicdCodeit */

// 배열의 메소드 (Array's Method)
let members = [
    '쿤갈레', 
    'Zerrard66', 
    '우리생각해써', 
    '흙토끼', 
    'End Miracle'
];

members.splice(2, 2, 'MaumNo', '산토끼'); // splice(startIndex, deleteCount, item)
console.log(members);
/* 결과값 = * 쿤갈레, Zerrard66, MaumNo, 산토끼, End Miracle */

let members = [
    '쿤갈레', 
    'Zerrard66', 
    '우리생각해써', 
    '흙토끼', 
    'End Miracle'
];

members.shift(); // 배열의 첫 요소를 삭제: shift()
members.pop(); // 배열의 마지막 요소를 삭제: pop()
members.unshift('NiceCodeit'); // 배열의 첫 요소로 값 추가: unshift(value)
members.push('HiCodeit'); // 배열의 마지막 요소로 값 추가: push(value)

console.log(members);
/* 결과값 = * NiceCodeit, Zerrard66, 우리생각해써, 흙토끼, HiCodeit */ 

let brands = ['Google', 'Kakao', 'Naver', 'Kakao']; // array.indexOf(item)을 하면 array 배열에 itemdl 포합되어 있는지 확인할 수 있다.
console.log(brands.indexOf('Kakao'));               // 포함되어 있다면 item이 있는 인덱스가 리턴되고 포함되어 있지 않다면 -1이 리턴된다
console.log(brands.indexOf('Daum'));
/* 결과값 = * 1
          * -1 */

let brands = ['Google', 'Kakao', 'Naver', 'Kakao']; // lastindexOf는 indexOf와 다르게 반대로 탐색을 뒤에서 부터 하게 된다.
console.log(brands.lastindexOf('Kakao'));               
console.log(brands.lastindexOf('Daum'));
/* 결과값 = * 3
          * -1 */

let brands = ['Google', 'Kakao', 'Naver', 'Kakao']; // array.includes(item)을 하게되면 array배열에 item이 있을 경우 true,없을 경우 false를 리턴한다.
console.log(brands.includes('Kakao'));               
console.log(brands.includes('Daum'));  
/* 결과값 = * true
          * false */

let brands = ['Google', 'Kakao', 'Naver', 'Kakao']; // reverse라는 메소드를 활용하면,배열의 순서를 뒤집을 수도 있습니다.
console.log(brands);
brands.reverse();              
console.log(brands);
/* 결과값 = * ["Google", "Kakao", "Naver", "Kakao"]
          * ["Kakao", "Naver", "Kakao", "Google"] */

// 다차원 배열 (multidimensional array)
let twoDimensionad = [[1, 2], [3, 4]];
console.log(twoDimensionad[0])
console.log(twoDimensionad[0][1])
/* 결과값 = * [1 ,2]
          * 2 */