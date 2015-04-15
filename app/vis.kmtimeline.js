import d3 from 'd3';
import nv from 'nvd3';
import { tickFormat, xSelector, ySelector } from './vis';

export default function kmTimeline(element, data) {
  nv.addGraph(function() {
      var chart = nv.models.stackedAreaChart()
          .options({
            transitionDuration: 500
           })
          .showLegend(false)
          .useInteractiveGuideline(true)
          // BUG: Cannot give this from chart.yAxis.tickFormat
          .yAxisTickFormat(d3.format('.0f'))
          .x(xSelector)
          .y(ySelector);
          // TODO: Give exact dates with xdomain https://nvd3-community.github.io/nvd3/

      chart.xAxis.tickFormat(tickFormat);
      chart.yAxis.axisLabel('km');

      d3.select(element)
          .datum(data.toD3Array())
          .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
  });
}
