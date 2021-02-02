var min = 00
var sec = 00
var milisec =  00
var displaymin = document.getElementById('main')
var displaysec = document.getElementById('sec')
var displaymilisec = document.getElementById('mili')
var interval;

function timer(){
    milisec++
    displaymilisec.innerHTML = milisec
    if(milisec == 100){
        sec++
        displaysec.innerHTML = sec
        milisec = 0
    }else if(sec == 60){
        min++
        displaymin.innerHTML = min
        sec = 0
}}

 

function start(){
    document.getElementById('start').style.display = 'none'
    interval = setInterval(timer, 10)
}
function pause(){
    document.getElementById('start').style.display = 'inline-block'
    clearInterval(interval)
}
function reset(){
    pause()
    milisec = 0
    sec = 0
    min = 0
    displaymilisec.innerHTML = milisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
}

