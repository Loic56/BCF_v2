
var Graph6 = React.createClass({
	displayName: "Graph6",

	render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement("svg", { id: "graph6", className: "chart" })
	    );
	  }
	});

ReactDOM.render(React.createElement(Graph6, null), document.getElementById('container5'));

var margin6 = {top: 20, right: 80, bottom: 30, left: 50},
    width6 = 960,
    height6 = 500;

var parseDate6 = d3v3.time.format("%Y%m%d").parse;

var x6 = d3v3.time.scale()
    .range([0, width]);

var y6 = d3v3.scale.linear()
    .range([height, 0]);

var color6 = d3v3.scale.category10();

var xAxis6 = d3v3.svg.axis()
    .scale(x6)
    .orient("bottom");

var yAxis6 = d3v3.svg.axis()
    .scale(y6)
    .orient("left");

var line6 = d3v3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temperature); });

var graph6 = d3v3.select("graph6")
    .attr("width", width6 + margin6.left + margin6.right)
    .attr("height", height6 + margin6.top + margin6.bottom)
  .append("g")
    .attr("transform", "translate(" + margin6.left + "," + margin6.top + ")");

d3v3.tsv("resources/multiple_line_chart_data.tsv", function(error, data) {
  if (error) throw error;

  color6.domain(d3v3.keys(data[0]).filter(function(key) { return key !== "date"; }));

  data.forEach(function(d) {
    d.date = parseDate6(d.date);
  });

  var cities = color6.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {date: d.date, temperature: +d[name]};
      })
    };
  });

  x6.domain(d3v3.extent(data, function(d) { return d.date; }));

  y6.domain([
    d3v3.min(cities, function(c) { return d3v3.min(c.values, function(v) { return v.temperature; }); }),
    d3v3.max(cities, function(c) { return d3v3.max(c.values, function(v) { return v.temperature; }); })
  ]);

  graph6.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis6);

  graph6.append("g")
      .attr("class", "y axis")
      .call(yAxis6)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Temperature (ºF)");

  var city = graph6.selectAll(".city")
      .data(cities)
    .enter().append("g")
      .attr("class", "city");

  city.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line6(d.values); })
      .style("stroke", function(d) { return color6(d.name); });

  city.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });
});
