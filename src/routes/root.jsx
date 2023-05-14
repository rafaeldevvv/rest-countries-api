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

export async function loader() {
  const countries = await fetch("https://restcountries.com/v3.1/all").then(
    (response) => response.json()
  );
  const initialTheme = localStorage.getItem("theme") || "dark";
  return { countries, initialTheme, countriesSorter };
}
