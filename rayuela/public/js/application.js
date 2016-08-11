$(document).ready(function() {
	// Tu código va aquí
  for (var i = 0; i <= 100; i++) {
    $(".table").find("#Player1").append(( "<td>" ));
  };
  for (var i = 0; i <= 100; i++) {
    $(".table").find("#Player2").append(( "<td>" ));
  };

/*Código prueba para ver método each */
/* Esto pinta los "td meta" */
  $( "td" ).each(function( index ) {
    if( index === 90 || index === 194){
      $( this ).addClass( "active-meta" );
      //console.log( index + ": " + $( this ).text() );
    }
  });


/* Así puedo colorear al ganador jajajaja XD  ganador = td 90 */
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


 /* Y así, maravishosamente detecto que tecla se presiona, la ventana solo sale si es la "k" ya que es el número 75*/
  $(document).on('keyup', function(event) {
    // Detecta cual tecla fue presionada y llama al método o función apropiada.    
    var tecla_presionada = event.which;
    if ( tecla_presionada == 75 ){
     alert( "Presionaste la letra " + tecla_presionada ); 
    }
  });

/*
        $( "#start_btn" ).click(function() {
          $(".table").find("#Player1").animate({
            opacity: 0.25,
          }, 5000, function() {
            // Animation complete.
          });
        });
*/
    /*
      $("#Player1").children( ".active" ).next().addClass("active");
      $("#Player1").children( ".active" ).first().removeClass("active");
    */

    
});/* Document.ready */






