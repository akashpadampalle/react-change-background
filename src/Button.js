import './Button.css';

export default function Button({ changeTheme }) {

    return (
        <button className="button" onClick={changeTheme}>
            Change Theme
        </button>
    );
}