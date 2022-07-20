const back = document.getElementById("homepage");



function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/store_background.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  
changeBackgroundImage ();


const white = document.getElementById("white");

white.style.color = "white";

function backBtn () {
 
  document.location.replace('/home');
 
}


back.addEventListener("click", backBtn);
