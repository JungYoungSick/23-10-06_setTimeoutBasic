



function sosa() {
  setTimeout(function() {
    console.log('소사');
    sosa();
  }, 1000);
};

sosa();

setInterval(function() {}, 1000);
setInterval(function() {
  console.log("소사 이따 향마루 ㄱ?")
}, 1000);