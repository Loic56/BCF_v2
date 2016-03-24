
	var Graph1 = React.createClass({
	  displayName: "Graph1",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement("svg", { id: "graph1", className: "chart" })
	    );
	  }
	});

	ReactDOM.render(React.createElement(Graph1, null), document.getElementById('container1'));

	var margin = { top: 20, right: 30, bottom: 30, left: 40 },
	    width = 960,
	    height = 300;
		
	var x1 = d3.scale.ordinal().rangeRoundBands([0, width], .1);
	var y1 = d3.scale.linear().range([height, 0]);
	var xAxis1 = d3.svg.axis().scale(x1).orient("bottom");
	var yAxis1 = d3.svg.axis().scale(y1).orient("left").ticks(10, "%");
	
	var g1 = d3.select("#graph1")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	d3.tsv("resources/bar_data.tsv", type, function (error, data) {
	  x1.domain(data.map(function (obj) {
	    return obj.week;
	  }));
	  y1.domain([0, d3.max(data, function (d) {
	    return d.Somme;
	  })]);

	  g1.append("g")
		  .attr("class", "axis")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis1);

	  g1.append("g")
		  .attr("class", "axis")
		  .call(yAxis1).append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6).attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .text("Frequency");

	  var bar = g1.selectAll(".bar")
		  .data(data)
		  .enter()
		  .append("rect")
		  .attr("class", "bar")
		  .attr("x", function (d) {
	    return x1(d.week);
	  }).attr("y", function (d) {
	    return y1(d.Somme);
	  }).attr("height", function (d) {
	    return height - y1(d.Somme);
	  }).attr("width", x1.rangeBand());
});


	function type(d) {
	  d.Somme = +d.Somme; // coerce to number
	  return d;
	}
