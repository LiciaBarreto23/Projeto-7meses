//ENVELOPE
var envelope = document.getElementById("envelope");
var btn_open = document.getElementById("open");
var btn_reset = document.getElementById("reset");

function openEnvelope() {
  envelope.classList.add("open");
  envelope.classList.remove("close");
}
function closeEnvelope() {
  envelope.classList.add("close");
  envelope.classList.remove("open");
}


envelope.addEventListener("click", openEnvelope);
btn_open.addEventListener("click", openEnvelope)
btn_reset.addEventListener("click", closeEnvelope)

//CARTA

var pocket = document.querySelector(".pocket");
var letter = document.querySelector(".letter");
pocket.addEventListener("click", redirecionar);
letter.addEventListener("click", redirecionar)

function redirecionar(){
  if(envelope.classList.contains("open")){
    window.location.href = "pags/carta.html"
  }
}