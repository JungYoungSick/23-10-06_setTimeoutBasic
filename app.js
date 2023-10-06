



function sosa() {
  setTimeout(function() {
    console.log('소사');
    sosa();
  }, 1000);
};

sosa();