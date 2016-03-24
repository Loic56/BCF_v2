/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var CommentBox = React.createClass({
	  displayName: "CommentBox",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "commentBox" },
	      React.createElement(
	        "h1",
	        null,
	        "Comments"
	      ),
	      React.createElement(CommentList, { data: this.props.data }),
	      React.createElement(CommentForm, null)
	    );
	  }
	});

	var CommentList = React.createClass({
	  displayName: "CommentList",

	  render: function render() {
	    var commentNodes = this.props.data.map(function (comment) {
	      return React.createElement(
	        Comment,
	        { author: comment.author },
	        comment.text
	      );
	    });
	    return React.createElement(
	      "div",
	      { className: "commentList" },
	      commentNodes
	    );
	  }
	});

	var CommentForm = React.createClass({
	  displayName: "CommentForm",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "commentForm" },
	      "Hello, world! I am a CommentForm."
	    );
	  }
	});

	var Comment = React.createClass({
	  displayName: "Comment",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "comment" },
	      React.createElement(
	        "h2",
	        { className: "commentAuthor" },
	        this.props.author
	      ),
	      this.props.children
	    );
	  }
	});

	var data = [{ author: "Peter Hunt", text: "This is one comment" }, { author: "Jordan Walke", text: "This is *another* comment" }];

	var NavBar = React.createClass({
	  displayName: "NavBar",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "container-fluid" },
	      React.createElement(
	        "div",
	        { className: "navbar-header" },
	        React.createElement(
	          "a",
	          { className: "navbar-brand", href: "#" },
	          "Silver Pulse"
	        )
	      ),
	      React.createElement(
	        "div",
	        { id: "navbar", className: "navbar-collapse collapse" },
	        React.createElement(
	          "ul",
	          { className: "nav navbar-nav navbar-right" },
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Dashboard"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Settings"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Profile"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Help"
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var SideBar = React.createClass({
	  displayName: "SideBar",

	  render: function render() {
	    return React.createElement(
	      "ul",
	      { className: "nav nav-sidebar" },
	      React.createElement(
	        "li",
	        { className: "active" },
	        React.createElement(
	          "a",
	          { href: "#" },
	          "Overview"
	        )
	      ),
	      React.createElement(
	        "li",
	        null,
	        React.createElement(
	          "a",
	          { href: "#" },
	          "Reports"
	        )
	      ),
	      React.createElement(
	        "li",
	        null,
	        React.createElement(
	          "a",
	          { href: "#" },
	          "Exports"
	        )
	      )
	    );
	  }
	});

	var MainPane = React.createClass({
	  displayName: "MainPane",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h1",
	        { className: "page-header" },
	        "Dashboard"
	      ),
	      React.createElement("svg", { id: "graph1", className: "chart" }),
	      React.createElement("svg", { id: "graph2", className: "chart" })
	    );
	  }
	});

	ReactDOM.render(React.createElement(NavBar, null), document.getElementById('nav'));

	ReactDOM.render(React.createElement(SideBar, null), document.getElementById('sidebar'));

	ReactDOM.render(React.createElement(MainPane, null), document.getElementById('main'));

	//data = [1,2,3,4];

	var margin = { top: 20, right: 30, bottom: 30, left: 40 },
	    width = 960 / 2 - margin.left - margin.right,
	    height = 500 / 2 - margin.top - margin.bottom;

	var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

	var y = d3.scale.linear().range([height, 0]);

	var xAxis = d3.svg.axis().scale(x).orient("bottom");

	var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10, "%");

	var g1 = d3.select("#graph1").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.tsv("resources/ic1.tsv", type, function (error, data) {
	  //alert(data.map(function(obj) { return obj.week; }));
	  x.domain(data.map(function (obj) {
	    return obj.week;
	  }));
	  y.domain([0, d3.max(data, function (d) {
	    return d.Somme;
	  })]);

	  g1.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

	  g1.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Frequency");

	  var bar = g1.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
	    return x(d.week);
	  }).attr("y", function (d) {
	    return y(d.Somme);
	  }).attr("height", function (d) {
	    return height - y(d.Somme);
	  }).attr("width", x.rangeBand());

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
	});

	function type(d) {
	  d.Somme = +d.Somme; // coerce to number
	  //alert(d.Somme);
	  return d;
	}

	/*ReactDOM.render(
	  <CommentBox data={data} />,
	  document.getElementById('example')
	);*/
	//# sourceMappingURL=main.js.map


/***/ }
/******/ ]);