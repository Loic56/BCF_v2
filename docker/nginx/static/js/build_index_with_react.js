
var IndexTopNavBar = React.createClass({
	  displayName: "IndexTopNavBar",
	  render: function render() {
	    	return React.createElement("div", {className:"container-fluid"},
	    				React.createElement("div", {className:"navbar-header page-scroll"},
	    					React.createElement("button", {className:"navbar-toggle", "data-toggle":"collapse", "data-target":"#bs-example-navbar-collapse-1"},
	    						React.createElement("span", {className:"sr-only"}, "Toggle navigation"),
	    						React.createElement("span", {className:"icon-bar"}),
	    						React.createElement("span", {className:"icon-bar"}),
	    						React.createElement("span", {className:"icon-bar"})
	    					),
	    					React.createElement("a", {className:"navbar-brand", href:"index.html"}, "Start Bootstrap")
						),
	    				React.createElement("div", {className:"collapse navbar-collapse", id:"bs-example-navbar-collapse-1"},
	    					React.createElement("ul", {className:"nav navbar-nav navbar-right"}, 
	    						React.createElement("li", null, 
	    							React.createElement("a", {href:"index.html"}, "Home")
	    						),
								React.createElement("li", null, 
	    							React.createElement("a", {href:"about.html"}, "About")
	    						),
								React.createElement("li", null, 
	    							React.createElement("a", {href:"post.html"}, "Post")
	    						),
								React.createElement("li", null, 
	    							React.createElement("a", {href:"contact.html"}, "Contact")
	    						),
								React.createElement("li", null, 
	    							React.createElement("a", {href:"inscription.html"}, "Inscription")
	    						)
							)
						)	
	 				) 		
	  		}		
	});



var IndexPageHeader = React.createClass({
	  displayName: "IndexPageHeader",
	  divStyle:{
		  backgroundImage: 'url(img/home-bg.jpg)',
		  WebkitTransition: 'all', // note the capital 'W' here
		  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
	  },
	  render: function render() {
	    	return React.createElement("header", {className:"intro-header", style:this.divStyle},
		    			React.createElement("div", {className:"container"},
		    				React.createElement("div", {className:"row"},
		    					React.createElement("div", {className:"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"},
		    						React.createElement("div", {className:"site-heading"},
		    							React.createElement("h1", null, "Clean Blog"),
		    							React.createElement("hr", {className:"small"}),
		    							React.createElement("span", {className:"subheading"}, "A Clean Blog Theme by Start Bootstrap")
		    						)
		    					)
							)
		 				) 
		 			)		
	  		}		
	});



var IndexNewsContainer = React.createClass({
	displayName: "IndexNewsContainer",
	getInitialState: function() {
    	return {data: [] };
  	},
  	componentDidMount: function() {
        var xhr = new XMLHttpRequest();
        var url = "https://192.168.99.101:3000/news";
        xhr.open("GET", url, true);
        xhr.onload = function() {
          	var data = JSON.parse(xhr.responseText);
          	this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },
	render: function render() {
	    	return 	React.createElement("div", {className:"row"},
						React.createElement("div", {className:"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"},
				    		this.state.data.map(function(element) {
			            		return React.createElement("div", null,
			            					React.createElement("div", {className:"post-preview"},
				            					React.createElement("a", {href:"post.html"},
							            			React.createElement("h2", {className:"post-title"}, element.title),
							            			React.createElement("h3", {className:"post-subtitle"}, element.sub_title)
							            		),
							            		React.createElement("p", {className:"post-meta"},
							            			React.createElement("span", null, "Posted by "),
													React.createElement("a", {href:"#"}, element.pseudo),
													React.createElement("span", null, element.reg_date)
												)
											),
											React.createElement("hr", null)
										)
				    		}),
				    		React.createElement("ul", {className:"pager"},
				    			React.createElement("li", {className:"next"},
				    				React.createElement("a", {href:"#"}, "Older Posts")
				    			)
				    		)
		    			)
		    		)
	  		}		
	});


ReactDOM.render(React.createElement(IndexTopNavBar, null), document.getElementById('index_top_navbar'));
ReactDOM.render(React.createElement(IndexPageHeader, null), document.getElementById('index_page_header'));
ReactDOM.render(React.createElement(IndexNewsContainer, null), document.getElementById('index_news_container'));