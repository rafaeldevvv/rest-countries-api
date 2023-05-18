import levDistance from "./levDistance";

export default function findClosestMatchingCountry(countries, query) {
  const levDistances = countries.map((c, i) => ({
    countryIndex: i,
    levDistance: levDistance(query.toLowerCase(), c.name.common.toLowerCase()),
  }));

  const lowestCountryLevDistance = levDistances.reduce((a, b) => {
    return a.levDistance < b.levDistance ? a : b;
  });

  return countries[lowestCountryLevDistance.countryIndex];
}
