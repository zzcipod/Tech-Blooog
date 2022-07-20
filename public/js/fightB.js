const white = document.getElementById("white");
const back = document.getElementById("back");
const fight = document.getElementById("fight");

const monName = document.getElementById("monster_name");
const monHealth = document.getElementById("monster_health");
const monAttack = document.getElementById("monster_attack");

const charHealth = document.getElementsByClassName("charHealth");
const charAttack = document.getElementsByClassName("charAttack");


let monster_name = monName.textContent;
let monster_health = parseInt(monHealth.textContent);
let monster_attack = parseInt(monAttack.textContent);

console.log(monster_name);
console.log(monster_health);
console.log(monster_attack);

let char_name = charName.textContent;
let char_health = parseInt(charHealth.textContent);
let char_attack = parseInt(charAttack.textContent); 



console.table(charAttack.innerHTML);

console.table(charHealth.innerHTML);

function fightBtn() {

    var list = document.getElementsByClassName("charAttack");
    for (let item of list) {
        console.log('Attack DPS ' + item.innerHTML);
        console.log('MonsterHealth ' +monHealth.innerHTML);
        alert('Monster Health = ' + monHealth.innerHTML);
        DP = parseInt(item.innerHTML);
        DP = -DP
        MonsterHealth = parseInt(monHealth.innerHTML);
        if (MonsterHealth >= 0) {
            monHealth.innerHTML = MonsterHealth + DP;
        } else {
            monHealth.innerHTML = "DEAD";
            alert("You Won!")
            nextBtn();
            break;
        }
    }
}


white.style.color = "white";






function backBtn () {
 
    document.location.replace('/home');
   
}

function nextBtn () {
 
    document.location.replace('/home');
   
}

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/bryan_background.webp')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  
changeBackgroundImage ();
white.style.color = "white";

back.addEventListener("click", backBtn);
fight.addEventListener("click", fightBtn);