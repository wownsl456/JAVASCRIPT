let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원']
]

let teams = [
	[],
	[]
];

// 여기에 코드를 작성해 주세요.
for(let i = 0; i < groups.length; i++){
  for(let j = 0; j < groups[i].length; j++){
    teams[j][i] = groups[i][j];
  }
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);
/* 결과값 = * ['영준', '태순', '재훈', '윤형', '규식']
          * ['캡틴', '우재', '지웅', '동욱', '소원'] */