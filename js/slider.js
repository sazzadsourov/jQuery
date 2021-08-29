$(document).ready(function () {
    // slide up
    $( '#slideupbtn').click(function() {
        if ( $( ".slideup1" ).first().is( ":hidden" ) ) {
        } 
        else {
          $( ".slideup1" ).slideUp();
          $( "#slideupbtn" ).css( "visibility", "hidden" );
        }
      });
    // slide down
    $( "#slideDownbtn1" ).click(function() {
        $( this ).css({
          borderStyle: "inset",
          cursor: "wait"
        });
        $( ".slideDownInput" ).slideDown( 1000, function() {
          $( this )
            .css( "background", "green" )
            .filter( ".middle" )
              .css( "background", "red" )
              .focus();
          $( "#slideDownbtn1" ).css( "visibility", "hidden" );
        });
      });
    //   slide toggle
    $( "#slideToggleBtn" ).click(function() {
        $( ".slidetoggleText" ).slideToggle( "slow" );
      });
// Start animation
$( "#go" ).click(function() {
    $( ".animation_toggle" ).animate({ left: "+=500px" }, 5000 );
  });
   
  // Stop animation when button is clicked
  $( "#stop" ).click(function() {
    $( ".animation_toggle" ).stop();
  });
   
  // Start animation in the opposite direction
  $( "#back" ).click(function() {
    $( ".animation_toggle" ).animate({ left: "-=100px" }, 2000 );
  });

// animate
$( "#goo1" ).click(function() {
    $( "#box01" )
      .animate({
        width: "90%"
      }, {
        queue: false,
        duration: 3000
      })
      .animate({ fontSize: "24px" }, 1500 )
      .animate({ borderRightWidth: "15px" }, 1500 );
  });
   
  $( "#goo2" ).click(function() {
    $( "#box02" )
      .animate({ width: "90%" }, 1000 )
      .animate({ fontSize: "24px" }, 1000 )
      .animate({ borderLeftWidth: "15px" }, 1000 );
  });
   
  $( "#goo3" ).click(function() {
    $( "#goo1" ).add( "#goo2" ).click();
  });
   
  $( "#goo4" ).click(function() {
    $( ".animate_box" ).css({
      width: "",
      fontSize: "",
      borderWidth: ""
    });
  });








})