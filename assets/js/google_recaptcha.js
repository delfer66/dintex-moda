function pushed_bottom() {
    var registerBtn = document.querySelector('#send_form');
    registerBtn.removeAttribute('disabled');
    registerBtn.removeAttribute('aria-disabled');
    registerBtn.style.cursor = 'pointer';
    $('#helper_form').fadeOut(500);
}
function captchaExpired() {
    grecaptcha.reset();
    disable_submit_bottom();
    console.log("recaptcha expired")
    $('#helper_form').fadeIn(500);
}
function disable_submit_bottom(){
    var registerBtn = document.querySelector('#send_form');
    registerBtn.setAttribute('disabled','');
    registerBtn.setAttribute('aria-disabled',"true");
    registerBtn.style.cursor = 'not-allowed';
}