import { sum } from './listoperations';
import d3 from 'd3';
import nv from 'nvd3';

export default function totalKMDistribution(element, data) {

  // Calculate totals
  var kmdata = Object.getOwnPropertyNames(data).map(person => {
    return {
      person,
      kms: data[person].map(_ => _.value).reduce(sum)
    };
  });

  var totalKms = kmdata.map(elem => elem.kms).reduce(sum);

  nv.addGraph(function() {
    // TODO: corner radius not working
     var chart = nv.models.pieChart()
         .donut(true)
         .title(totalKms + " km")
         .showLabels(false)
         .x(d => d.person)
         .y(d => d.kms )
         .valueFormat(d => { return d + " km"; })
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
