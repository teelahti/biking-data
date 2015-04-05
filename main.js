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

  function createVisualization(element, title, data, min_y, baselines) {
    // TODO: Consider changing to C3 http://c3js.org/
    // or NVD3.js https://github.com/liquidpele/nvd3

    // TODO: Install with bower, just commit bower_components

    // TODO: Add pie chart of the km distribution

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

        // TODO: Make legend fixed on top
        legend_target: "#legend",

        // Tooltips require jquery, disable them
        show_tooltips: false,

        animate_on_load: true,

        min_y: min_y,

        baselines: baselines
    });

  }

  // Attach cumulative graph toggle
  var cumulativeToggle = document.getElementById("cumulative-toggle");
  cumulativeToggle.addEventListener("change", function(e) {
      document.body.classList.toggle("show-cumulative");
  });

  // Get data from server
  d3.json("data/data.json", function(data) {

      var kms = new Dictionary(),
          kms_cumulative = new Dictionary(),
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

          kms_cumulative.pushCumulative(valperson, dateObject, personData[0]);
        });
      });

      createVisualization("#vis-km", "Kilometrit", kms);

      // BUG: Rendering the cumulative graph on hidden element crashes metricsgraphics.js
      // createVisualization("#vis-km-cumulative", "Kilometrit", kms_cumulative);
      createVisualization("#vis-weight", "Paino", weights, 75, [{value: 82, label:"Läski"}]);
      createVisualization("#vis-waist", "Vyötärö", waists, 85);
      createVisualization("#vis-thigh", "Reisi", thighs, 45);
      createVisualization("#vis-calf", "Pohje", calfs, 34, [{value: 40, label:"Norsupohje"}]);
  });
}());
