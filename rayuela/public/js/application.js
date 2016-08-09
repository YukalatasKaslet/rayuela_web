$(document).ready(function() {
	// Tu código va aquí
  for (var i = 0; i <= 100; i++) {
    $(".table").find("#Player1").append(( "<td>" ));
  };
  for (var i = 0; i <= 100; i++) {
    $(".table").find("#Player2").append(( "<td>" ));
  };

/*Código prueba para ver método each */

  $( "td" ).each(function( index ) {
    if( index === 90 || index === 194){
      $( this ).addClass( "active-meta" );
      console.log( index + ": " + $( this ).text() );
    }
  });



/* Así puedo colorear al ganador jajajaja XD */
/*
  $("#Player1").find( "td" ).each(function( index ) {
      $( this ).addClass( "prueba" );
      console.log( index + ": " + $( this ).text() );
  });  

  $("#Player2").find( "td" ).each(function( index ) {
    $( this ).addClass( "prueba2" ); 
    console.log( index + ": " + $( this ).text() );
  });
*/

});/* Document.ready */
