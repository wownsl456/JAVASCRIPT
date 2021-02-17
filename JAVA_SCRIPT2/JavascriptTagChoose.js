// 자바스크립트로 태그 선택하기

document.getElementById('Id') // HTML Id속성으로 태그 선택하기 = Id에 해당하는 태그 하나
document.getElementsByClassName('class') // HTML class속성으로 태그 선택하기 = class에 해당하는 태그 모음(HTMLCollection)
document.getElementsByTagName('tag') // HTML 태그 이름으로 태그 선택하기 = tag에 해당하는 태그 모음(HTMLCollection)
document.querySelector('css') // css 선택자로 태그 선택하기 = css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나
document.querySelectorAll('css') // css 선택자로 태그 선택하기 = css 선택자에 해당하는 태그 모음(NodeList)

// 유사배열 = 배열과 유사한 객체  ex = (HTMLCollection,NodeList,DOMTokenList...)
/* 특징 1. 숫자 형태의 indexing이 가능하다.
       2. length 프로퍼티가 있다.
       3. 배열의 기본 메소드를 사용할 수 없다.
       4. Array.isArray(유사배열)의 리턴값은 false다. */

