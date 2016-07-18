$(document).ready(function() {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png
    var $div = $('ryu');
    $('#ryu').append('<img src ="http://i.imgur.com/90Mmdcm.png">');


    // change the img src on hover to the animated gif of Ryu
    // url: http://i.imgur.com/nTj3Fxx.gif
    // when the user 'unhovers' change back to static Ryu

    $('#ryu > img').hover(function(){
      this.src = "http://i.imgur.com/nTj3Fxx.gif";
    }, function(){
      this.src = "http://i.imgur.com/90Mmdcm.png";
    });

    // when a user clicks, change Ryu's stance
    // url: http://i.imgur.com/Rfj0a80.png
    $('#ryu > img').mousedown(function(){
      this.src = "http://i.imgur.com/Rfj0a80.png";      
    });

    // add the Hadouken!
    // url: http://i.imgur.com/oTyQRvX.gif
    $('#ryu > img').mouseup(function(){
      this.src = "http://i.imgur.com/nTj3Fxx.gif";
    });

    // animate that Hadouken

    // let Ryu relax
    // url: http://i.imgur.com/90Mmdcm.png

});
