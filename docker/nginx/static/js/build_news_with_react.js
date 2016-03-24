
var NavBarHeader = React.createClass({
	  displayName: "NavBarHeader",
	  render: function render() {
	    	return React.createElement("div", {className:"navbar-header" },
					React.createElement("button", {className:"navbar-toggle", "data-toggle":"collapse", "data-target":"#bs-example-navbar-collapse-1"},
						React.createElement("span", {className: "sr-only" },"Toggle navigation"),
						React.createElement("span", {className: "icon-bar"}),
						React.createElement("span", {className: "icon-bar"}),
						React.createElement("span", {className: "icon-bar"})
					),
	
					React.createElement('a', {className:"navbar-brand",  href:"#"}, "Start BCF Bootstrap" )
				)	
	  		}
	});


var NavBarLink = React.createClass({
	  displayName: "NavBarLink",
	  render: function render() {
	    	return React.createElement("div", {className:"collapse navbar-collapse" },
					React.createElement("ul", {className:"nav navbar-nav"},
						React.createElement("li", null,
							React.createElement("a", {href:"#"}, "About")
						),
						React.createElement("li", null,
							React.createElement("a", {href:"#"}, "Services")
						),
						React.createElement("li", null,
								React.createElement("a",{ href: "#" }, "Settings")
							),
						React.createElement("li", null,
							React.createElement("a", {href:"#"}, "Contact")
						)
					)
				)
	  		}
	});


var NewsContainer = React.createClass({
	  displayName: "NewsContainer",
	  render: function render() {
	    	return React.createElement("div", {className:"col-lg-8"},
					React.createElement("h1", null, "Blog Post Title"),
					React.createElement("p", {className:"lead"},
						React.createElement("span", null, "by "),
						React.createElement("a", {hef:"#"}, "Start Bootstrap")
					),
					React.createElement("hr", null),
					React.createElement("p", null,
						React.createElement("span", {className:"glyphicon glyphicon-time"}),
						React.createElement("span", null, " Posted on August 24, 2013 at 9:00 PM")
					),
					React.createElement("hr", null),
					React.createElement("img", {className:"img-responsive", src:"http://placehold.it/900x300", alt:""}),
					React.createElement("hr", null),
					React.createElement("p", {className:"lead"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?"),
					React.createElement("p", {className:"lead"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus."),
					React.createElement("p", {className:"lead"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"),
					React.createElement("hr", null),

					React.createElement("div", {className:"well"},
						React.createElement("h4", null, "Leave a comment:"),
						React.createElement("form", {role:"form"},
							React.createElement("div", {className:"form-group"},
								React.createElement("textarea", {id:"comment_id", className:"form-control", row:"3"})
							),
							React.createElement("button", {className:"btn btn-primary", type:"submit", onClick:
								function(){
									post_comment(); 
								}
							}, "Submit")
						)
					),
					React.createElement("hr", null),
					React.createElement(PostedComments, null),
					React.createElement("hr", null)
				)	
	  		}
	});


var NewsSideBar = React.createClass({
	  displayName: "NewsSideBar",
	  render: function render() {
	    	return React.createElement("div", {className:"col-md-4"},
	    			// 1
	    			React.createElement("div", {className:"well"},
	    				React.createElement("h4", null, "Blog Search"),
	    				React.createElement("div", {className:"input-group"},
	    					React.createElement("input", {type:"text", className:"form-control"}),
	    					React.createElement("span", {className:"input-group-btn"},
	    						React.createElement("button", {className:"btn btn-default", type:"button"},
	    							React.createElement("span", {className:"glyphicon glyphicon-search"})
	    						)
	    					)
						)
					),
					//2
	    			React.createElement("div", {className:"well"},
	    				React.createElement("h4", null, "Blog Categories"),

	    				React.createElement("div", {className:"row"},
	    					React.createElement("div", {className:"col-lg-6"},
	    						React.createElement("ul", {className:"list-unstyled"},
	    							React.createElement("li", null,
	    								React.createElement("a", {href:"#"}, "Category Name")
	    							),
	    							React.createElement("li", null,
	    								React.createElement("a", {href:"#"}, "Category Name")
	    							),
	    							React.createElement("li", null,
	    								React.createElement("a", {href:"#"}, "Category Name")
	    							),
	    							React.createElement("li", null,
	    								React.createElement("a", {href:"#"}, "Category Name")
	    							)
	    						)
	   						),
		    				React.createElement("div", {className:"col-lg-6"},
		    					React.createElement("ul", {className:"list-unstyled"},
		    						React.createElement("li", null,
		    							React.createElement("a", {href:"#"}, "Category Name")
		    						),
		    						React.createElement("li", null,
		    							React.createElement("a", {href:"#"}, "Category Name")
		    						),
		    						React.createElement("li", null,
		    							React.createElement("a", {href:"#"}, "Category Name")
		    						),
		    						React.createElement("li", null,
		    							React.createElement("a", {href:"#"}, "Category Name")
		    						)
		    					)
		    				)
		    			)

	    			),
					//3
					React.createElement("div", {className:"well"},
						React.createElement("h4", null, "Side Widget Well"),
						React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.")
					)
				)	
	  		}
	});


var NewsFooter = React.createClass({
	  displayName: "NewsFooter",
	  render: function render() {
	  		return React.createElement("div", {className:"row"},
	    			React.createElement("div", {className:"col-lg-12"},
	    				React.createElement("p", null, "Copyright &copy; Your Website 2014")
	    			)
				)	
	  		}
	});



var PostedComments = React.createClass({
	  displayName: "PostedComments",
	  render: function render() {
	    	return React.createElement("div", {className:"media"},
	    				React.createElement("a", {className:"pull-left", href:"#"},
	    					React.createElement("img", {className:"media-object", src:"http://placehold.it/64x64", alt:""})
	    				),
	    				React.createElement("div", {className:"media-body"},
	    					React.createElement("h4", {className:"media-heading"}, "Start Bootstrap",
	    						React.createElement("small", null, " August 25, 2014 at 9:30 PM")
	    					), 
	    					React.createElement("span", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")
	    				)
                    ),
	    			React.createElement("div", {className:"media"},
	    				React.createElement("a", {className:"pull-left", href:"#"},
	    					React.createElement("img", {className:"media-object", src:"http://placehold.it/64x64", alt:""})
	    				),
	    				React.createElement("div", {className:"media-body"},
	    					React.createElement("h4", {className:"media-heading"}, "Start Bootstrap",
	    						React.createElement("small", null, " August 25, 2014 at 9:30 PM")
	    					), 
	    					React.createElement("span", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),
	    					React.createElement("div", {className:"media"},
				    			React.createElement("a", {className:"pull-left", href:"#"},
				    				React.createElement("img", {className:"media-object", src:"http://placehold.it/64x64", alt:""})
				    			),
				    			React.createElement("div", {className:"media-body"},
				    				React.createElement("h4", {className:"media-heading"}, "Start Bootstrap",
				    					React.createElement("small", null, " August 25, 2014 at 9:30 PM")
				    				), 
				    				React.createElement("span", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")
				    			)
			                )
	    				)
                    )
	    	}
	   });


ReactDOM.render(React.createElement(NavBarHeader, null), document.getElementById('navbar_header'));
ReactDOM.render(React.createElement(NavBarLink, null), document.getElementById('navbar_link'));
ReactDOM.render(React.createElement(NewsContainer, null), document.getElementById('news_container'));
ReactDOM.render(React.createElement(NewsSideBar, null), document.getElementById('news_sideBar'));
ReactDOM.render(React.createElement(NewsFooter, null), document.getElementById('news_footer'));