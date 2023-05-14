import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { changeThemeColors } from "../utilities/themeColors.js";
const { useState } = React;

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
          name: "moon",
        })}
      />
    ) : (
      <FontAwesomeIcon
        icon={icon({
          style: "regular",
          name: "sun",
        })}
      />
    );

  return (
    <button className="theme-button" onClick={handleClick}>
      {themeIcon}
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
