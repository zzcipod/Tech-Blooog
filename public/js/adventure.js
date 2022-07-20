const back = document.getElementById("back");
const start = document.getElementById("begin");
const white = document.getElementById("white");


function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/tavern.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  
changeBackgroundImage ();

function backBtn () {
 
  document.location.replace('/home');
 
}

function startBtn () {
 
  document.location.replace('/fightS');
 
}

white.style.color = "white";


start.addEventListener("click", startBtn);
back.addEventListener("click", backBtn);