export default class Dictionary {
  push(person, date, value) {
    if(!this.hasOwnProperty(person)) {
      this[person] = [];
    }

    this[person].push({ "date": date, "value": value});
  };

  pushCumulative(person, date, value) {
    var p = this[person],
        prev = (p && p.length) ? p[p.length - 1].value : 0;

    this.push(person, date, prev + value);
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
          .map(function(elem) { return [elem.date, elem.value]; })
        };
    }, this);
  };
}
