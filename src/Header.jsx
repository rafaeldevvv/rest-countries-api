import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { changeThemeColors } from "./themeColors.js";
import { useState } from "react";

export default function Header({ initialTheme }) {
  return (
    <header>
      <div className="container">
        <h1>Where in the world?</h1>
        <ThemeButton initialTheme={initialTheme} />
      </div>
    </header>
  );
}

function ThemeButton({ initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    changeThemeColors(nextTheme);
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  const themeIcon =
    theme === "dark" ? (
      <FontAwesomeIcon
        icon={icon({
          style: "regular",
          name: "sun",
        })}
      />
    ) : (
      <FontAwesomeIcon
        icon={icon({
          style: "regular",
          name: "moon",
        })}
      />
    );

  return (
    <button className="theme-button" onClick={handleClick}>
      {themeIcon}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
