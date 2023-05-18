import { useLoaderData } from "react-router-dom";
import App from "../components/App.jsx";
import countriesSorter from "../utilities/countriesSorter.js";

export default function Root() {
  const { countries, initialTheme, countriesSorter } = useLoaderData();
  
  return (
    <App
      countries={countries}
      initialTheme={initialTheme}
      countriesSorter={countriesSorter}
    />
  );
}

function getAllCountries() {
  return fetch("https://restcountries.com/v3.1/all").then((response) =>
    response.json()
  );
}

export async function loader() {
  const countries = await getAllCountries();
  const initialTheme = localStorage.getItem("theme") || "dark";
  return { countries, initialTheme, countriesSorter };
}
