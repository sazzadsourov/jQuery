$(document).ready(function () {
// Progressbar
$( function() {
    var progressbar = $( "#progressbar_one" ),
      progressLabel = $( ".progress_label1" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Successful!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
  } );

// Selectmenu

$( function() {
    var circle = $( "#select_circle" );
 
    $( "#circle_size" ).selectmenu({
      change: function( event, data ) {
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
     });
 
    $( "#circle_color" ).selectmenu({
       change: function( event, data ) {
         circle.css( "background", data.item.value );
       }
     });
  } );

//   
$( function() {
    $( "#tabs_item" ).tabs();
  } );

// Tooltip
$( function() {
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<button>" )
      .text( "submit" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
  } );

// Hide

$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#hide_effect" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#hide_effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#hide_button" ).on( "click", function() {
      runEffect();
    });
  } );









})