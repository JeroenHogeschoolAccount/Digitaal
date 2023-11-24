// wissel apparaat
// Geleerd via website van docent Sanne bij onderwerp spelen met css - pinguïn
var buttons = document.querySelectorAll("a");

function wisselApparaat() {
	document.body.className = "";
	document.body.classList.add(this.id);
}

for (button of buttons) {
	button.addEventListener("click", wisselApparaat);
}

document.body.classList.add("computer");



// Geleerd via website van docent Sanne bij onderwerp spelen met css - pinguïn
var bewegen = false;
var rondjetoevoegen = false;
var klokjebewegen;
var test;

document.addEventListener('mousemove', function (event) {
	// moving = true;
	clearTimeout(klokjebewegen);
	klokjebewegen = setTimeout(movingStopped, 300);
	if(rondjetoevoegen == false) {
		addDot(event);
	}
});

function movingStopped() {
	bewegen = false;
}

function addDot(event) {
	rondjetoevoegen = true;

	let nieuwe = document.createElement("div");
	nieuwe.classList.add("rondje");
    var test2;
	
	nieuwe.style.setProperty("--dotSize", Math.floor( Math.random() * 20 + 20));
	nieuwe.style.setProperty("--dotLeft", event.clientX);
	nieuwe.style.setProperty("--dotTop", event.clientY);
	nieuwe.style.setProperty("--dotAngle", Math.floor( Math.random() * 90 + 4 ));

	nieuwe.addEventListener("animationend", function(event){
		nieuwe.parentNode.removeChild(nieuwe);
	});

	document.body.appendChild(nieuwe);

	setTimeout(function(){
		rondjetoevoegen = false;
	},1);
}