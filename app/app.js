import { Dictionary, CumulativeDictionary } from './dictionary';
import d3 from 'd3';

import visualizeTotalKMDistribution from './vis.totalKMDistribution';
import visualizeKMTimeline from './vis.kmtimeline';
import { timeline } from './vis';

// TODO: Should transpile ES6 beforehand, not runtime
// TODO: Add link graphs on rollover (follow all timeline graphs simultaneously)
// TODO: Add baselines: 82 kg läski, 40 cm norsupohje

function iterateProps(obj, fn) {
  Object.keys(obj).forEach(propName => {
    fn(propName, obj[propName]);
  });
}

// Get data from server
d3.json("data/data.json", data => {
  
    var kms = new Dictionary(),
        kms_cumulative = new CumulativeDictionary(),
        weights = new Dictionary(),
        waists = new Dictionary(),
        thighs = new Dictionary(),
        calfs = new Dictionary(),
        dateFormatter = d3.time.format("%Y-%m-%d");

    iterateProps(data, (dateProp, dateData) => {
      var date = dateFormatter.parse(dateProp);

      iterateProps(dateData, (personProp, person) => {
        kms.push(personProp, date, person[0]);
        weights.push(personProp, date, person[1]);
        waists.push(personProp, date, person[2]);
        thighs.push(personProp, date, person[3]);
        calfs.push(personProp, date, person[4]);
        kms_cumulative.push(personProp, date, person[0]);
      });
    });

    visualizeTotalKMDistribution("#vis-total-distribution", kms);
    visualizeKMTimeline("#vis-km", kms);
    timeline("#vis-weight", weights, "kg");
    timeline("#vis-waist", waists, "cm");
    timeline("#vis-thigh", thighs, "cm");
    timeline("#vis-calf", calfs, "cm");
});
