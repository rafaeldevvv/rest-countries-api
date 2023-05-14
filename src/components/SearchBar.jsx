import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
const { useState } = React;

export default function SearchBar({
  regions,
  selectedRegion,
  onSelectRegion,
  onChangeSearchedCountry,
  searchedCountry,
  onSelectSortBy,
  selectedSortBy,
  sortByOptions,
}) {
  return (
    <section id="search-bar">
      <form className="container">
        <SearchInput
          onChange={onChangeSearchedCountry}
          searchedCountry={searchedCountry}
        />
        <div className="select-lists-container">
          <SelectList
            options={sortByOptions}
            selectedOption={selectedSortBy}
            onSelect={onSelectSortBy}
            defaultText={"Sort By"}
            resetText={"None"}
          />
          <SelectList
            options={regions}
            selectedOption={selectedRegion}
            onSelect={onSelectRegion}
            defaultText={"Filter by Region"}
            resetText={"All"}
          />
        </div>
      </form>
    </section>
  );
}

export function SearchInput({ searchedCountry, onChange }) {
  return (
    <label className="field-container">
      <span className="sr-only">Enter a name of a country</span>
      <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />
      <input
        className="field"
        value={searchedCountry}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="Search for a country..."
      />
    </label>
  );
}

export function SelectList({
  options,
  selectedOption,
  onSelect,
  defaultText,
  resetText,
}) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      className="select-field"
      onClick={() => setIsShowing(!isShowing)}
      aria-haspopup="listbox"
      aria-owns="options-list"
      aria-controls="options-list"
      aria-activedescendant={isShowing ? selectedOption : undefined}
    >
      <span className="selected-value">{selectedOption || defaultText}</span>
      <FontAwesomeIcon icon={icon({ name: "chevron-down" })} />
      <ul
        className={`options-list ${isShowing ? "visible" : ""}`}
        aria-expanded={isShowing ? true : false}
      >
        {selectedOption && (
          <li onClick={() => onSelect(null)} key="reset">
            {resetText}
          </li>
        )}
        {options.map((o) => (
          <li onClick={() => onSelect(o)} key={o}>
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}
