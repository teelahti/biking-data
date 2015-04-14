import Dictionary from './dictionary';
import d3 from 'd3';

import visualizeTotalKMDistribution from './vis.totalKMDistribution';
import visualizeTimeline from './vis.timeline';

// TODO: Add link graphs on rollover (follow all timeline graphs simultaneously)
// TODO: Add baselines: 82 kg läski, 40 cm norsupohje

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

    visualizeTimeline("#vis-km", kms);

    // createVisualization("#vis-weight", "Paino", weights, 75, [{value: 82, label:"Läski"}]);
    // createVisualization("#vis-waist", "Vyötärö", waists, 85);
    // createVisualization("#vis-thigh", "Reisi", thighs, 45);
    // createVisualization("#vis-calf", "Pohje", calfs, 34, [{value: 40, label:"Norsupohje"}]);
});
