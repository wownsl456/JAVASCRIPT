// 요소 노드 주요 프로퍼티

// element.innerHTML = 요소 노드 내부의 HTML 코드를 문자열로 리턴해 준다.(내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)

const myTag = document.querySelector('#list-1');

console.log(myTag.innerHTML);
myTag.innerHTML = '<li>Exotic</li>'; // 내부에 있던 값을 완전히 새로운 값으로 교체하기 떄문에 주의해서 사용해야함
console.log(myTag.innerHTML);

// element.outerHTML = 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해 준다.(내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)

const myTag = document.querySelector('#list-1');

console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>'; // 새로운 값을 할당할 경우 요소 자체가 교체되어 버리기 때문에 주의해야 함

// element.textContent = 요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옵니다.(내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)

const myTag = document.querySelector('#list-1');

console.log(myTag.textContent); // textContent는 말그대로 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리함
myTag.textContent = 'new text!'; // 새로운 값을 할당하면 innerHTMl과 마찬가지로 내부의 값을 완전히 새로운 값으로 교체함
                                