
	var Graph3 = React.createClass({
	  displayName: "Graph3",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement("svg", { id: "graph3", className: "chart" })
	    );
	  }
	});

ReactDOM.render(React.createElement(Graph3, null), document.getElementById('container3'));

	
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960
    height = 300;

var parseDate = d3.time.format("%d-%b-%y").parse;
var x3 = d3.time.scale()
    .range([0, width]);
	
var y3 = d3.scale.linear()
    .range([height, 0]);
	
var xAxis3 = d3.svg.axis()
    .scale(x3)
    .orient("bottom");
	
var yAxis3 = d3.svg.axis()
    .scale(y3)
    .orient("left");
	
var line = d3.svg.line()
    .x(function(d) { return x3(d.date); })
    .y(function(d) { return y3(d.close); });

var graph3 = d3.select("#graph3")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("resources/line_data.tsv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
  });

  x3.domain(d3.extent(data, function(d) { return d.date; }));
  y3.domain(d3.extent(data, function(d) { return d.close; }));

  graph3.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis3);

  graph3.append("g")
      .attr("class", "axis")
      .call(yAxis3)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

  graph3.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
});
