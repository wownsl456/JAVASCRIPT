// 여기에 코드를 작성해 주세요.
function ignoreFisrt(...rest) {
    rest.shift(); // 배열의 메소드중 첫번째 배열을 삭제하는 메소드
    
    for (const el of rest) {
      console.log(el);
    }
  }
  
    
  ignoreFisrt('1세대', '2세대', '3세대');
  ignoreFisrt('곰팡이', '강아지', '고양이');
  ignoreFisrt(20, 9, 18, 19, 30, 34, 40);

  /* 2세대
     3세대
     강아지
     고양이
     9
     18
     19
     30
     34
     40 */