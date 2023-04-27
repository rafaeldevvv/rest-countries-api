import useData from "./useData.js";
import { ThemeContext, useTheme } from "./themeContext.js";
import FontAwesomeIcon from "./FontAwesomeIcon.js";

const { useState } = React;
const { createRoot } = ReactDOM;

function Header() {
  const theme = useTheme();
  const themeButtonText = (theme === "light" ? "Dark" : "Light") + " Mode";

  return (
    <header>
      <div className="container">
        <h1>Where in the world?</h1>
        <button className="theme-button">
          <FontAwesomeIcon icon="fa-regular fa-sun" />
          {themeButtonText}
        </button>
      </div>
    </header>
  );
}

function SearchBar({ regions }) {
  return (
    <div id="search-bar">
      <SearchInput />
      <SelectField options={regions} />
    </div>
  );
}

function SearchInput() {
  return (
    <label className="field-container">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      <input
        value="Search"
        placeholder="Search for a country..."
        className="field"
        onChange={() => {}}
      />
    </label>
  );
}

function SelectField({ options }) {
  return (
    <div className="select-field">
      <span className="select-value">"Filter by Region</span>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      <ul className="options-list">
        {options.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  );
}

function CountryList({}) {
  const countries = useData("data.json");
  if (!countries) return null;

  return (
    <section>
      <h2 className="sr-only">List of Countries</h2>
      {countries.map((country) => {
        return <Country country={country} key={country.name} />;
      })}
    </section>
  );
}

function Country({ country }) {
  return (
    <article className="country">
      <img
        src={country.flag}
        alt={"Flag of " + country.name}
        style={{ width: "75px" }}
      />
      <div className="country-description">
        <h3>{country.name}</h3>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </article>
  );
}

function App({ defaultTheme }) {
  const [theme, setTheme] = useState(defaultTheme);
  const countries = useData("data.json");
  const regions = countries?.reduce((regions, currentCountry) => {
    if (!regions.includes(currentCountry.region)) {
      return [...regions, currentCountry.region];
    } else {
      return regions;
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <main>
        <SearchBar regions={regions || []} />
        <CountryList />
      </main>
    </ThemeContext.Provider>
  );
}

const savedTheme = localStorage.getItem("countries_theme") || "light";

createRoot(document.querySelector("#app-root")).render(
  <App defaultTheme={savedTheme} />
);
