import CountryList from "./CountryList.jsx";
import SearchBar from "./SearchBar.jsx";
import Header from "./Header.jsx";
import getFilteredCountries from "../utilities/getFilteredCountries.js";
import findClosestMatchingCountry from "../utilities/findClosestMatchingCountry.js";
import getRegions from '../utilities/getRegions.js'

const { useState } = React;

export default function CountriesApp({
  initialTheme,
  countries,
  countriesSorter,
}) {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = getRegions(countries);

  const filteredCountries = getFilteredCountries(countries, searchedCountry, selectedRegion);
    
  const sortedCountries = countriesSorter.sort(
    filteredCountries,
    selectedSortBy
  );

  // if the user typed something and there's no matching
  const closestMatchingCountry =
    searchedCountry && sortedCountries.length === 0
      ? findClosestMatchingCountry(countries, searchedCountry)
      : null;

  return (
    <div>
      <Header initialTheme={initialTheme} />
      <main>
        <SearchBar
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
          searchedCountry={searchedCountry}
          onChangeSearchedCountry={setSearchedCountry}
          selectedSortBy={selectedSortBy}
          onSelectSortBy={setSelectedSortBy}
          sortByOptions={countriesSorter.typesOfSorting}
          closestMatchingCountry={closestMatchingCountry}
        />
        <CountryList countries={sortedCountries} />
      </main>
    </div>
  );
}
