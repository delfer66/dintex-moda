/*
//quita la pantalla de carga cuanto los elementos estan cargados
$(document).ready(function() {
    $("#loader").fadeOut(2000);
});
*/

/*
//quita la pantalla de carga justo cuando se carga la imagen
//OJO NO siempre funciona
$('#imagen_portada')
    .on('load', function() { console.log("image cargada"); $("#loader").fadeOut(2000); })
    .on('ready', function() { console.log("image ready"); $("#loader").fadeOut(2000); })
    .on('error', function() { console.log("error loading image");  $("#loader").fadeOut(2000);})
*/


//quita el scroll mientras carga la pagina
var scroll_Stop = document.getElementById('body_id');
if(debug_scroll) scroll_Stop.classList.remove('stop-scroll');

//quita la pantalla de carga cuanto los elementos estan cargados
var image1 = document.getElementById('imagen_portada');
$(document).ready(function() {
    intervalo1 = setInterval(function(){
        //console.log(image1.complete);
        //console.log(image1.naturalHeigh);
        if(image1.complete && image1.naturalHeight !== 0){
            //console.log(image1.complete);
            //console.log(image1.naturalHeigh);
            //console.log("image cargada x2"); 
            
            $("#loader").fadeOut(1000);
            clearInterval(intervalo1);
            
            if(!debug_scroll) scroll_Stop.classList.remove('stop-scroll');
        }
    },1000);
});



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