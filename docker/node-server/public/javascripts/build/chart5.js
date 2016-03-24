
var Graph5 = React.createClass({
	displayName: "Graph5",

	render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement("svg", { id: "graph5", className: "chart" })
	    );
	  }
	});

ReactDOM.render(React.createElement(Graph5, null), document.getElementById('container5'));


var width = 960,
    height = 300,
    radius = Math.min(width, height) / 2;

var color5 = d3v3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3v3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc5 = d3v3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);
	
var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });

var graph5 = d3v3.select("graph5")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("resources/pie_data.csv", type, function(error, data) {
  if (error) throw error;
  
  // ko => g.length = 0
  var g = graph5.selectAll("g")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.age); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc5.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data.age; });
});


function type(d) {
  d.population = +d.population;
  return d;
}

