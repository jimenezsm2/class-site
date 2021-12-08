$( function() {
      $( ".draggable" ).draggable();
    } );


var originalBG = 'rgba(0,0,0,0)';

$('.gradient').mousemove(function(e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    xy = x + " " + y;
    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;


    $(this)
        .css({background: bgWebKit});
    }).mouseleave(function() {
    $(this).css({
        background: originalBG
    });
});

var audio = document.createElement('audio');
var source = document.createElement('source');
var media = document.getElementById('media');
media.appendChild(audio);
audio.appendChild(source);
source.setAttribute('src', 'sound.mp3');
source.setAttribute('type', 'audio/mpeg');
audio.setAttribute('controls', 'controls');
