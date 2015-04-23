export class Dictionary {
  // Iterates all dictionary entries, and calls the provided function
  // with signature fn(key, value)
  map(fn) {
    return Object.getOwnPropertyNames(this).map(name => fn(name, this[name]));
  }

  push(person, date, value) {
    if(!this.hasOwnProperty(person)) {
      this[person] = [];
    }

    this[person].push({ date, value });
  };

  toArray() {
    return this.map((person, personData) => personData);
  };

  toD3Array() {
    return this.map((person, personData) => {
      return {
        key: person,
        values: personData.map(p => [p.date, p.value])
      };
    });
  };
}

export class CumulativeDictionary extends Dictionary {
  push(person, date, value) {
    var p = this[person],
        prev = (p && p.length) ? p[p.length - 1].value : 0;

    super.push(person, date, prev + value);
  };
}
