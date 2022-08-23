x = 0;
y = 0;

draw_apple = "";

apple= 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 apple = Number(content);
 if(Number.isInteger(apple)){

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  draw_apple = "set"; 
}
}

function setup() {
  width = window.innerWidth;
  heigth = window.innerHeight;
  canvas = createCanvas(width,heigth-150);
}
function preload(){
  pick_apple = loadImage("apple eaten.png")
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = apple + " Apples drawn,But who ate my apples? ";
  
    for(var i= 1;i<=apple;i++){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*500);

      image(pick_apple,x,y,50,50);
    }
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
