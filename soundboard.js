console.log('I was clicked!')
var buttonElement1 = document.getElementById('button-1');
var buttonElement2 = document.getElementById('button-2');
var buttonElement3 = document.getElementById('button-3');

function play() {
  alert("test");
  new Audio("bubbling1.wav").play();
}

buttonElement1.addEventListener('click', play);
