$(document).ready( function() {
  $('.title').delay(19500).fadeTo(2000, 1);
  $('#enter-btn').hide(1).delay(19500).fadeIn(2000);
  $('#close').delay(2000).fadeTo(2000, 1).delay(15500).fadeOut(2000);

//below is for text change on enter btn.

  $("#enter-btn").on('mouseenter', () => {
  $("#enter-btn").text("If You Dare");
  });
  
  $("#enter-btn").on('mouseleave', () => {
  $("#enter-btn").text("Enter");
  });
  
  //below triggers poster if device is mobile and hides video content.
  function idleTime() { 
  var vid = $('#landingvid');
  var vidCurrentTime = vid.currentTime;
  var posterTrigger = vidCurrentTime ++1;
    
    if(vidCurrentTime >= 5) {
       vid.hide(1);
       $('#poster').show();
    }
  }
  setInterval(idleTime, 1000);
  
});
