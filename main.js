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

  function createVisualization(element, title, data) {
    MG.data_graphic({
        title: title,
        // description: "",
        data: data.toArray(),

        // Resize dynamically
        // width: 650,
        full_width: true,
        height: 200,

        target: element,
        //x_accessor: "year",
        //y_accessor: "sightings",

        show_secondary_x_label: false,

        // Tooltips require jquery, disable them
        show_tooltips: false
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

      createVisualization("#vis-km", "Viikottaiset kilometrit", kms);
      createVisualization("#vis-weight", "Paino", weights);
  });
}());
