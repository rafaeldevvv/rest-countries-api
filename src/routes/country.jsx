import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Header from "../Header";
import { useLoaderData, Link } from "react-router-dom";
import KeyValueList from "../components/KeyValueList.jsx";

export default function DetailPage() {
  const { country, initialTheme, borderCountries } = useLoaderData();

  return (
    <div>
      <Header initialTheme={initialTheme} />
      <main>
        <section id="details">
          <div className="container">
            <div className="button-container">
              <Link to="/">
                <span className="primary-btn btn">
                  <FontAwesomeIcon icon={icon({ name: "chevron-left" })} />
                  Back
                </span>
              </Link>
            </div>

            <div className="country-info">
              <img
                src={country.flags.svg}
                className="country-flag"
                alt={country.flags.alt}
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
    <div>
      <strong>Border Countries:</strong>{" "}
      <ul className="special-list">
        {borderCountries.map((country) => (
          <li key={country.name.common}>
            <Link key={country.cca3} to={`/countries/${country.cca3}`}>
              <span className="border-list-btn btn">{country.name.native}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// TODO: Add to README.md
/* function getDataFromCountry(items) {
  const data = [];

  function getItemFromPath(path, handler) {
    const parts = path.split(".");
    let current = country;
    parts.forEach((p) => {
      current = current[p];
    });
    return !!handler ? handler(current) : current;
  }

  items.forEach((item) => {
    data.push({
      key: item.name,
      value: getItemFromPath(item.path, item.handler),
    });
  });

  return data;
} */

function DetailLists({ country }) {
  return (
    <div className="lists">
      <KeyValueList
        items={[
          { key: "Native Name", value: country.name.native },
          { key: "Population", value: country.population },
          { key: "Region", value: country.region },
          { key: "Sub Region", value: country.subregion },
          { key: "Capital", value: country.capital },
        ]}
      />

      <KeyValueList
        item={[
          { key: "Top Level Domain", value: country.topLevelDomain },
          {
            key: "Currencies",
            value: Object.keys(country.currencies)
              .map((currency) => country.currencies[currency].name)
              .join(", "),
          },
          {
            key: "Languages",
            value: Object.keys(country.languages)
              .map((language) => country.languages[language])
              .join(", "),
          },
        ]}
      />
    </div>
  );
}

function getCountry(countryCca3) {
  return fetch("https://restcountries.com/v3.1/alpha/" + countryCca3)
    .then((response) => response.json())
    .then((country) => country[0]);
}

export async function loader({ params }) {
  const country = await getCountry(params.countryCca3);
  const borderPromises = country.borders.map((border) => getCountry(border));
  const initialTheme = localStorage.getItem("theme");

  return {
    country,
    initialTheme,
    borderCountries: await Promise.all(borderPromises),
  };
}
