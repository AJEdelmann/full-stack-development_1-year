// Piano Keys
// You’re a web developer who has been hired by a music education company. This client wants you to create an interactive game to help their beginner-level piano students study. Create a piano player with DOM events in JavaScript!

// These keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
})

// These functions allow the change of color for the keys, this functions are called in the next step
const keyPlay = (event) => {
  event.target.style.backgroundColor = "#6df0c2";
}

const keyReturn = (event) => {
  event.target.style.backgroundColor = "";
}

// This function trig the change of colors when you play the notes 
let eventAssignment = (note) => {
  note.onmousedown = () => {
    keyPlay(event);
  }
  note.onmouseup = () => {
    keyReturn(event);
  }
}

// This loop run the array elements through the function
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// This is the event handler function for the first progress button
nextOne.onclick = () => {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";
}

// This is the event handler function for the second progress button
nextTwo.onclick = () => {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById("word-five").innerHTML = "DEAR";
  document.getElementById("word-six").innerHTML = "FRI-";

  lastLyric.style.display = "inline-block";

  document.getElementById("letter-note-three").innerHTML = "G";
  document.getElementById("letter-note-four").innerHTML = "E";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("letter-note-six").innerHTML = "B";
}

// This is the event handler function for the third progress button
nextThree.onclick = () => {
  startOver.hidden = false;
  nextThree.hidden = true;

  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("word-three").innerHTML = "BIRTH";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("word-six").innerHTML = "YOU!";

  document.getElementById("letter-note-one").innerHTML = "F";
  document.getElementById("letter-note-two").innerHTML = "F";
  document.getElementById("letter-note-three").innerHTML = "E";
  document.getElementById("letter-note-four").innerHTML = "C";
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";

  lastLyric.style.display = "none";
}

// This is the event handler function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}