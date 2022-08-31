"use strict"

let m = 25;
let s = 0;
let tempo = 1000;

let start;
var test = 1;

let clock = document.getElementsByClassName("clock")[0]
let btt1 = document.getElementById("btt1")
let btt2 = document.getElementById("btt2")
let btt3 = document.getElementById("btt3")

let btx = document.getElementById("btx") 
let bty = document.getElementById("bty") 
let btz = document.getElementById("btz") 
let btk = document.getElementById("btk") 

let music = document.getElementById("music")

function play() {
    start = setInterval(() => { cronos() }, tempo)
}

function pause() {
    clearInterval(start)
}

function stop() {
    clearInterval(start);
    m = 25;
    s = 0;

    clock.innerText = "25:00";
}

function alternar50() {
    clearInterval(start)
    m = 50;
    s = 0;

    clock.innerText = "50:00";
}

function alternar25() {
    clearInterval(start)
    m = 25;
    s = 0;

    clock.innerText = "25:00";
}

function pausa5() {
    clearInterval(start)
    m = 5;
    s = 0;

    clock.innerText = "05:00";
}

function pausa15() {
    clearInterval(start)
    m = 15;
    s = 0;

    clock.innerText = "15:00";
}

function cronos() {

    if (s == 0) {
        s = 59;
        m--;

        if (m == 0) {
            clearInterval(start);
            music.play();
            m = 0;
            s = 0;            
        }

    }else{
    s--;
    }

    var inicio = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    clock.innerHTML = inicio;

    return inicio;
}

btt1.onclick = play;
btt2.onclick = pause;
btt3.onclick = stop;

btx.onclick = alternar25;
bty.onclick = pausa5;
btz.onclick = alternar50;
btk.onclick = pausa15;