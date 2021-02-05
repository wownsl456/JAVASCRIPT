let today = new Date(2021, 2, 5);
let day1 = new Date(2016, 2, 16);

function day(startday){
 let timeDiff = today.getTime() - day1.getTime();
 let dayDiff = timeDiff / 1000 / 60 / 60 / 24

 console.log(`오늘은 제대한 지 ${dayDiff + 1}일째 되는 날 입니다.`)
}

 day(day1);