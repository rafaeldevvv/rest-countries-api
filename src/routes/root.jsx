import { useLoaderData } from "react-router-dom";
import App from "../App.jsx";

export default function Root() {
  const { countries, initialTheme } = useLoaderData();
  return <App countries={countries} initialTheme={initialTheme} />;
}

export async function loader() {
  const countries = await fetch("https://restcountries.com/v3.1/all").then(
    (response) => response.json()
  );
  const initialTheme = localStorage.getItem("theme") || "dark";
  return { countries, initialTheme };
}
