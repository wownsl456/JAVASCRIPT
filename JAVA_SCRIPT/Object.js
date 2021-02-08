// 객체 (Object)
let codeit = {
    name: '코드잇',
    'born year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};
// 점 표기법 (objectNme.propertyName)
console.log(codeit.name); // 결과값 : '코드잇'

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['born year']); // 결과값 : 2017

// 객체 안에 객체 표기법 
console.log(codeit.bestCourse.title); // 결과값 : '자바스크립트 프로그래밍 기초'
console.log(codeit.bestCourse['title']); // 결과값 : '자바스크립트 프로그래밍 기초' (점 표기법으로 접근할 수 없는 경우 대괄호 표기법을 이용)
/* 결과값 = * 코드잇
          * 2017
          * 자바스크립트 프로그래밍 기초
          * 자바스크립트 프로그래밍 기초 */
