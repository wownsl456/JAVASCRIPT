// DOM 트리

const myTag = document.querySelector('#list-1'); // HTML에 있는 id태그를 선택

console.log(myTag);

// 요소 노드에 대한 이동 프로퍼티 = 이 프로퍼티들은 노드 중에서도 요소 노드인 경우에만 존재하는 프로퍼티들이다.

element.children // 자식 요소 노드 (element의 자식 요소 모음(HTMLCollection))
element.firstElementChild // 자식 요소 노드 (element의 첫 번째 자식 요소 하나)
element.lastElementChild // 자식 요소 노드 (element의 마지막 자식 요소 하나)
element.parentElement // 부모 요소 노드 (element의 부모 요소 하나)
element.previousElementSibling // 형제 요소 노드 (element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나)
element.nextElementSibling // 형제 요소 노드 (element의 다음(next) 혹은 우측(right)에 있는 요소 하나)

// 모든 노드에 대한 이동 프로퍼티 = 만약 요소 노드가 아닌 다른 노드들을 이동하고 싶은 경우에는 아래와 같은 프로퍼티를 활용할 수 있다.

node.childNodes // 자식 노드 (node의 자식 노드 모음(NodeList))
node.firstChild // 자식 노드 (node의 첫 번째 자식 노드 하나)
node.lastChild // 자식 노드 (node의 마지막 자식 노드 하나)
node.parentNode // 부모 노드 (node의 부모 요소 하나)
node.previousSibling // 형제 노드 (node의 이전(previous) 혹은 좌측 (left)에 있는 노드 하나)
node.nextSibling // 형제 노드 (node의 다음(next) 혹은 우측(right)에 있는 노드 하나)