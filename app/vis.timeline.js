import d3 from 'd3';
import nv from 'nvd3';

export default function timeLine(element, data) {
  nv.addGraph(function() {
      var chart = nv.models.lineChart()
          .showLegend(false)
          .useInteractiveGuideline(true)
          .x(d => d[0])
          .y(d => d[1])
          // TODO: Give exact dates with xdomain https://nvd3-community.github.io/nvd3/

          .duration(300);

      chart.xAxis.tickFormat(d => d3.time.format('%-d.%-m')(new Date(d)));

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
