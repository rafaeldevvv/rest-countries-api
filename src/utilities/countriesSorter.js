import ObjectSorter from "./ObjectSorter.js";

const countriesSorter = new ObjectSorter();
countriesSorter.register("Name(A-Z)", (a, b) =>
  a.name.common.localeCompare(b.name.common)
);
countriesSorter.register(
  "Name(Z-A)",
  (a, b) => -a.name.common.localeCompare(b.name.common)
);
countriesSorter.register(
  "Ascending Population",
  (a, b) => a.population - b.population
);
countriesSorter.register(
  "Descending Population",
  (a, b) => -(a.population - b.population)
);

export default countriesSorter;
