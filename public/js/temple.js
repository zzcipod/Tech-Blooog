const back = document.getElementById("homepage");
const white = document.getElementById("white");

white.style.color = "white";


function changeBackgroundImage() {
  document.body.style.backgroundImage = "url('/images_character/temple_background.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

changeBackgroundImage ();




function backBtn () {
 
  document.location.replace('/home');
 
}


back.addEventListener("click", backBtn);