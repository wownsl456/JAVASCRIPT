// Spread 구문 

// 객체 Spread하기

/* 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사할 수가 있게 된다. */

  const codeit = { 
    name: 'codeit', 
  };
  
  const codeitClone = { 
    ...codeit, // spread 문법!
  };
  
  console.log(codeit); // {name: "codeit"}
  console.log(codeitClone); // {name: "codeit"} 

/* 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때도 활용할 수 있다. */

  const latte = {
    esspresso: '30ml',
    milk: '150ml'
  };
  
  const cafeMocha = {
    ...latte,
    chocolate: '20ml',
  }
  
  console.log(latte); // {esspresso: "30ml", milk: "150ml"}
  console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}

// 주의사항

/* Spread 구문을 사용해서 새로운 배열을 만든다거나 함수의 아규먼트로 사용할 수는 없다. */

  const latte = {
    esspresso: '30ml',
    milk: '150ml'
  };
  
  const cafeMocha = {
    ...latte,
    chocolate: '20ml',
  }
  
  [...latte]; // Error
  
  (function (...args) {
    for (const arg of args) {
      console.log(arg);
    }
  })(...cafeMocha); // Error