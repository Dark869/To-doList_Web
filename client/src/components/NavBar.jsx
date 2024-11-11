import { useState, useEffect } from 'react';
import userIcon from '../assets/images/userIcon.png';
import themeLight from '../assets/images/themeLight.png';
import themeDark from '../assets/images/themeDark.png';
import signOut from '../assets/images/SignOut.png';

function Navbar() {
    const [isDarkTheme, setIsDarkTheme] = useState(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme-static');
            setIsDarkTheme(true);
        } else {
            document.body.classList.add('light-theme-static');
            setIsDarkTheme(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => {
            const newTheme = !prevTheme;

            document.body.classList.remove('dark-theme-static', 'light-theme-static');

            document.body.classList.toggle('dark-theme-transition', newTheme);
            document.body.classList.toggle('light-theme-transition', !newTheme);

            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    if (isDarkTheme === null) {
        return null;
    }

    return (
        <nav className={`navbar m-3 ${isDarkTheme ? 'navbar-dark' : 'navbar-light'}`}>
            <div className="row w-100">
                <div className="col-sm-6 px-5 d-flex justify-content-start align-items-center" id="titlePage">
                    <h4 className="text-white">To-do list By Dark869</h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-end px-4 ms-auto" id="userInfoButtons">
                    <div className="d-flex align-items-center me-3" id="userInfo">
                        <img className="icons" id="iconUser" src={userIcon} alt="User Icon" />
                        <h7 id="newUser" className="ms-2 text-white">Example</h7>
                    </div>
                    <div id="buttonsBox" className="d-flex">
                        <button
                            aria-label="Change Theme"
                            className="me-2 buttons"
                            onClick={toggleTheme}
                        >
                            <img
                                className="icons"
                                id="iconTheme"
                                src={isDarkTheme ? themeLight : themeDark}
                                alt="Theme Icon"
                            />
                        </button>
                        <button aria-label="Sign Out" className="buttons">
                            <img className="icons" id="iconSignOut" src={signOut} alt="Sign Out Icon" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
