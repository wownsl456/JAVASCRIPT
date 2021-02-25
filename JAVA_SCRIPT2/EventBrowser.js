// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

// event.preventDefault = 기본 동작을 막을수 있는 코드
link.addEventListener('click', function(e){
    e.preventDefault();
    alert('지금은 이동할 수 없습니다.');
});

input.addEventListener('keydown', function(e){
    e.preventDefault();
    alert('체크박스를 먼저 클릭해 주세요.');
});

text.addEventListener('contextmenu', function(e){
    e.preventDefault();
    alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});