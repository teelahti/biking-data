import { sum } from './listoperations';
import d3 from 'd3';
import nv from 'novus/nvd3';

export default function totalKMDistribution(element, data) {

  // Calculate totals
  var kmdata = data.map((person, personData) => {
    return {
      person,
      kms: personData.map(_ => _.value).reduce(sum)
    };
  });

  var totalKms = kmdata.map(_ => _.kms).reduce(sum);

  nv.addGraph(function() {
     var chart = nv.models.pieChart()
         .donut(true)
         .title(totalKms + " km")
         .showLabels(false)
         .x(d => d.person)
         .y(d => d.kms )
         .valueFormat(d => { return d + " km"; })
         .id('kmdistribution'); // allow custom CSS for this one svg

     d3.select(element)
         .datum(kmdata)
         .call(chart);

     nv.utils.windowResize(chart.update);

     return chart;
  });
}
