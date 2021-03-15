// Es2015 이후부터는 자바스크립트에서 변수나 함수를 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다음과 같이 축약해서 사용할 수 있다.

function sayHi() {
    console.log('Hi');
};

const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
    title,
    birth,
    job,
    sayHi,
};

console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: f}

// 메소드를 작성할 때도 다음과 같이 function 키워드를 생략할 수가 있다.

const user = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(user.getFullName()); // Tess Jang

// 대괄호를 활용하면 다양한 표현식으로 프로퍼티 네임을 작성할 수도 있다.

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
    ['topic' + 'name']: 'Modern JavaScript',
    [propertyName]: 2017,
    [getJob()]: '프로그래밍 강사',
};

console.log(codeit);

// 구조 분해 (Destructuring) 
/* 배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 
배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수가 있다. */

// Array Destructuring

const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
    title: '맥북 프로 16형',
    price: 3690000,
    memory: '16 GB 2667 MHz DDR4',
    storage: '1TB SSD 저장 장치',
};

const {title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}

// 에러와 에러 객체
/* 에러가 발생하면 에러에 대한 정보를 name과 message라는 프로퍼티로 담고 있는 에러 객체가 만들어진다.
   대표적인 에러 객체는 SyntaxError(문법오류),ReferenceError(객체에 존재하지 않는 변수를 참조했을때 나타나는 오류),TypeError(연산을 할 수 없을떄 발생하는 오류)가 있다. */

// 에러 객체는 직접 만들 수도 있다 new키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, throw 키워드로 에러를 발생시킬 수 있다.

throw new TypeError('타입 에러가 발생했습니다.');

// try catch문 
/* try catch문은 자바스크립트에서 대표적인 에러 처리 방법입니다. */

try {
    // 실행할 코드
} catch (error) {
    // 에러 발생 시 동작할 코드
}

// try catch문에서 에러의 유무와 상관없이 항상 동작해야할 코드가 필요하다면 finally문을 활용할 수 있습니다.

try {
    // 실행활 코드
}  catch (error) {
    // 에러가 발생했을 때 실행할 코드
}  finally {
    // 항상 실행할 코드
};