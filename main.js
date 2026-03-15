const targetDate = new Date();
targetDate.setMinutes(targetDate.getMinutes() + 59);

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = setInterval(() => {

const now = new Date().getTime();
const distance = targetDate.getTime() - now;

if(distance <= 0){
clearInterval(countdown);
hoursEl.textContent="00";
minutesEl.textContent="00";
secondsEl.textContent="00";
return;
}

const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
const seconds = Math.floor((distance % (1000*60))/1000);

hoursEl.textContent = hours<10 ? "0"+hours : hours;
minutesEl.textContent = minutes<10 ? "0"+minutes : minutes;
secondsEl.textContent = seconds<10 ? "0"+seconds : seconds;

if(distance <= 10*60*1000){
document.querySelectorAll('.countdown span').forEach(el=>{
el.style.color="#ff4444";
el.style.animation="blink 0.5s infinite";
});
}

},1000);
