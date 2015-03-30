(function() {
  "use strict";
  /* global d3, MG*/

  function Dictionary() { }

  Dictionary.prototype.push = function(person, date, value) {
    if(!this.hasOwnProperty(person)) {
      this[person] = [];
    }

    this[person].push({ "date": date, "value": value});
  };

  Dictionary.prototype.toArray = function() {
    return Object.getOwnPropertyNames(this).map(function(person) {
      return this[person];
    }, this);
  };

  function createVisualization(element, title, data, min_y, baselines) {
    MG.data_graphic({
        title: title,
        data: data.toArray(),

        // Resize dynamically
        full_width: true,
        full_height: true,
        top: 20,

        target: element,
        linked: true,
        aggregate_rollover: true,
        decimals: 2,
        xax_format: d3.time.format("%-d.%-m"),
        show_secondary_x_label: false,

        legend: Object.getOwnPropertyNames(data),
        legend_target: "#legend",

        // Tooltips require jquery, disable them
        show_tooltips: false,

        animate_on_load: true,

        min_y: min_y,

        baselines: baselines
    });

  }

  // Get data from server
  d3.json("data/data.json", function(data) {

      var kms = new Dictionary(),
          weights = new Dictionary(),
          waists = new Dictionary(),
          thighs = new Dictionary(),
          calfs = new Dictionary(),
          dateFormatter = d3.time.format("%Y-%m-%d");

      Object.getOwnPropertyNames(data).forEach(function(valdate) {
        var dateData = data[valdate],
            dateObject = dateFormatter.parse(valdate);

        Object.getOwnPropertyNames(dateData).forEach(function(valperson) {
          var personData = dateData[valperson];

          kms.push(valperson, dateObject, personData[0]);
          weights.push(valperson, dateObject, personData[1]);
          waists.push(valperson, dateObject, personData[2]);
          thighs.push(valperson, dateObject, personData[3]);
          calfs.push(valperson, dateObject, personData[4]);
        });
      });

      createVisualization("#vis-km", "Kilometrit", kms);
      createVisualization("#vis-weight", "Paino", weights, 75, [{value: 82, label:"Läski"}]);
      createVisualization("#vis-waist", "Vyötärö", waists, 85);
      createVisualization("#vis-thigh", "Reisi", thighs, 45);
      createVisualization("#vis-calf", "Pohje", calfs, 34, [{value: 40, label:"Norsupohje"}]);
  });
}());
