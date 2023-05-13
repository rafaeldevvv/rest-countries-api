import CountryList from "./CountryList.jsx";
import { SearchBar } from "./search.jsx";
import Header from "./Header.jsx";
import getFilteredCountries from "./getFilteredCountries.js";
import { useState } from "react";

export default function CountriesApp({ initialTheme, countries }) {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchedCountry, setSearchedCountry] = useState("");

  const regions = countries?.reduce((regions, currentCountry) => {
    if (!regions.includes(currentCountry.region)) {
      return [...regions, currentCountry.region];
    } else {
      return regions;
    }
  }, []);

  const visibleCountries =
    countries &&
    getFilteredCountries(countries, searchedCountry, selectedRegion);

  return (
    <div>
      <Header initialTheme={initialTheme} />
      <main>
        <SearchBar
          regions={regions || []}
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
          searchedCountry={searchedCountry}
          onChangeSearchedCountry={setSearchedCountry}
        />
        <CountryList countries={visibleCountries || []} />
      </main>
    </div>
  );
}
