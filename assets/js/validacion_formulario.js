const debug=false;
const debug_scroll=false;
//se usa en => click_texted_inputs.js
var validado_click=false;
//se usa en => click_texted_inputs.js
var empresa_texted=false;
var tel_texted=false;
var nombre_texted=false;
var correo_texted=false;
var dir_texted=false;
var ciudad_texted=false;
var prov_texted=false;
var req_texted=false;

//se usa en => validacion_funciones.js
var validado_todo=false;
//se usa en => validacion_funciones.js
var empresa_valido=false;
var nombre_valido=false;
var telf_valido=false;
var email_valido=false;
var dir_valido=false;
var ciudad_valido=false;
var prov_valido=false;
var uni_req_valido=false;
//se usa en => postmail.js
var error_form;

function validar_formulario(){
    validar_click1(); //esta en => click_texted_inputs.js
    //esta en => validacion_funciones.js
    validar_empresa();
    validar_nombre();
    validar_telf();
    validar_email();
    validar_dir();
    validar_ciudad();
    validar_prov();
    validar_uni_req();
    validate_todo();
    if(debug) console.log("validado_todo: "+ validado_todo);
    if(debug) console.log("validado_click: "+ validado_click);  
    if(validado_todo && validado_click ){      
        enviar_formulario();
    }else{
        set_modal_text1(false);
    }
    
}
function enviar_formulario() {
    var res = grecaptcha.getResponse();
    if (res == "" || res == undefined || res.legth == 0){    
        if(debug) console.log("captcha no resuelto")
        set_modal_text1(false);
        alert("Por favor acepte primero el captcha."); 
    }else{
        disable_submit_bottom(); //desactiva el botton submit
        set_modal_text1(true);
        send_formulario();
        /*
        set_modal_text1(true);
        disable_submit_bottom(); //desactiva el botton sumit
        disable_click();    //resetea todas las var de click
        reset_validacion(); //resetea todas las var de validacion
        limpiarFormulario();// resetea el formulario
        */
        if(debug) console.log("captcha si: "+res);
    }
}

function limpiarFormulario() {
    document.getElementById("formulario_id").reset();
    $('#emailHelp').text('').css('color', 'gray');
    $('#requeridos_Help').text('Requerido').css('color', 'gray');
    $('#provHelp').text('').css('color', 'gray');
}

function set_modal_text1(valor){
    const titulo_modal=document.getElementById("Modal_form_Label");
    const text_modal=document.getElementById("Modal_form_text");
    if(valor){
        titulo_modal.innerHTML = "Enviando...";
        titulo_modal.style.color = 'black';
        text_modal.innerHTML = 
        "Espere un momento se esta enviando el formulario si desea mas información, escribanos a nuestras redes sociales.";
    }else{
        titulo_modal.innerHTML = "Error al enviar formulario";
        titulo_modal.style.color = 'Red';
        text_modal.innerHTML =  
        "Tiene problemas con nuestro formulario? Le pedimos disculpas.<br> Por favor verifique los campos marcados en rojo y complete todos los campos.<br><br> También puede comunicarse con nosotros por nuestras redes sociales.";
    }
}

function set_modal_postmail(valor){
    const titulo_modal=document.getElementById("Modal_form_Label");
    const text_modal=document.getElementById("Modal_form_text");
    if(valor){
        titulo_modal.innerHTML = "Enviado correctamente";
        titulo_modal.style.color = 'green';
        text_modal.innerHTML = 
        "Se a enviado correctamente el formulario si desea mas información, escribanos a nuestras redes sociales.";
    }else{
        titulo_modal.innerHTML = "Oops error al enviar";
        titulo_modal.style.color = 'Red';
        text_modal.innerHTML =  
        error_form+"<br>Tenemos problemas con el envio del formulario, le pedimos disculpas por los inconvenientes.<br> Por favor comuniquese por nuestras redes sociales asta que resolvamos el problema.";
    }
}

function reset_validacion(){
    //se usa en => validacion_funciones.js
    validado_todo=false;
    //se usa en => validacion_funciones.js
    empresa_valido=false;
    nombre_valido=false;
    telf_valido=false;
    email_valido=false;
    dir_valido=false;
    ciudad_valido=false;
    prov_valido=false;
    uni_req_valido=false;
}

function disable_submit_bottom(){
    var registerBtn = document.querySelector('#send_form');
    registerBtn.setAttribute('disabled','');
    registerBtn.setAttribute('aria-disabled',"true");
    registerBtn.style.cursor = 'not-allowed';
}