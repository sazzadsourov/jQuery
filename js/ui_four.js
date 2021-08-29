$(document).ready(function () {
// add effect
$( function() {
    $( "#button_add" ).on( "click", function() {
      $( "#effect_add" ).addClass( "newClass_add", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect_add" ).removeClass( "newClass_add" );
      }, 1500 );
    }
  } );

// remove effecta  
$( function() {
    $( "#button_remove" ).on( "click", function() {
      $( "#remove_effect" ).removeClass( "newClass_remove", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#remove_effect" ).addClass( "newClass_remove" );
      }, 1500 );
    }
  } );

// Switch effect
$( function() {
    $( "#button_switch" ).on( "click", function() {
      $( ".newClass_switch" ).switchClass( "newClass_switch", "anotherNewClass_switch", 1000 );
      $( ".anotherNewClass_switch" ).switchClass( "anotherNewClass_switch", "newClass_switch", 1000 );
    });
  } );

// toggle effect
$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#toggle_effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#toggle_effect" ).toggle( selectedEffect, options, 500 );
    };
 
    // Set effect from select menu value
    $( "#toggle_button" ).on( "click", function() {
      runEffect();
    });
  } );

// range slide
$( function() {
    $( "#slider_range" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 200, 1000 ],
      slide: function( event, ui ) {
        $( "#amount_slide" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount_slide" ).val( "$" + $( "#slider_range" ).slider( "values", 0 ) +
      " - $" + $( "#slider_range" ).slider( "values", 1 ) );
  } );








})