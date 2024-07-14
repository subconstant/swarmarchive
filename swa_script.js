function video(x,y,z){
    document.getElementById('play_window').style.opacity = '1';
    document.getElementById('play_window').style.pointerEvents = 'all';

    document.getElementById('topbar').style.background = 'black';
    document.getElementById('topbar').style.color = 'white';
    document.getElementById('topbar').style.borderColor = 'white';
    document.querySelectorAll('.navlink').forEach(function(a){a.style.color = 'white'});

    console.log('url("frames/frame (' + Math.round((Math.random() * 21) + 1) + ').jpeg")');
    document.getElementById('play_window').style.backgroundImage = 'url("frames/frame (' + Math.round((Math.random() * 21) + 1) + ').jpeg")';

    if( z == 'iframe'){
        document.getElementById('i_player').style.display = 'block';
        document.getElementById('i_player').src = x;
    } else if( z == 'video'){
        document.getElementById('v_player').style.display = 'block';
        document.getElementById('v_player').src = x;
    };

    document.getElementById('fright').style.display = 'block';
    document.getElementById('now_playing').innerHTML = y;

    document.getElementById('navbuttons').style.display = 'none';
}

function back(){
    document.getElementById('play_window').style.opacity = '0';
    document.getElementById('play_window').style.pointerEvents = 'none';

    document.getElementById('i_player').style.display = 'none';
    document.getElementById('i_player').src = '';

    document.getElementById('v_player').style.display = 'none';
    document.getElementById('v_player').src = '';

    document.getElementById('fright').style.display = 'none';

    document.getElementById('topbar').style.background = 'white';
    document.getElementById('topbar').style.color = 'black';
    document.getElementById('topbar').style.borderColor = 'black';
    document.querySelectorAll('.navlink').forEach(function(a){a.style.color = 'black'});

    document.getElementById('navbuttons').style.display = 'inline';
}

/*function win(x,y){
    if (x == 1){
        document.getElementById(y).style.opacity = '1';
        document.getElementById(y).style.pointerEvents = 'all';
    } else if(x == 0){
        document.getElementById(y).style.opacity = '0';
        document.getElementById(y).style.pointerEvents = 'none';
    }
}*/

const moonlight = SunCalc.getMoonIllumination(new Date())['fraction'];
document.getElementById('moonlight').innerHTML = Math.round(moonlight * 100);

function close(){
    document.querySelectorAll('.open').forEach(function(a){a.remove()});
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
}

function open(){
    document.querySelectorAll('.closed').forEach(function(a){a.remove()});
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
}

if(moonlight >= 0.90 || window.location.href.includes("?open") ){ open() } else { close() };

function axes(){
    document.querySelectorAll('.video_selector').forEach(function(x) {
        x.style.left= Math.floor(Math.random() * 50) + 30 + 'vw';
        x.style.top= Math.floor(Math.random() * 60) + 30 + 'vh';
    });
}

$(document).ready(function() {
//    $(".draggable").draggable();
});

axes();

function win(id, wintitle, posx, posy, w, h){
    new WinBox({
        id: id + "_window",
        html: document.getElementById(id).innerHTML,
        title: wintitle,
        x: posx+"px",
        y: posy+"px",
        width: w+"px",
        minwidth: w+"px",
        maxwidth: w+"px",
        height: h+"px",
        minheight: h+"px",
        maxheight: h+"px",
    });
}
