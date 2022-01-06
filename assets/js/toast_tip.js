var toastTrigger = document.getElementById('Toast_tip_social_fab')
var toastLiveExample = document.getElementById('liveToast_tip_social_fab')
//muestra el tip cuando se da click
if (toastTrigger) {
toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
})
}
/*
//muestra el tip apenas se cargue la pagina web
window.addEventListener('DOMContentLoaded', function(ev) { 
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
})
*/

//muestra el tip apenas se cargue la imagen de portada
window.addEventListener("load", event => {
    var image = document.getElementById('imagen_portada');
    var isLoaded = image.complete && image.naturalHeight !== 0;
    if(isLoaded){
        //funcion que espera x tiempo antes de mostrarse
        setTimeout(() => {
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
            //console.log("1 Segundo esperado")
          }, 10000);
    }

});