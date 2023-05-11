"use client";
import { useState, useEffect } from "react";
import styles from "@/app/components/theme.button.module.css";

const light = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="5" x2="12" y2="3" />
    <line x1="17" y1="7" x2="18.4" y2="5.6" />
    <line x1="19" y1="12" x2="21" y2="12" />
    <line x1="17" y1="17" x2="18.4" y2="18.4" />
    <line x1="12" y1="19" x2="12" y2="21" />
    <line x1="7" y1="17" x2="5.6" y2="18.4" />
    <line x1="6" y1="12" x2="4" y2="12" />
    <line x1="7" y1="7" x2="5.6" y2="5.6" />
  </svg>
);
const dark = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  </svg>
);

const ThemeButton = () => {
  const getTheme = () => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      return localTheme === "dark" ? true : false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  };

  // true == dark || false == light
  const [theme, setTheme] = useState(false);

  const switchTheme = () => {
    setTheme(!theme);

    localStorage.setItem("theme", !theme ? "dark" : "light");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;
    html.className = theme ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    setTheme(getTheme());
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        event.matches ? setTheme(false) : setTheme(true);
      });
  }, []);

  return (
    <div className={styles.themeButton}>
      <input
        id="theme"
        type="checkbox"
        onChange={() => switchTheme()}
        checked={theme}
      />
      <label htmlFor="theme" className={styles.themeButton}>
        {theme ? dark : light}
      </label>
    </div>
  );
};

export default ThemeButton;
