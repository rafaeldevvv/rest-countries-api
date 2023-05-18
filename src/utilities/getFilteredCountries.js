export default function getFilteredCountries(countries, name, region) {
  const escaped = name.replace(/[\/\\$^.*|)(\[\]\{\}]/g, "\\$&");
  const nameRegExp = new RegExp(escaped, "i");

  let filteredCountries = countries.filter((c) =>
    nameRegExp.test(c.name.common)
  );
  if (region) {
    filteredCountries = filteredCountries.filter((c) => c.region === region);
  }

  return filteredCountries;
}
