const subscribe = document.querySelector('.subscribe-btn');
subscribe.addEventListener('click', function() {
    const inputMail = document.querySelector('.email');
    const failValidation = document.querySelector ('.fail-validation');
    const format = /([a-z0-9._+-]+@[a-z0-9-]+\.[a-z]{2,3})/gmi;

    if (inputMail.value.match(format) ) {
        const tarjeta = document.querySelector('.tarjeta');
        tarjeta.style.display = 'none';
        const overlay = document.querySelector('.overlay');
        overlay.style.display = 'block';

        
    } else {
        inputMail.style.color = 'var(--Tomato)';
        inputMail.style.border = '1px solid var(--Tomato)';
        inputMail.style.background = 'var(--Tomato-transparent)';
        failValidation.style.display = 'block';
    }
});

const dismiss = document.querySelector('.dismiss');
dismiss.addEventListener('click', function() {
    location.reload();
});