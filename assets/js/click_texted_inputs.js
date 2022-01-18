//se usa en => validacion_formulario.js
//VALIDAR CLICKS
function validar_click1(){
    if(debug) console.log("validado clickes");
    if(empresa_texted && nombre_texted && tel_texted && correo_texted && dir_texted && ciudad_texted && prov_texted && req_texted){
        validado_click=true;
    }
}
function click_on_empresa(){
    validar_empresa();
    empresa_texted=true;
}
function click_on_nombre(){
    validar_nombre();
    nombre_texted=true;
}
function click_on_tel(){
    validar_telf();
    tel_texted=true;
}
function click_on_correo(){
    correo_texted=true;
    validar_email();
}
function click_on_dir(){
    dir_texted=true;
    validar_dir();
}
function click_on_ciudad(){
    ciudad_texted=true;
    validar_ciudad();
}
function click_on_prov(){
    prov_texted=true;
    validar_prov();
}
function click_on_req(){
    req_texted=true;
    validar_uni_req();
}
function disable_click(){
    validado_click=false;
    
    empresa_texted=false;
    nombre_texted=false;
    tel_texted=false;
    correo_texted=false;
    dir_texted=false;
    ciudad_texted=false;
    prov_texted=false;
    req_texted=false;
}