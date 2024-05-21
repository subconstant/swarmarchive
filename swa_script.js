function video(x){ document.getElementById('player').src = x; }

const moonlight = SunCalc.getMoonIllumination(new Date())['fraction'];
//const moonlight = 0.7; // for testing
document.getElementById('moonlight').innerHTML = Math.round(moonlight * 100);

function close(){
    document.querySelectorAll('.open').forEach(function(a){a.remove()});
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
}

function open(){
    document.querySelectorAll('.closed').forEach(function(a){a.remove()});
    document.body.style.background = "#ff";
    document.body.style.color = "#00";
}

if(moonlight >= 0.90){ open() } else { close() };