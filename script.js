
var randomPicture = [];
randomPicture[0] = "Bilder/Gronn/oppgave1/feil1.jpg, ";
randomPicture[1] = "Bilder/grønn/oppgave1/fjpg";
randomPicture[2] = "Bilder/Rosa/Kenguru.jpg";
randomPicture[3] = "Bilder/Rosa/Rev.jpg";


var randomSounds = [];
randomSounds[0] = "Lydfiler/Bruh.mp3";
randomSounds[1] = "Lydfiler/Bruh.mp3";
randomSounds[2] = "Lydfiler/Bruh.mp3";
randomSounds[3] = "Lydfiler/Bruh.mp3";

var randomQuestions = [];
randomQuestions[0] = "What's the best thing you got from one of your parents?";
randomQuestions[1] = "If you could have any superpower, what would it be and why?";
randomQuestions[2] = "What's your favorite candy?";
randomQuestions[3] = "Have you ever saved someone's life?";

var random = Math.floor(Math.random() * 4);

function image() {
  var img = '<img class="centerFit" src=\"';
  img += randomPicture[random];
  img += '\"/>';
  document.write(img);
}

function question() {
  document.write(randomQuestions[random]);
};

function play() {
  var audio = new Audio(randomSounds[random]);
  audio.play();
}
