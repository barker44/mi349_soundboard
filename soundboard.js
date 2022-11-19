var buttonElement1 = document.getElementById('button-1');
var buttonElement2 = document.getElementById('button-2');
var buttonElement3 = document.getElementById('button-3');

function play(element) {
  var audio = document.getElementById(element);
  audio.play();
}


buttonElement1.addEventListener('click', function(){
  play("bubbling.wav")
  })

  buttonElement1.addEventListener('mouseenter', function () {
    bubbling.play();
  })


  buttonElement2.addEventListener('click', function () {
    console.log('I was clicked!');
    coin.play();
  })
  buttonElement2.addEventListener('mouseenter', function () {
    coin.play();
})


  buttonElement3.addEventListener('click', function () {
    console.log('I was clicked!');
    crash.play();
  })
  buttonElement3.addEventListener('mouseenter', function () {
    crash.play();
})