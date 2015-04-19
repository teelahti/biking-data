export class Dictionary {
  push(person, date, value) {
    if(!this.hasOwnProperty(person)) {
      this[person] = [];
    }

    this[person].push({ date, value});
  };

  toArray() {
    return Object.getOwnPropertyNames(this).map(function(person) {
      return this[person];
    }, this);
  };

  toD3Array() {
    return Object.getOwnPropertyNames(this).map(function(person) {
      return {
        key: person,
        values: this[person]
          .map(_ => { return [_.date, _.value]; })
        };
    }, this);
  };
}

export class CumulativeDictionary extends Dictionary {
  push(person, date, value) {
    var p = this[person],
        prev = (p && p.length) ? p[p.length - 1].value : 0;

    super.push(person, date, prev + value);
  };

}
