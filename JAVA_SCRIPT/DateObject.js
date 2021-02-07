//시간 정보를 표현하고 싶다면 아레와 같은 메소드를 활용해 볼 수도 있다.

let myDate = new Date();
console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)
/* 결과값 = * 2021. 2. 7.
          * 오후 10:34:48
          * 2021. 2. 7. 오후 10:34:48 */

//Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있습니다. 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줍니다.

let myDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다
console.log(myDate) // 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
/* 결과값 = * Mon Feb 01 1988 00:00:00 */

//Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환합니다. 
//이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것이죠.

let myDate = new Date();
console.log(Date.now() === myDate.getTime()); 
/* 결과값 = * true */

//Date객체의 형변환
//세번째 줄에서 Date 객체의 자료형을 확인해보니 object, 즉 객체라는 것을 확인할 수 있는데요.
//Date 객체를 Boolean 으로 변환하면 true가 되고, String으로 변환하면 날짜값이 그대로 문자열로 변환이 됩니다.
//우리가 눈여겨 볼 부분은 Number로 변환할 경우입니다. 이 값은 아무 의미없는 단순한 숫자값이 아니라 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값 입니다.

let myDate = new Date(2017, 4, 18);
console.log(typeof myDate); 
console.log(String(myDate)); 
console.log(Number(myDate)); 
console.log(Boolean(myDate));
/* 결과값 = * object
          * Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
          * 1495033200000
          * true */

let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);
let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // (ms)
console.log(timeDiff / 1000); // (sec)
console.log(timeDiff / 1000 / 60) // (min)
console.log(timeDiff / 1000 / 60 / 60) // (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // (date)
/* 결과값 = * 86400000
          * 86400
          * 1440
          * 24
          * 1 */

//날짜를 표현하는 문자열
//YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 있습니다.
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');