// http://bl.ocks.org/mbostock/1346395

var Graph2 = React.createClass({
	displayName: "Graph2",

	render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement("svg", { id: "graph2", className: "chart" })
	    );
	  }
	});

ReactDOM.render(React.createElement(Graph2, null), document.getElementById('container2'));

var width2 = 960,
    height2 = 300,
    radius2 = Math.min(width2, height2) / 2;

var color_graph2 = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc_graph2 = d3.svg.arc()
    .innerRadius(radius2 - 100)
    .outerRadius(radius2 - 20);

var pie_graph2 = d3.layout.pie()
    .value(function(d) { return d.apples; })
    .sort(null);
	
var graph2 = d3.select("#graph2")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", "translate(" + width2 / 2 + "," + height2 / 2 + ")");

d3.tsv("resources/pie_data.tsv", type, function(error, data) {
  var path = graph2.datum(data).selectAll("path")
      .data(pie_graph2)
      .enter().append("path")
      .attr("fill", function(d, i) { return color_graph2(i); })
      .attr("d", arc_graph2);

	var legend = graph2.datum(data).selectAll("path")
      .data(pie_graph2)
      .enter().append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data; });
  
	d3.selectAll("input")
      .on("change", change);
	  
 var timeout = setTimeout(function() {
    d3.select("input[value=\"oranges\"]").property("checked", true).each(change);
  }, 2000);

  
  function change() {
    var value = this.value;
    clearTimeout(timeout);
    pie_graph2.value(function(d) { return d[value]; }); // change the value function
    path = path.data(pie_graph2); // compute the new angles
    path.attr("d", arc_graph2); // redraw the arcs
  }
});

function type(d) {
  d.apples = +d.apples;
  d.oranges = +d.oranges;
  d.strawberries = +d.strawberries;
  d.bananas = +d.bananas;
  return d;
}
