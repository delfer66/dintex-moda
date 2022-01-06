            function pushed_bottom() {
                var registerBtn = document.querySelector('#register-btn');
                registerBtn.removeAttribute('disabled');
                registerBtn.removeAttribute('aria-disabled');
                registerBtn.style.cursor = 'pointer';
            }
            function enviar_formulario() {
                var response = grecaptcha.getResponse();
                if (response.legth != 0)
                    window.open("https://www.google.com/");
                else
                    document.getElementById('status').innerHTML = "Por favor acepte primero el captcha."
            }
            function captchaExpired() {
                grecaptcha.reset();
            }