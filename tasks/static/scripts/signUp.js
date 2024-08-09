function init() {
    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const passwd = document.getElementById('passwd').value;
        const confirmPasswd = document.getElementById('confirmPasswd').value;


        if (validateData(email, passwd)) {
            console.log(userName);
            console.log(email);
            console.log(passwd);
            console.log(confirmPasswd);
    
        }
    });
}

function validateData(email, passwd) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const uppercasePattern = /[A-Z]/;
    const SymbolPattern = /[.,#$%&*?:;]/;
    const numberParttern = /[0-9]/;

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

    if (!numberParttern.test(passwd)) {
        alert('La contraseña debe tener al menos un número');
        return false;
    }

    if (!SymbolPattern.test(passwd)) {
        alert('La contraseña debe tener al menos un caracter especial');
        return false;
    }

    return true;
}

init();