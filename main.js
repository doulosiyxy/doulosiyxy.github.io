
$('#enter-btn').hide();
$(document).ready( function() {
  
.delay(2000).fadeTo(2000, 1) 
  
  $("#landingvid").bind("ended", function() {
  
  $('.title').fadeTo(2000, 1);
  $('#enter-btn').fadeIn(2000);
  $('#close').fadeOut(2000);
    
 });

//below is for text change on enter btn.

  $("#enter-btn").on('mouseenter', () => {
  $("#enter-btn").text("If You Dare");
  });
  
  $("#enter-btn").on('mouseleave', () => {
  $("#enter-btn").text("Enter");
  });
  
 //controls for mobile devices
  
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 document.getElementById("landingvid").controls = true;
}
  
  
});
