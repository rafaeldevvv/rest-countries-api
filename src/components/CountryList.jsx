import { Link } from "react-router-dom";
import KeyValueList from "./KeyValueList.jsx";

export default function CountryList({ countries }) {
  return (
    <section id="countries">
      <div className="container">
        <h2 className="sr-only">List of Countries</h2>
        {countries.map((country) => {
          return <Country country={country} key={country.cca3} />;
        })}
      </div>
    </section>
  );
}

export function Country({ country }) {
  return (
    <Link to={`countries/${country.cca3}`}>
      <article className="country">
        <img src={country.flags.svg} alt={country.flags.alt} className="flag" />

        <div className="description">
          <h3 className="country-name">{country.name.common}</h3>
          <KeyValueList
            items={[
              { key: "Population", value: country.population.toLocaleString() },
              { key: "Region", value: country.region },
              { key: "Capital", value: country.capital },
            ]}
          />
        </div>
      </article>
    </Link>
  );
}
