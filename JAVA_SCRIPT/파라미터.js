// 여기에 코드를 입력해 주세요.
function teraToGiga(x){
    console.log( x + 'TB는')
    console.log( x * 1024 +  'GB 입니다.')
  };
  
  function teraToMega(x){
    console.log( x + 'TB는')
    console.log( x * 1024 * 1024 + 'MB 입니다.')
  };
  
  // TB -> GB 테스트
  teraToGiga(2);
  // TB -> MB 테스트
  teraToMega(2);
  /* 결과값 = * 2TB는
            * 2048GB 입니다.
            * 2TB는
            * 2097152MB 입니다. */