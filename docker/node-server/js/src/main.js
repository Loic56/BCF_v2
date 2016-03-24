"use strict"

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var data = [
  {author: "Peter Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text:"This is *another* comment"}
];

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Silver Pulse</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
    )
  }
});

var SideBar = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-sidebar">
        <li className="active">
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Exports</a>
        </li>
      </ul>
    );
  }
});

var MainPane = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-header">Dashboard</h1>
        <svg id="graph1" className="chart"></svg>
        <svg id="graph2" className="chart"></svg>
      </div>
    );
  }
});

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav')
);

ReactDOM.render(
  <SideBar />,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <MainPane />,
  document.getElementById('main')
);

//data = [1,2,3,4];

var margin = {top: 20, right:30, bottom: 30, left:40},
    width = 960 / 2 - margin.left - margin.right,
    height = 500 / 2 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

var g1 = d3.select("#graph1")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("resources/ic1.tsv", type, function (error, data) {
  //alert(data.map(function(obj) { return obj.week; }));
  x.domain(data.map(function(obj) { return obj.week; }))
  y.domain([0, d3.max(data, function(d) { return d.Somme; })]);

  g1.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  g1.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Frequency");

  var bar = g1.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.week); })
      .attr("y", function(d) { return y(d.Somme); })
      .attr("height", function(d) { return height - y(d.Somme); })
      .attr("width", x.rangeBand());

  /*var plot = g1.selectAll(".line")
      .data(data)
    .enter().append("path")
      .attr("d", function(d) { return d + "Z"; });*/


      //.attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; })

  /*bar.append("rect")
      .attr("y", function(d) { return y(d.Somme); })
      .attr("height", function(d) { return height - y(d.Somme); })
      .attr("width", x.rangeBand());*/

  /*bar.append("text")
      .attr("x", x.rangeBand() / 2)
      .attr("y", function(d) { return y(d.Somme) + 3; })
      .attr("dy", ".75em")
      .text(function(d) { return d.Somme; });*/

})

function type(d) {
  d.Somme = +d.Somme; // coerce to number
  //alert(d.Somme);
  return d;
}

/*ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('example')
);*/