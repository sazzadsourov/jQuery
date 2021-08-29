$(document).ready(function () {
// Draggable
$( function() {
    $( "#draggable_text" ).draggable();
  } );

// Droppable
$( function() {
    $( "#draggable_text2" ).draggable();
    $( "#droppable_text" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

// Resizable
$( function() {
    $( "#resizable_text" ).resizable();
  } );

// selectable
$( function() {
    $( "#selectable_item" ).selectable();
  } );

// Sortable
$( function() {
    $( "#sortable_item" ).sortable();
    $( "#sortable_item" ).disableSelection();
  } );






})