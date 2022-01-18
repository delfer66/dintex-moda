    var form_id_js = "formulario_id";

    var data_js = {
        "access_token": "pl03h0gs6v8p0wbeaan2cy7c"
    };

    function js_onSuccess() {
        set_modal_postmail(true);
        limpiarFormulario();//resetea el formulario
        disable_click();    //resetea todas las var de click
        reset_validacion(); //resetea todas las var de validacion
        if(debug) console.log("exito_Enviar postmail");
    }

    function js_onError(error) {
        error_form=error;
        set_modal_postmail(false);
        if(debug) console.log("fail_Enviar postmail");
    }

    var sendButton = document.getElementById("send_form");

    function send_formulario() {
        sendButton.value='Enviando…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };
        var empresa = document.querySelector("#" + form_id_js + " [name='empresa']").value;
        var subject = "EMPRESA "+empresa.toUpperCase()+" a envia un correo desde la página WEB";

        const mensaje_web = "Correo generado desde la página web dintexmoda.com, con los siguientes datos ingresados por el cliente.\n";
        empresa = "\nEmpresa: "+document.querySelector("#" + form_id_js + " [name='empresa']").value;
        const nombre = "\nNombre: "+document.querySelector("#" + form_id_js + " [name='nombre']").value;
        const telefono = "\nTelefono: "+document.querySelector("#" + form_id_js + " [name='telefono']").value;
        const correo = "\nCorreo: "+document.querySelector("#" + form_id_js + " [name='correo']").value;
        const direccion = "\nDirección: "+document.querySelector("#" + form_id_js + " [name='direccion']").value;
        const ciudad = "\nCiudad: "+document.querySelector("#" + form_id_js + " [name='ciudad']").value;
        const provincia = "\nProvincia: "+document.querySelector("#" + form_id_js + " [name='provincia']").value;
        const pedido = "\nUniformes requeridos: "+document.querySelector("#" + form_id_js + " [name='pedido']").value;
        var anuncios
        if(document.querySelector("#" + form_id_js + " [name='anuncios']").checked)
            anuncios = "\n¿Deseo información, promociones y anuncios? Si deseo";
        else
            anuncios = "\n¿Deseo información, promociones y anuncios? No deseo.";

        var message = mensaje_web+empresa+nombre+telefono+correo+direccion+ciudad+provincia+pedido+anuncios;

        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        if(debug) console.log(subject);
        if(debug) console.log(message);
        
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);

        return false;
    }

    /*
    <button id="testjava" type="button" class="btn btn-success" 
                    onclick="test_javascript()">probar</button>

    function test_javascript() {
        var empresa = document.querySelector("#" + form_id_js + " [name='empresa']").value;
        var subject = "EMPRESA "+empresa.toUpperCase()+" a envia un correo desde la página WEB";

        const mensaje_web = "Correo generado desde la página web dintexmoda.com, con los siguientes datos ingresados por un cliente.\n";
        empresa = "\nEmpresa: "+document.querySelector("#" + form_id_js + " [name='empresa']").value;
        const nombre = "\nNombre: "+document.querySelector("#" + form_id_js + " [name='nombre']").value;
        const telefono = "\nTelefono: "+document.querySelector("#" + form_id_js + " [name='telefono']").value;
        const correo = "\nCorreo: "+document.querySelector("#" + form_id_js + " [name='correo']").value;
        const direccion = "\nDirección: "+document.querySelector("#" + form_id_js + " [name='direccion']").value;
        const ciudad = "\nCiudad: "+document.querySelector("#" + form_id_js + " [name='ciudad']").value;
        const provincia = "\nProvincia: "+document.querySelector("#" + form_id_js + " [name='provincia']").value;
        const pedido = "\nUniformes requeridos: "+document.querySelector("#" + form_id_js + " [name='pedido']").value;
        var anuncios
        if(document.querySelector("#" + form_id_js + " [name='anuncios']").checked)
            anuncios = "\n¿Deseo información, promociones y anuncios? Si deseo";
        else
            anuncios = "\n¿Deseo información, promociones y anuncios? No deseo.";
        var message = mensaje_web+empresa+nombre+telefono+correo+direccion+ciudad+provincia+pedido+anuncios;

        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        console.log(subject);
        console.log(message);
        disable_submit_bottom();
        limpiarFormulario();//resetea el formulario
    }
*/

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });


    