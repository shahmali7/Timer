var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("millisecond");
var minute = document.getElementById("min")
var start = document.getElementById("start");
var stops = document.getElementById("stop");
var clear = document.getElementById("clear");
var sec=00;
var millsec =00;
var min = 00;
var stopper ;

function startTimer(){
    millsec++;

    if(millsec<9){
       milliseconds.innerHTML = "0" + millsec;
    }if(millsec>9){
        milliseconds.innerHTML = millsec;
    }if(millsec>99){
        sec++;
        seconds.innerHTML = "0" + sec;
        millsec = 0;
        milliseconds.innerHTML = "0" + 0;
    }if(sec > 9){
        seconds.innerHTML = sec
    }if(sec>59){
        min++;
        minute.innerHTML ="0"+min
        millsec = 0
        millsec.innerHTML = "0" + 0
        sec = 0
        seconds.innerHTML = "0"+ 0
    }
}
start.onclick =function(){
   stopper = setInterval(startTimer,10)
   start.style.display="none"
}
stops.onclick =function(){
    clearInterval(stopper)
    start.style.display="inline-block"
}
clear.onclick =function(){
    clearInterval(stopper)
    start.style.display="inline-block"
    stops.style.display="inline-block"
    sec = "00"
    min = "00"
    millsec = "00"
    seconds.innerHTML = sec;
    minute.innerHTML = min;
    milliseconds.innerHTML = millsec;
}