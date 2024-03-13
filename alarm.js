let set_time = document.getElementById("set_time");
let time_set = document.getElementById("time_set");
let timeInput = document.getElementById("timeInput");
let Alarm_music = document.getElementById("Alarm_music");
let set_alarm = document.getElementById("set_alarm");
let stop_alarm = document.getElementById("stop_alarm")
let alarm_message = document.getElementById("alarm_message")

let usersTime;
let liveTimeElement = document.getElementById("liveTime");

let allowAlarm = true

if (set_time) {
    set_time.addEventListener("click", function () {
        usersTime = timeInput.value;
        time_set.textContent = `The time set: ${usersTime}`;
    });
}

if (set_alarm) {
    set_alarm.addEventListener('click', function () {
        alarm_message.textContent = prompt("Enter the name of the alarm")
        alert(`Your Alarm is set successfully`);
    });
}

function checkAlarm() {
    let currentTime = new Date();
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let liveTime = `${hours}:${minutes}`;

    if (usersTime === liveTime) {
       if(allowAlarm){
        Alarm_music.play();
       }
    }
}

function updateLiveTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');

    let liveTime = `${hours}:${minutes}:${seconds}`;
    liveTimeElement.textContent = `Current Time: ${liveTime}`;

    checkAlarm(); // Check for the alarm every second
}

setInterval(updateLiveTime, 1000);

let pause_alarm= ()=>{
    Alarm_music.pause();
    allowAlarm = false;
}

if(stop_alarm){
    stop_alarm.addEventListener('click', function(){
        pause_alarm()
    })
}

let reset = ()=>{
    
}
