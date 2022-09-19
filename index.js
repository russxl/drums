

var mySound = new Audio("sounds/crash.mp3");
var mySound1 = new Audio("sounds/kick-bass.mp3");
var mySound2 = new Audio("sounds/snare.mp3");
var mySound3 = new Audio("sounds/tom-1.mp3");
var mySound4 = new Audio("sounds/tom-2.mp3");
var mySound5 = new Audio("sounds/tom-3.mp3");
var mySound6 = new Audio("sounds/tom-4.mp3");

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("keydown", function (event) {
      if (event.keyCode === 65) {
        mySound1.play();
      }
      if (event.keyCode === 87) {
        mySound.play();
      }

      if (event.keyCode === 83) {
        mySound2.play();
      }
      if (event.keyCode === 68) {
        mySound3.play();
      }
      if (event.keyCode === 74) {
        mySound4.play();
      }

      if (event.keyCode === 76) {
        mySound6.play();
      }
      if (event.keyCode === 75) {
        mySound5.play();
      }
    });
}

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")
    [i].addEventListener("click", function () {
      var click = this.innerHTML;

      sounds(click);
      buttonAnimation(click);
    });
}

document.addEventListener("keypress", function (event) {
  sounds(event.key);

  buttonAnimation(event.key);
});
function sounds(click1) {
  switch (click1) {
    case "w":
      mySound.play();

      break;
    case "a":
      mySound1.play();
      break;
    case "s":
      mySound2.play();
      break;
    case "d":
      mySound3.play();
      break;
    case "j":
      mySound4.play();
      break;
    case "k":
      mySound5.play();
      break;
    case "l":
      mySound6.play();
      break;
  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("red");
  activeButton.classList.add("pressed");


  setTimeout(function() {  activeButton.classList.remove("pressed")
    
  }, 500);
  
  console.log("." + currentKey);
}