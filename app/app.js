(function() {
  "use strict";
  /* global d3, nv */

  // TODO: Add link graphs on rollover (follow all timeline graphs simultaneously)
  // TODO: Add baselines: 82 kg läski, 40 cm norsupohje
  function sum(a, b) {return a + b;}

  function visualizeTotalKMDistribution(element, data) {

    // Calculate totals
    var kmdata = Object.getOwnPropertyNames(data).map(function(person) {
      return {
        person: person,
        kms: this[person]
          .map(function(elem) { return elem.value; })
          .reduce(sum)
      };
    }, data);

    var totalKms = kmdata
        .map(function(elem) { return elem.kms })
        .reduce(sum);

    nv.addGraph(function() {
       var chart = nv.models.pieChart()
           .donut(true)
           .title(totalKms + " km")
           .showLabels(false)
           .x(function(d) { return d.person })
           .y(function(d) { return d.kms })
           .valueFormat(function (d) { return d + " km"; })
           .padAngle(.08)
           .cornerRadius(5)
           .id('kmdistribution'); // allow custom CSS for this one svg

       // TODO: Transition not working at the moment
       d3.select(element)
           .datum(kmdata)
           .transition().duration(1200)
           .call(chart);

       nv.utils.windowResize(chart.update);

       return chart;
    });
  }

  function visualizeTimeLine(element, data) {
    nv.addGraph(function() {
        var chart = nv.models.lineChart()
            .showLegend(false)
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })

            // TODO: Give exact dates with xdomain https://nvd3-community.github.io/nvd3/
            //.xdomain()
            .duration(300);

        chart.xAxis.tickFormat(function(d) {
            return d3.time.format('%-d.%-m')(new Date(d))
        });

        chart.yAxis
          .axisLabel('km')
          .tickFormat(d3.format(',f'));

        d3.select(element)
            .datum(data.toD3Array())
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });
  }

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

      visualizeTotalKMDistribution("#vis-total-distribution", kms);

      visualizeTimeLine("#vis-km", kms);

      // createVisualization("#vis-weight", "Paino", weights, 75, [{value: 82, label:"Läski"}]);
      // createVisualization("#vis-waist", "Vyötärö", waists, 85);
      // createVisualization("#vis-thigh", "Reisi", thighs, 45);
      // createVisualization("#vis-calf", "Pohje", calfs, 34, [{value: 40, label:"Norsupohje"}]);
  });
}());
