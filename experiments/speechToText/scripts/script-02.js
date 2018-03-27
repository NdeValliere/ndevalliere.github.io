try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}


var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

// Get all notes from previous sessions and display them.
// var notes = getAllNotes();
// renderNotes(notes);


/*-----------------------------
      Voice Recognition
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.
recognition.continuous = true;

// This block is called every time the Speech APi captures a line.
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far.
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};


//Start as soon as page loads
$(document).ready(recognition.start());

// Sync the text inside the text area with the noteContent variable.
//-
//edit to overlay what user is saying and what is in placeholder!
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})


/*-----------------------------
      Speech Synthesis
------------------------------*/

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}


//Window resize content - 
//-
$(document).ready(resize);
$(window).resize(resize);

function resize() {
  var IH = window.innerHeight,
      IW = window.innerWidth;
		$(".container__grid--center").css({"margin-top": (IH - $(".container__grid--center").innerHeight())/2
                                      });
}

// //Adjust size of type depending on volume
// //-
// var audioContext = null;
//
// var typeA = null;
// var typeB = null;
// var typeC = null;
// var typeD = null;
// var typeE = null;
// var typeF = null;
// var typeG = null;
// var typeH = null;
// var typeI = null;
// var typeJ = null;
// var typeK = null;
// var typeL = null;
//
// var meter = null;
// var WIDTH=500;
// var HEIGHT=50;
// var rafID = null;
//
// window.onload = function() {
//
//   // grab our elements to change with sound
// 	typeA = document. getElementById("word--1");
// 	typeB = document. getElementById("word--2");
// 	typeC = document. getElementById("word--3");
// 	typeD = document. getElementById("word--4");
// 	typeE = document. getElementById("word--5");
// 	typeF = document. getElementById("word--6");
// 	typeG = document. getElementById("word--7");
// 	typeH = document. getElementById("word--8");
// 	typeI = document. getElementById("word--9");
// 	typeJ = document. getElementById("word--10");
// 	typeK = document. getElementById("word--11");
// 	typeL = document. getElementById("word--12");
//
//
//     // monkeypatch Web Audio
//     window.AudioContext = window.AudioContext || window.webkitAudioContext;
//
//     // grab an audio context
//     audioContext = new AudioContext();
//
//     // Attempt to get audio input
//     try {
//         // monkeypatch getUserMedia
//         navigator.getUserMedia =
//         	navigator.getUserMedia ||
//         	navigator.webkitGetUserMedia ||
//         	navigator.mozGetUserMedia;
//
//         // ask for an audio input
//         navigator.getUserMedia(
//         {
//             "audio": {
//                 "mandatory": {
//                     "googEchoCancellation": "false",
//                     "googAutoGainControl": "false",
//                     "googNoiseSuppression": "false",
//                     "googHighpassFilter": "false"
//                 },
//                 "optional": []
//             },
//         }, gotStream, didntGetStream);
//     } catch (e) {
//         alert('getUserMedia threw exception :' + e);
//     }
//
// }
//
//
// function didntGetStream() {
//     alert('Stream generation failed.');
// }
//
// var mediaStreamSource = null;
//
// function gotStream(stream) {
//     // Create an AudioNode from the stream.
//     mediaStreamSource = audioContext.createMediaStreamSource(stream);
//
//     // Create a new volume meter and connect it.
//     meter = createAudioMeter(audioContext);
//     mediaStreamSource.connect(meter);
//
//     // kick off the visual updating
//     drawLoop();
// }
//
// function drawLoop( time ) {
// 		// console.log("meter.volume: " + meter.volume);
//
// 		typeA.style.fontSize = meter.volume*1000 + "px";
// 		typeA.style.marginTop = "" + meter.volume*10000 + "px";
//
// 		typeB.style.fontSize = meter.volume*100 + "px";
// 		typeB.style.marginTop = "-" + meter.volume*100 + "px";
//
// 		typeC.style.fontSize = meter.volume*2000 + "px";
// 		typeC.style.marginTop = "-" + meter.volume*2000 + "px";
//
// 		typeD.style.fontSize = meter.volume*800 + "px";
// 		typeD.style.marginTop = "" + meter.volume*800 + "px";
//
// 		typeE.style.fontSize = meter.volume*100 + "px";
// 		typeE.style.marginTop = "-" + meter.volume*100 + "px";
//
// 		typeF.style.fontSize = meter.volume*1000 + "px";
// 		typeF.style.marginTop = "" + meter.volume*10000 + "px";
//
// 		typeG.style.fontSize = meter.volume*100 + "px";
// 		typeG.style.marginTop = "-" + meter.volume*100 + "px";
//
// 		typeH.style.fontSize = meter.volume*950 + "px";
// 		typeH.style.marginTop = "" + meter.volume*950 + "px";
//
// 		typeI.style.fontSize = meter.volume*1800 + "px";
// 		typeI.style.marginTop = "-" + meter.volume*1800 + "px";
//
// 		typeJ.style.fontSize = meter.volume*1000 + "px";
// 		typeJ.style.marginTop = "-" + meter.volume*1000 + "px";
//
// 		typeK.style.fontSize = meter.volume*500 + "px";
// 		typeK.style.marginTop = "" + meter.volume*500 + "px";
//
// 		typeL.style.fontSize = meter.volume*5000 + "px";
// 		typeL.style.marginTop = "-" + meter.volume*5000 + "px";
//
// 		// type.style.textShadow = meter.volume*100000 + "px " + meter.volume*100000 + "px 0 #000";
// 		// type.style.color = "red";
// 		// type.style.letterSpacing = meter.volume*1000 + "px";
//
//     // set up the next visual callback
//     rafID = window.requestAnimationFrame( drawLoop );
// }
