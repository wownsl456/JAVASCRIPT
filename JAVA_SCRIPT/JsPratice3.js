function isPalindrome(word) {
    // 여기에 코드를 입력해 주세요.
  for (let i = 0; i < Math.floor(word.length / 2); i++){
    let left = word[i];
    let right = word[word.length - 1 - i]
    if (left !== right) {
       return false
      }
    }
    return true
  }
  
  // 테스트 코드
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("stars"));
  console.log(isPalindrome("기러기"));
  console.log(isPalindrome("123321"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("kayak"));
  /* 결과값 = * true
            * false
            * true
            * true
            * false
            * true */