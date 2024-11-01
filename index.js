document.addEventListener("DOMContentLoaded", function() {
  const sounds = document.querySelectorAll(".sound");
  sounds.forEach(sound => {
    sound.addEventListener("dragstart", dragStart);
  });

  const characters = document.querySelectorAll(".character");
  characters.forEach(character => {
    character.addEventListener("drop", drop);
    character.addEventListener("dragover", allowDrop);
  });

  function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    const soundId = event.dataTransfer.getData("text");
    playSound(soundId);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function playSound(id) {
    const audio = document.getElementById(id);
    audio.play();
  }
});
