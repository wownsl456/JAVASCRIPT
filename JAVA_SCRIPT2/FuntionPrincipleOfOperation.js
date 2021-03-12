// 함수 선언
function sayHi() {
    console.log('Hi!');
  };

// 함수 표현식
const sayHi = function () {
    console.log('Hi!');
  };

// 변수에 할당해서 활용
const printJS = function () {
    console.log('JavaScript');
  };
  
// 객체의 메소드로 활용
const codeit = {
    printTitle: function () {
      console.log('Codeit');
    }
  };
  
// 콜백 함수로 활용
 myBtn.addEventListener('click', function () {
    console.log('button is clicked!');
  });
  
// 고차 함수로 활용
function myFunction() {
    return function () {
      console.log('Hi!?');
    };
  };

// 파라미터의 기본값 
function sayHi(name = 'Codeit') {
    console.log(`Hi! ${name}`);
  }
  
  sayHi('JavaScript'); // Hi! JavaScript
  sayHi(); // Hi! Codeit

// arguments 객체 
function printArguments() {
  // arguments 객체의 요소들을 하나씩 출력
    for (const arg of arguments) {
      console.log(arg); 
    }
  }
  
  printArguments('Young', 'Mark', 'Koby');

// Rest Parameter  = 파라미터 앞에 마침표 세 개를 붙여주면, 여러 개로 전달되는 아규먼트들을 배열로 다룰 수가 있게 됩니다.
  function printArguments(...args) {
    // args 객체의 요소들을 하나씩 출력
    for (const arg of args) {
      console.log(arg); 
    }
  }
  
  printArguments('Young', 'Mark', 'Koby');

// Arrow Function
  // 화살표 함수 정의
    const getTwice = (number) => {
        return number * 2;
  };
  
  // 콜백 함수로 활용
  myBtn.addEventListener('click', () => {
    console.log('button is clicked!');
  });

  // 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
    return number * 2;
  };
  
  // 파라미터를 감싸는 소괄호 생략 가능
  const getTwice = number => {
    return number * 2;
  };
  
  // 2. 함수 동작 부분이 return문만 있을 때
  const sum = (a, b) => {
    return a + b;
  };
  
  // return문과 중괄호 생략 가능
  const sum = (a, b) => a + b;

// this
  const user = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다