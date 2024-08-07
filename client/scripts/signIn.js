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

function validateData(email, passwd) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const uppercasePattern = /[A-Z]/

    if (!email || !passwd) {
        alert('Favor de llenar todos los campos');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('La dirección de correo no es válida');
        return false;
    }

    if (passwd.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return false;
    }

    if (!uppercasePattern.test(passwd)) {
        alert('La contraseña debe tener al menos una letra mayúscula');
        return false;
    }

    return true;
}

init();