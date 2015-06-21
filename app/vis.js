import d3 from 'd3';

export var timeFormat = d3.time.format('%-d.%-m');
export function tickFormat(d) {
  return timeFormat(new Date(d));
}

export var xSelector = d => d[0];
export var ySelector = d => d[1];

export function timeline(element, data, yLabel, yTickFormat = d3.format('.1f')) {
  nv.addGraph(function () {
    var chart = nv.models.lineChart()
      .showLegend(false)
      .useInteractiveGuideline(true)
      .x(xSelector)
      .y(ySelector);

    chart.xAxis.tickFormat(tickFormat);

    chart.yAxis
      .axisLabel(yLabel)
      .tickFormat(yTickFormat);

    d3.select(element)
      .datum(data.toD3Array())
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
}
