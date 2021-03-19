import { addMenu } from './add.js';
// 여기에 코드를 작성해 주세요.
import { deleteMenuByIndex as deleteMenu} from './delete.js'; // as 를 사용하면 해당 파일에 해당하는 변수나 함수를 바꿀수 있다.

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
