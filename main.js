var SpeechRecognition = window.webkitSpeechRecognition;    // API to convert speech to text
 var recognition = new SpeechRecognition();                 // creating new API to use it
function start()
{
   document.getElementById("textbox").innerHTML = "";
  
   recognition.start();                              // convert speech to text       
}
recognition.onresult = function(event) {
 
  console.log(event);
 
 
  var Content = event.results[0][0].transcript;
 
   document.getElementById("textbox").innerHTML = Content;
 
  speak()
}
 function speak(){
var synth=window.speechSynthesis
speak_data=document.getElementById("textbox").value  
var utterThis = new SpeechSynthesisUtterance(speak_data); //function to convert Text to Speech
 
synth.speak(utterThis);
Webcam.attach("#camera")

 }
 Webcam.set({
   width: 360,
   height: 250,
   image_format: 'jpeg',
   jpeg_quality: 200
});

