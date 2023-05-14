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
    const copied = objects.slice();
    copied.sort(this.compareFunctions[typeOfSorting]);
    return copied;
  }
}

export default ObjectSorter;
