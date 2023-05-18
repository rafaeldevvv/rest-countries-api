import DetailPage from "../components/DetailPage";
import { useLoaderData } from "react-router-dom";

export default function CountryDetailPage() {
  const { country, initialTheme, borderCountries } = useLoaderData();

  return (
    <DetailPage
      initialTheme={initialTheme}
      country={country}
      borderCountries={borderCountries}
    />
  );
}

function getCountry(identifier) {
  return fetch("https://restcountries.com/v3.1/alpha/" + identifier)
    .then((response) => response.json())
    .then((country) => country[0]);
}

export async function loader({ params }) {
  const country = await getCountry(params.identifier);
  const borderCountriesPromises = country.borders?.map(getCountry) || [];
  const initialTheme = localStorage.getItem("theme");

  return {
    country,
    initialTheme,
    borderCountries: await Promise.all(borderCountriesPromises),
  };
}
