// 여기에 코드를 작성해 주세요.
import { addMenu } from './add.js';  // import = 가져오다

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
