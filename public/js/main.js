const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const zero = document.querySelector(".zero");
let seconds = 0;
let timer = 0;

function creatTimer(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
    timeZone: "UTC",
  });
}

function startClock() {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = creatTimer(seconds);
  }, 1000);
}

start.addEventListener("click", () => {
  clock.classList.remove("paused");
  start.classList.add("disabled");
  clearInterval(timer);
  console.log(timer);
  startClock();
});

pause.addEventListener("click", () => {
  clock.classList.add("paused");
  start.classList.remove("disabled");
  start.innerHTML = `<img src="../../public/images/rotate-clockwise.svg" alt="iniciar o timer"><span>retomar</span>`;
  clearInterval(timer);
});

zero.addEventListener("click", () => {
  clock.classList.remove("paused");
  start.classList.remove("disabled");
  start.innerHTML = `<img src="../../public/images/player-play.svg" alt="iniciar o timer"><span>iniciar</span>`;
  clearInterval(timer);
  clock.innerHTML = "00:00:00";
  seconds = 0;
});

console.log(timer);
