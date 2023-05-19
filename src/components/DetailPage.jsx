import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import KeyValueList from "../components/KeyValueList.jsx";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function DetailPage({ country, borderCountries, initialTheme }) {
  return (
    <div>
      <Header initialTheme={initialTheme} />
      <main>
        <section id="details">
          <div className="container">
            <div className="button-container">
              <Link to="/rest-countries-api/">
                <span className="primary-btn btn">
                  <FontAwesomeIcon icon={icon({ name: "chevron-left" })} />
                  Back
                </span>
              </Link>
            </div>

            <div className="country-info">
              <img
                src={country.flags.svg}
                className="flag"
                alt={country.flags.alt || `${country.name.common}'s Flag`}
              />

              <div className="info">
                <h2>{country.name.common}</h2>
                <DetailLists country={country} />
                <BorderCountriesList borderCountries={borderCountries} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BorderCountriesList({ borderCountries }) {
  return (
    <div className="border-countries-container">
      <strong>Border Countries:</strong>{" "}
      <ul className="border-countries-list">
        {borderCountries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/rest-countries-api/countries/${country.cca3}`}>
              <span className="btn">{country.name.common}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailLists({ country }) {
  const nativeName =
    country.name.nativeName?.[Object.keys(country.name.nativeName)[0]].official;

  const currencies = Object.keys(country.currencies || {})
    .map((currency) => country.currencies[currency].name)
    .join(", ");

  const languages = Object.keys(country.languages || {})
    .map((language) => country.languages[language])
    .join(", ");

  return (
    <div className="lists">
      <KeyValueList
        items={[
          { key: "Native Name", value: nativeName },
          { key: "Population", value: country.population.toLocaleString() },
          { key: "Region", value: country.region },
          { key: "Sub Region", value: country.subregion },
          { key: "Capital", value: country.capital },
        ]}
      />

      <KeyValueList
        items={[
          { key: "Top Level Domains", value: country.tld.join(", ") },
          { key: "Currencies", value: currencies },
          { key: "Languages", value: languages },
        ]}
      />
    </div>
  );
}
