$(document).ready(function() {
//   show hide
$( "#showr1" ).click(function() {
  $( ".hide" ).first().show( "fast", function showNext() {
    $( this ).next( ".hide" ).show( "fast", showNext );
  });
});
 
$( "#hidr1" ).click(function() {
  $( ".hide" ).hide( 1000 );
});
// fadeIn
$('.c_fadeIn' ).click(function() {
    $( ".fade1:hidden" ).first().fadeIn( "slow" );
  });

  // fadeOut
  $( ".fadeout1" ).click(function() {
    $( ".fadeout1" ).fadeOut( "slow" );
  });

  // fadeTo
  $( '#fadeTobtn' ).first().click(function() {
    $( '#fadeTotext' ).fadeTo( "slow", 0.33 );
  });
  // fadeToggle
  $( ".f_toggle_btn" ).first().click(function() {
    $( ".f_toggle_text" ).first().fadeToggle( "slow", "linear" );
  });
  $( ".f_toggle_btn" ).last().click(function() {
    $( ".f_toggle_img" ).last().fadeToggle( "fast", function() {
      $( "#log" ).append( "<div>finished</div>" );
    });
  });
 

})
