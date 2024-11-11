(function(){
    let flagTheme = true;

    function changeTheme(){
        const elementChangeTheme = document.body;
        const elementIconTheme = document.getElementById('IconTheme');
        elementIconTheme.style.opacity = 0;

        setTimeout(function() {
            if (flagTheme) {
                elementChangeTheme.style.backgroundColor = '#ececec';
                elementIconTheme.src = "/static/public/images/themeDark.png";
                flagTheme = false;
            } else {
                elementChangeTheme.style.backgroundColor = '#272727';
                elementIconTheme.src = "/static/public/images/themeLight.png";
                flagTheme = true;
            }

            elementIconTheme.style.opacity = 1;
        }, 200);

        console.log('Theme changed');
    }

    window.onload = function(){
        const btnChangeTheme = document.getElementById('btnTheme');

        btnChangeTheme.addEventListener('click', changeTheme);
    }

})();