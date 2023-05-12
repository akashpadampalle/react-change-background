import './App.css'
import Button from './Button';
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("dark-theme")

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }

  return (
    <div className={`app-container ${theme}`}>
      <Button changeTheme={changeTheme} />
    </div>
  );
}

export default App;
