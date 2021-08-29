$(document).ready(function () {
// before()
  $( ".before_text" ).before( document.createTextNode( "Hello" ) );

// after()
$( ".after_text" ).after( document.createTextNode( "Hello" ) );

// closest
$( document ).on( "click", function( event ) {
  $( event.target ).closest( ".closest_li" ).toggleClass( "highlight1" );
});

// delegate
$( "body" ).delegate( ".delegate_text", "click", function() {
  $( this ).after( "<p>Another paragraph!</p>" );
});

// empty
$( "#empty_btn" ).click(function() {
  $( ".empty_text" ).empty();
});
















})