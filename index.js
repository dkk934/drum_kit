// step1.  click playsound
var noDB= document.querySelectorAll(".drum").length;

for (var i = 0; i < noDB; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var biH = this.innerHTML;
       
        mS(biH);
        btnA(biH);
    })
}

        
// step3.  keybored keypress 
document.addEventListener("keypress",function(a){
    mS(a.key);

    btnA(a.key);
 })


// step2.  playsound
function mS(key){
    
    switch (key) {
        case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            alert("Wrong keypress");
            break;
    }
}


// step4. set time out on class animation 

function btnA(ckey){
    document.querySelector("."+ ckey).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+ ckey).classList.remove("pressed");
},200)
}
