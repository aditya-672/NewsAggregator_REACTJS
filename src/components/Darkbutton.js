import * as React from 'react';
import { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton(props) {
  const [theme, setTheme] = useState(localStorage.theme);
  const nextTheme = (theme === "dark" ? "light" : "dark");
  const lightHandler = () =>{
    setTheme("light")
  }

  const darkHandler = () =>{
    setTheme("dark")
  }

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.remove(nextTheme);
    rootElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, nextTheme]);
  return (
    <ToggleButtonGroup
      className="bg-slate-500 h-8"
      color="error"
      // value={alignment}
      exclusive
      // onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="light" onClick={darkHandler} className=" dark:bg-slate-200 dark:hover:bg-slate-100">Dark</ToggleButton>
      <ToggleButton value="dark" onClick={lightHandler} className="bg-gray-600 hover:bg-gray-400 dark:bg-slate-200 dark:hover:bg-slate-100">Light</ToggleButton>
    </ToggleButtonGroup>
  );
}
