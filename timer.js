 
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500 ;
let interval;

const updateTimer = () => {
    const minute = Math.floor(timeLeft / 60);
    const second   =  timeLeft % 60;

    timer.innerHTML = `${minute.toString().padStart(2,"0")}
    :
    ${second.toString().padStart(2,"0")}`;
};

// when we click start button this function starts and execution 1500 seconds , as minute .
const startTimer = () =>{
   interval = setInterval(() => {
      timeLeft--;
      updateTimer();

      if(timeLeft === 0){
        clearInterval(interval);
        alert("Time's Up!");
        timeLeft = 1500;
        updateTimer();
      }
   },1000)
}


const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stop);
reset.addEventListener("click",reset);


// Simple script to update the time in real-time
function updateTime(){
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US' , {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('current-time').textContent = timeString;
}

updateTime();
setInterval(updateTime , 1000);  // update every second .

