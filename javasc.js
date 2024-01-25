var numofdrum = document.querySelectorAll(".drum").length;
console.log(numofdrum);

for (var i = 0 ; i< numofdrum ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })

}
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
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
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        default: console.log(ke1);
            break;
    }
}
function buttonAnimation(button){
    var activeButton = button;
    document.querySelector("."+activeButton).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+activeButton).classList.remove("pressed");
    },100)
}