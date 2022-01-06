/*
//quita la pantalla de carga cuanto los elementos estan cargados
$(document).ready(function() {
    $("#loader").fadeOut(2000);
});
*/


//quita la pantalla de carga justo cuando se carga la imagen
$('#imagen_portada')
    .on('load', function() { $("#loader").fadeOut(2000); })
    .on('error', function() { console.log("error loading image");  $("#loader").fadeOut(2000);})



//Muestra un tip adicional a los setpoint(60) segundos.
    $(function() {
        var tip_mostrado=false;
        var i = 0;
        var intervalo;
        const setpoint=60;
        $(window)
        .focus(function() {
            //console.log("focus");
            intervalo = setInterval(function(){
                i++;
               //console.log(i);
               if(i == setpoint){
                   if(!tip_mostrado){
                    //console.log("time");
                        tip_mostrado=true;
                        var toast = new bootstrap.Toast(toastLiveExample)
                        toast.show()
                   }                    
                    i=0;
               }
             },1000);
         })
         .blur(function() {
            //console.log("blur");
            clearInterval(intervalo);
            i=0;
         });
      });
    /*
$("<img/>")
    .on('load', function() { console.log("image loaded correctly"); })
    .on('error', function() { console.log("error loading image"); })
    .attr("src", $(originalImage).attr("src"))
;
   */