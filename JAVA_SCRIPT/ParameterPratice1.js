// 여기에 코드를 입력해 주세요.
function bmiCalculator(name, weight, tall){
    console.log(name + '님의 체질량지수는 '  
    + weight / (tall * tall / 10000) + '입니다.' )
  };
  
  // 테스트
  bmiCalculator('홀쭉이', 43.52, 160);
  bmiCalculator('코린이', 61.25, 175);
  bmiCalculator('통통이', 77.76, 180);
  /* 결과값 = * 홀쭉이님의 체질량지수는 17입니다.
            * 코린이님의 체질량지수는 20입니다.
            * 통통이님의 체질량지수는 24입니다. */