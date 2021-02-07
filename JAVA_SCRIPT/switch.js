// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	// 여기에 코드를 작성해 주세요.
	switch (grade){
	  case 'VIP':
	    console.log(`${grade}석은 ${VIPPrice}만원 입니다.`)
	    break;
	  case 'R':
	    console.log(`${grade}석은 ${RPrice}만원 입니다.`)
	    break;
	  case 'S':
	    console.log(`${grade}석은 ${SPrice}만원 입니다.`)
	    break;
	  case 'A':
	    console.log(`${grade}석은 ${APrice}만원 입니다.`)
	    break;
	  default:
	    console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
	}

}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');
/* 결과값 = * R석은 13만원 입니다.
          * VIP석은 15만원 입니다.
          * S석은 10만원 입니다.
          * A석은 8만원 입니다.
          * VIP, R, S, A 중에서 하나를 선택해 주세요. */