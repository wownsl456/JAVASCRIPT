const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성해 주세요.
const answer = quiz.map((word, i) => {     // return문 밖에 없기 때문에 quiz.map((word, i) => word[i]);로 함축 시킬수 있다. 
  return word[i];
});


// 테스트 코드
console.log(answer);