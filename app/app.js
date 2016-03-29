import { Dictionary, CumulativeDictionary } from './dictionary';
import d3 from 'd3';

import visualizeTotalKMDistribution from './vis.totalKMDistribution';
import visualizeKMTimeline from './vis.kmtimeline';
import { timeline } from './vis';

// TODO: Should transpile ES6 beforehand, not runtime. See http://mitranim.com/thoughts/next-generation-today/
// TODO: Add link graphs on rollover (follow all timeline graphs simultaneously)
// TODO: Add baselines: 82 kg läski, 40 cm norsupohje

function iterateProps(obj, fn) {
  Object.keys(obj).forEach(propName => {
    fn(propName, obj[propName]);
  });
}

function populate(data) {

    var kms = new Dictionary(),
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
      });
    });

    visualizeTotalKMDistribution("#vis-total-distribution", kms);
    visualizeKMTimeline("#vis-km", kms);
    timeline("#vis-weight", weights, "kg");
    timeline("#vis-waist", waists, "cm");
    timeline("#vis-thigh", thighs, "cm");
    timeline("#vis-calf", calfs, "cm");
}

function selectYear() {
    window.location.hash = this.id;
    d3.json("data/" + this.id + ".json", populate);
}

// Attach year change handler
var years = document.querySelectorAll("input[name=year]");

for (var i = 0; i < years.length; ++i) {
    years[i].addEventListener("click", selectYear)
}

// Select year - in order of priority:
// 1) One defined in the URL
// 2) The one that has been marked checked
var hashYear = window.location.hash.substring(1)
var sel = document.querySelector("input[name=year][id='" + hashYear +  "']")
if (!sel) {
    sel = document.querySelector("input[name=year]:checked");
}

sel.click();




