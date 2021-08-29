$(document).ready(function () {
  // form submit
  $( ".submit_form" ).submit(function( event ) {
    if ( $( ".submit_input" ).first().val() === "web" ) {
      $( ".submit_text2" ).text( "Validated..." ).show();
      return;
    }
   
    $( ".submit_text2" ).text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
  });
  // form select
  $( "#select_input" ).select(function() {
    $( ".form_select" ).text( "Something was selected" ).show().fadeOut( 1000 );
  });
  // focus
  $( "#focus_input" ).focus(function() {
    $( this ).next( ".focus_span" ).css( "display", "inline" ).fadeOut( 1000 );
  });

// form button()
var input = $( "form_btn_input:reset" ).css({
  background: "yellow",
  border: "3px red solid"
});
$( ".form_text3" )
  .text( "For this type jQuery found " + input.length + "." )
  .css( "color", "red" );
 
// Prevent form submission
$( "#form_btn" ).submit(function( event ) {
  event.preventDefault();
});
// form link
$( ".a_link[hreflang|='en']" ).css( "border", "3px solid green" );






















})