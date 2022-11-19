var buttonElement1 = document.getElementById('button-1');
var buttonElement2 = document.getElementById('button-2');
var buttonElement3 = document.getElementById('button-3');

function play(element) {
  var audio = new Audio (element);
  audio.play();
}


buttonElement1.addEventListener('click', function(){
  play("bubbling1.wav")
  })

  buttonElement1.addEventListener('mouseenter', function () {
  play("bubbling1.wav")
  })


  buttonElement2.addEventListener('click', function () {
  play("coin.wav")
  })
  buttonElement2.addEventListener('mouseenter', function () {
  play("coin.wav")
})


  buttonElement3.addEventListener('click', function () {
  play("crash_x.wav")
  })
  buttonElement3.addEventListener('mouseenter', function () {
  play("crash_x.wav")
})