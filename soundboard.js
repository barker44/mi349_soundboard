var buttonElement1 = document.getElementById('button-1');
var buttonElement2 = document.getElementById('button-2');
var buttonElement3 = document.getElementById('button-3');

function play() {
  var audio = document.getElementById("bubbling1.wav");
  audio.play();
  alert("test");
}

buttonElement1.addEventListener('click', play());
