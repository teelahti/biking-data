// TODO: Consider using module format and loader, e.g. systemjs

function Dictionary() { }

Dictionary.prototype.push = function(person, date, value) {
  if(!this.hasOwnProperty(person)) {
    this[person] = [];
  }

  this[person].push({ "date": date, "value": value});
};

Dictionary.prototype.pushCumulative = function(person, date, value) {
  var p = this[person],
      prev = (p && p.length) ? p[p.length - 1].value : 0;

  this.push(person, date, prev + value);
};

Dictionary.prototype.toArray = function() {
  return Object.getOwnPropertyNames(this).map(function(person) {
    return this[person];
  }, this);
};

Dictionary.prototype.toD3Array = function() {
  return Object.getOwnPropertyNames(this).map(function(person) {
    return {
      key: person,
      values: this[person]
        .map(function(elem) { return [elem.date, elem.value]; })
      };
  }, this);
};
