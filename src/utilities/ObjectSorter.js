class ObjectSorter {
  constructor() {
    this.typesOfSorting = [];
    this.compareFunctions = {};
  }

  register(typeOfSorting, compareFunction) {
    this.typesOfSorting.push(typeOfSorting);
    this.compareFunctions[typeOfSorting] = compareFunction;
  }

  sort(objects, typeOfSorting) {
    if (!typeOfSorting) return objects;

    if (!this.typesOfSorting.includes(typeOfSorting)) {
      throw new Error("Invalid type of sorting: " + typeOfSorting);
    }

    const copied = objects.slice();
    copied.sort(this.compareFunctions[typeOfSorting]);
    return copied;
  }
}

export default ObjectSorter;
