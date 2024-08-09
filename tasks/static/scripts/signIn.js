function init() {
    const form = document.getElementById('signInForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const passwd = document.getElementById('passwd').value;

        if (validateData(email, passwd)) {
            form.submit();
        }
    });
}

function sendData(email, passwd) {
    
};

function validateData(email, passwd) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !passwd) {
        alert('Favor de llenar todos los campos');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('La dirección de correo no es válida');
        return false;
    }

    return true;
}

init();