import { Link } from "react-router-dom";

export function CountryList({ countries }) {
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
        <img src={country.flags.svg} alt={country.flags.alt} />
        <div className="description">
          <h3>{country.name.common}</h3>
          <p>
            <strong>Population: </strong>
            {country.population.toLocaleString()}
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
    </Link>
  );
}
