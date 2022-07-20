const adventure = document.getElementById("adventure");
const shop = document.getElementById("shop");
const back = document.getElementById("create");
const temple = document.getElementById("temple");

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/homepage_background.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
  
changeBackgroundImage ();
  
const white = document.getElementById("white");

white.style.color = "white";


function startAdventure () {
  document.location.replace('/adventure');
}

function startShop () {
  document.location.replace('/shop');
}

function startTemple () {
  document.location.replace('/temple');
}

function backBtn () {
 
  document.location.replace('/create');
 
}

adventure.addEventListener("click", startAdventure);
shop.addEventListener("click", startShop);
temple.addEventListener("click", startTemple);
back.addEventListener("click", backBtn);
