// 조건 연산자 (Conditional operator)
const CUT_OFF = 80;

function passChecker(score) {
    return score > CUT_OFF ? '합격!' : '불합격!';   // ? = truthy 할 때 표현식  : = falsy 할 때 표현식
  }

  console.log(passChecker(75));

  /* 결과값 = 불합격! */