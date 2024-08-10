function init() {
    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const passwd = document.getElementById('passwd').value;
        const confirmPasswd = document.getElementById('confirmPasswd').value;


        if (validateData(userName, email, passwd, confirmPasswd)) {
            //sendData(userName, email, passwd);
        }
    });
}

function sendData(userName, email, passwd) {
    
};


function validateData(userName, email, passwd, confirmPasswd) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const uppercasePattern = /[A-Z]/;
    const SymbolPatternPermit = /[#,.$%&?]/;
    const SymbolPatternDeny = /['";+()\-*<>{}=%]/;
    const numberParttern = /[0-9]/;


    if (!userName || !email || !passwd || !confirmPasswd) {
        alert('Favor de llenar todos los campos');
        return false;
    }

    if (SymbolPatternDeny.test(userName)) {
        alert('El nombre tiene caracteres no válidos');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('La dirección de correo no es válida');
        return false;
    }

    if (SymbolPatternDeny.test(email)) {
        alert('La dirección de correo tiene caracteres no válidos');
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

    if (!SymbolPatternPermit.test(passwd)) {
        alert('La contraseña debe tener al menos un caracter especial');
        return false;
    }

    if (SymbolPatternDeny.test(passwd)) {
        alert('La contraseña tiene caracteres no válidos');
        return false;
    }

    if (passwd !== confirmPasswd) {
        alert('Las contraseñas no coinciden');
        return false;
    }

    return true;
}

init();