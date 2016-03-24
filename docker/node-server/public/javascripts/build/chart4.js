
	var Graph4 = React.createClass({
	  displayName: "Graph4",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement("svg", { id: "graph4", className: "chart" })
	    );
	  }
	});

	ReactDOM.render(React.createElement(Graph4, null), document.getElementById('container4'));

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960
    height = 300;

var x0_4 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1_4 = d3.scale.ordinal();

var y_4 = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var xAxis_graph4 = d3.svg.axis()
    .scale(x0_4)
    .orient("bottom");

var yAxis_graph4 = d3.svg.axis()
    .scale(y_4)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var graph4 = d3.select("#graph4")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("resources/bar_data2.csv", function(error, data) {
  if (error) throw error;

  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });

  data.forEach(function(d) {
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
  });

  x0_4.domain(data.map(function(d) { return d.State; }));
  x1_4.domain(ageNames).rangeRoundBands([0, x0_4.rangeBand()]);
  y_4.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]);

  graph4.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis_graph4);

  graph4.append("g")
      .attr("class", "axis")
      .call(yAxis_graph4)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Population");

  var state = graph4.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "state")
      .attr("transform", function(d) { return "translate(" + x0_4(d.State) + ",0)"; });

  state.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", x1_4.rangeBand())
      .attr("x", function(d) { return x1_4(d.name); })
      .attr("y", function(d) { return y_4(d.value); })
      .attr("height", function(d) { return height - y_4(d.value); })
      .style("fill", function(d) { return color(d.name); });

 // legend
  var legend = graph4.selectAll(".legend")
      .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; }); // espace entre le carrés

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

});

