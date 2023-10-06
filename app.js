//1000마다 1초
// setTimeout(function() {
// console.log('첫번째 소사');
// }, 3000)

// 3초 후 첫번째, 2초 후 두번째, 1초 후 세번쨰 출력.
// 콜백 함수 식으로 나오게 작업.

// 첫번째 setTimeout을 부모로 가정하여, 두번쨰와 세번째를 같은 선상에 둘 경우
// 나올 결과값 확인.

setTimeout(function() {
  console.log('첫번째 소사');
  setTimeout(function() {
    console.log('두번째 뭉기');
  }, 2000);

  setTimeout(function() {
    console.log('세번째 밍구');
  }, 1000);
}, 3000);





