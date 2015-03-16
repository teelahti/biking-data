(function() {
  "use strict";
  /* global d3, MG*/

  function Dictionary() { }

  Dictionary.prototype.push = function(person, date, value) {
    if(!this.hasOwnProperty(person)) {
      this[person] = [];
    }

    this[person].push({ "date": date, "value": value})
  };

  Dictionary.prototype.toArray = function() {
    return Object.getOwnPropertyNames(this).map(function(person) {
      return this[person];
    }, this);
  };

  function createVisualization(element, title, data, baselines) {
    MG.data_graphic({
        title: title,
        // description: "",
        data: data.toArray(),

        // Resize dynamically
        // width: 650,
        full_width: true,
        full_height: true,
        //height: 200,

        target: element,
        linked: true,
        //x_accessor: "year",
        //y_accessor: "value",

        show_secondary_x_label: false,

        legend: Object.getOwnPropertyNames(data),
        legend_target: "#legend",

        // Tooltips require jquery, disable them
        show_tooltips: false,

        animate_on_load: true,

        // TODO: Add baselines-properties
        baselines: baselines
    });

  }

  // Get data from server
  d3.json("data/data.json", function(data) {

      var weights = new Dictionary(),
          kms = new Dictionary(),
          dateFormatter = d3.time.format("%Y-%m-%d");

      Object.getOwnPropertyNames(data).forEach(function(valdate) {
        var dateData = data[valdate],
            dateObject = dateFormatter.parse(valdate);

        Object.getOwnPropertyNames(dateData).forEach(function(valperson) {
          var personData = dateData[valperson];

          kms.push(valperson, dateObject, personData[0]);
          weights.push(valperson, dateObject, personData[1]);
        });
      });

      createVisualization("#vis-km", "Kilometrit", kms, [{value: 40, label:"Norsupohje"}]);
      createVisualization("#vis-weight", "Paino", weights);
  });
}());
