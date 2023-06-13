//-------------------------------------------------------
//-------------------- VARIABLES ------------------------
const body = document.querySelector("body");
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

let bodyColor = null;


//-------------------------------------------------------
//-------------------- FUNCTIONS ------------------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



//-------------------------------------------------------
//-------------------- IMPLEMENTS -----------------------
btnStart.addEventListener("click", () => {
	bodyColor = setInterval(() => {
		body.style.backgroundColor = getRandomHexColor();
	}, 1000);
	btnStart.disabled = true;
});

btnStop.addEventListener("click", () => {
	clearInterval(bodyColor);
  console.log(`Interval with id ${bodyColor} has stopped!`);
	btnStart.disabled = false;
});
