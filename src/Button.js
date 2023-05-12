import { useState } from 'react';
import './Button.css';

export function ThemeButton({ theme, changeTheme }) {

    const [buttonTheme, setButtontheme] = useState("light-button");

    const changeButtonTheme = () => {
        if (theme === 'light-theme') {
            setButtontheme('light-button');
        } else {
            setButtontheme('dark-button');
        }

        changeTheme();
    }

    return (
        <button className={`button ${buttonTheme}`} onClick={changeButtonTheme}>
            Change Theme
        </button>
    );
}