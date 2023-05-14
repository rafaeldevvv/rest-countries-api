import CountryList from "./CountryList.jsx";
import SearchBar from "./SearchBar.jsx";
import Header from "./Header.jsx";
import getFilteredCountries from "../utilities/getFilteredCountries.js";

const { useState } = React;

export default function CountriesApp({
  initialTheme,
  countries,
  countriesSorter,
}) {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [selectedSortBy, setSortBy] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = countries?.reduce((regions, currentCountry) => {
    if (!regions.includes(currentCountry.region)) {
      return [...regions, currentCountry.region];
    } else {
      return regions;
    }
  }, []);

  const filteredCountries =
    countries &&
    getFilteredCountries(countries, searchedCountry, selectedRegion);

  const sortedCountries =
    selectedSortBy !== null
      ? countriesSorter.sort(filteredCountries || [], selectedSortBy)
      : filteredCountries;

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
          selectedSortBy={selectedSortBy}
          onSelectSortBy={setSortBy}
          sortByOptions={countriesSorter.typesOfSorting}
        />
        <CountryList countries={sortedCountries || []} />
      </main>
    </div>
  );
}
