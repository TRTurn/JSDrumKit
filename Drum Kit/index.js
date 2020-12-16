
// Number of drum buttons
var num_of_drum_buttons = document.querySelectorAll(".drum").length;


// Loop for adding event listener to all drum buttons for on-click
for (var i = 0; i<num_of_drum_buttons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button_key = this.innerHTML;
    key_press(button_key);
    button_animation(button_key);
  });
}

// Switch statement to control for audio
function key_press(key){

  switch (key) {

    case "w":
      var crash_audio = new Audio('sounds/crash.mp3');
      crash_audio.play();
        break;

    case "a"  :
      var kick_audio = new Audio('sounds/kick-bass.mp3');
      kick_audio.play();
        break;

    case "s"  :
      var snare_audio = new Audio('sounds/snare.mp3');
      snare_audio.play();
        break;

    case "d"  :
      var tom_1_audio = new Audio('sounds/tom-1.mp3');
      tom_1_audio.play();
        break;

    case "j"  :
      var tom_2_audio = new Audio('sounds/tom-2.mp3');
      tom_2_audio.play();
        break;

    case "k"  :
      var tom_3_audio = new Audio('sounds/tom-3.mp3');
      tom_3_audio.play();
        break;

    case "l"  :
      var tom_4_audio = new Audio('sounds/tom-4.mp3');
      tom_4_audio.play();
        break;

    default: console.log(key)

  }
}

// Allows keys to be pressed and trigger audio
document.addEventListener("keydown", function(event) {
  key_press(event.key);
  button_animation(event.key);
});

// Adds animation on key-press
function button_animation(currentKey){
  var active_button = document.querySelector('.' + currentKey);
  active_button.classList.add('pressed');
  setTimeout(function(){
        active_button.classList.remove('pressed');
  }, 100);

}
