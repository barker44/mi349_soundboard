var buttonElement1 = document.getElementById('button-1')
var buttonElement2 = document.getElementById('button-2')
var buttonElement3 = document.getElementById('button-3')

var bubbling = document.getElementById("bubbling1.wav")
var coin = document.getElementById("coin.wav")
var crash = document.getElementById("crash_x.wav")

buttonElement1.addEventListener('click', function () {
    console.log('I was clicked!')
    bubbling.play();
  })

  buttonElement1.addEventListener('mouseenter', function () {
    bubbling.play();
  })


  buttonElement2.addEventListener('click', function () {
    console.log('I was clicked!')
    coin.play();
  })
  buttonElement2.addEventListener('mouseenter', function () {
    coin.play();
})


  buttonElement3.addEventListener('click', function () {
    console.log('I was clicked!')
    crash.play();
  })
  buttonElement3.addEventListener('mouseenter', function () {
    crash.play();
})