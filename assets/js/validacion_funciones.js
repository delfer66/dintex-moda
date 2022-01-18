//se usa en => validacion_formulario.js
const validate_todo = () => {
    if(empresa_valido &&
       nombre_valido &&
       telf_valido &&
       email_valido &&
       dir_valido &&
       ciudad_valido &&
       prov_valido &&
       uni_req_valido){
        if(debug) console.log("total true");
        validado_todo=true;
        return true;
       }
       else{
        if(debug) console.log("total false");
        return false;
       }
};
//VALIDACION EMPRESA
function validar_empresa(){
    if(debug) console.log("validado empresa");
    const $result = $('#empresaHelp');
    const empresa = $('#inputEmpresa').val();
    $result.text('');
    if (validateempresa(empresa) && validar_script(empresa)) {
      $result.text('');
      $result.css('color', 'gray');
      empresa_valido=true;      
    } else {
      $result.text('Ingrese el nombre de su empresa');
      $result.css('color', 'red');
      empresa_valido=false;
    }
}
const validateempresa = (empresa) => {
    return empresa.match(
        /^[a-zA-ZÀ-ÿ0-9\s\_\-\.\,]{1,200}$/
    );
};
//VALIDACION NOMBRE
function validar_nombre(){
    if(debug) console.log("validado nombre");
    const $result = $('#nombreHelp');
    const nombre = $('#inputNombre').val();
    $result.text('');
    if (validateNombre(nombre) && validar_script(nombre)) {
      $result.text('');
      $result.css('color', 'gray');
      nombre_valido=true;      
    } else {
      $result.text('Solo ingrese su primer nombre y apellido');
      $result.css('color', 'red');
      nombre_valido=false;
    }
}
const validateNombre = (nombre) => {
    return nombre.match(
        /^[a-zA-ZÀ-ÿ\s\.]{1,40}$/
    );
};
//VALIDACION TELEFONO
function validar_telf(){
    if(debug) console.log("validado telf");
    const $result = $('#telfHelp');
    const telf = $('#inputTelf').val();
    $result.text('');
    if (validateTelf(telf) && validar_script(telf)) {
      $result.text('');
      $result.css('color', 'gray');
      telf_valido=true;      
    } else {
      $result.text('Ingrese solo números y al menos 7 digitos');
      $result.css('color', 'red');
      telf_valido=false;
    }
}
const validateTelf = (telf) => {
    return telf.match(
        /^\d{7,14}$/
    );
};
//VALIDACION EMAIL
function validar_email(){
    if(debug) console.log("validado email");
    const $result = $('#emailHelp');
    const email = $('#inputEmail1').val();
    $result.text('');
    if (validateEmail(email) && validar_script(email)) {
      $result.text('Email valido');
      $result.css('color', 'green');
      email_valido=true;      
    } else {
      $result.text('Email invalido');
      $result.css('color', 'red');
      email_valido=false;
    }
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//VALIDACION DIRECCION
function validar_dir(){
    if(debug) console.log("validado dir");
    const $result = $('#dirHelp');
    const dir = $('#inputDir').val();
    $result.text('');
    if (validatedir(dir) && validar_script(dir)) {
      $result.text('');
      $result.css('color', 'gray');
      dir_valido=true;      
    } else {
      $result.text('Ingrese una calle principal y una secundaria');
      $result.css('color', 'red');
      dir_valido=false;
    }
}
const validatedir = (dir) => {
    return dir.match(
        /^[a-zA-ZÀ-ÿ0-9\s\_\-\.\,]{1,200}$/
    );
};
//VALIDACION CIUDAD
function validar_ciudad(){
    if(debug) console.log("validado ciudad");
    const $result = $('#ciudadHelp');
    const ciudad = $('#inputCiudad').val();
    $result.text('');
    if (validateciudad(ciudad) && validar_script(ciudad)) {
      $result.text('');
      $result.css('color', 'gray');
      ciudad_valido=true;      
    } else {
      $result.text('Ingrese la  ciudad donde se encuetra su sede');
      $result.css('color', 'red');
      ciudad_valido=false;
    }
}
const validateciudad = (ciudad) => {
    return ciudad.match(
        /^[a-zA-ZÀ-ÿ0-9\s\_\-\.\,]{1,50}$/
    );
};

//VALIDACION PROVINCIA
function validar_prov(){
    if(debug) console.log("validado prov_valido");
    const $result = $('#provHelp');
    const prov = $('#inputProv').val();
    $result.text('');
    if(prov!="Seleccione una opción"){
        $result.text('Correcto');
        $result.css('color', 'green');
        prov_valido=true;
    }else{
        $result.text('Seleccione la o las provincias donde realiza su actividad');
        $result.css('color', 'red');
        prov_valido=false;
    }
}
//VALIDACION UNIFORMES REQUERIDOS
function validar_uni_req(){
    if(debug) console.log("validado uni_req_valido");
    const $result = $('#requeridos_Help');
    const uni_req = $('#inputuni_req').val();
    $result.text('');
    if(uni_req!="Seleccione una opción"){
        $result.text('Correcto');
        $result.css('color', 'green');
        uni_req_valido=true;
    }else{
        $result.text('Por favor, seleccione la cantidad de uniformes en las que esta interesada/o');
        $result.css('color', 'red');
        uni_req_valido=false;
    }
}



const validar_script = (cadena) =>{
    if (cadena.toLowerCase().indexOf("script") !== -1){
        return false;
    }else{
        return true;
    }
};