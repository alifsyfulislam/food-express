let okBtn = document.querySelector('.yes_btn');
let noBtn = document.querySelector('.no_btn');

let leadBox = document.querySelector('.purple_box_lead');
let thanksBox = document.querySelector('.purple_box_thanks');
let containBox = document.querySelector('.purple_box');

let smtBtn = document.querySelector('.user_btn')

var gposX = -100;
let van = document.querySelector('.van_bike');
let van2 = document.querySelector('.van_bike2');
let width = 300;
var goatMove = setInterval(function () {
    van.style.left = gposX+"px";
    van2.style.left = gposX+"px";
    gposX+= 5;
    if(gposX > width){//50
        gposX = -100;
    }
},50);


okBtn.addEventListener('click', goBike);
noBtn.addEventListener('click', goBike);


function goBike() {
    leadBox.classList.remove('hide');
    leadBox.classList.add('fade-in');
}

smtBtn.addEventListener('click',()=>{
    thanksBox.classList.remove('hide');
    thanksBox.classList.add('fade-in');
});