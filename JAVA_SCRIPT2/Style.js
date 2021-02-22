// style 프로퍼티 활용하기: element.style.styleName = 'value'
today.children[0].style.textDecoration = 'line-through';

// class 변경을 통해 간접적으로 스타일 적용하기: element.className, element.classList
today.children[0].className = 'done'; // css파일에 .done 이라는 class를 만들어 놓은 상태

// classList의 유용한 메소드: add, remove, toggle
const item = tomorrow.children[1];
item.classList.add('done'); // 클래스를 추가하고 여러 개의 값을 전달하면 여러 클래스 추가 가능
item.classList.remove('done'); // 클래스를 삭제하고 여러 개의 값을 전달하면 여러 클래스 삭제 가능
item.classList.toggle('done'); // 클래스가 없으면 추가, 있으면 삭제를 하고 하나의 값만 적용 가능하며 두 번째 파라미터로 추가 또는 삭제 기능을 강제할 수 있음
