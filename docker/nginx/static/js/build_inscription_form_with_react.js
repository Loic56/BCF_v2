
var InscriptionContainer = React.createClass({
	  displayName: "InscriptionContainer",
	  save: function() {
			var name = document.getElementById("name").value;
	  		var firstname = document.getElementById("firstname").value;
	  		var email = document.getElementById("email").value;
	  		var pseudo = document.getElementById("pseudo").value;

			var xmlhttp  = new XMLHttpRequest(); 
			var url = "https://192.168.99.101:3000/inscription";
 
 			var params  = JSON.stringify({"name":name, "firstname":firstname, "email":email, "pseudo":pseudo});

			xmlhttp.open("POST", url, true);
			xmlhttp.send(params);
			xmlhttp.onload = function (e) {
				if (xmlhttp.readyState === 4) {
					if (xmlhttp.status === 200 && xmlhttp.responseText != "KO") {
							console.error("Response : " + JSON.stringify(xmlhttp.responseText));
					}
					else {
							console.error("Response : " + JSON.stringify(xmlhttp.responseText));
					}
				}
			};
			xmlhttp.onerror = function (e) {
				console.error("Error : " + xmlhttp);
			};
	  },
	  render: function render() {
	    	return React.createElement("div", {className:"row"},
	    				React.createElement("div", {className:"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"},
	    					React.createElement("form", {name:"sentMessage", id:"contactForm"},
	    						React.createElement("div", {className:"row control-group"},
	    							React.createElement("div", {className:"form-group col-xs-12 floating-label-form-group controls"},
	    								React.createElement("label", null, "Nom"),
	    								React.createElement("input", {className:"form-control", type:"text", placeholder:"Nom", id:"name"}),
	    								React.createElement("p", {className:"help-block text-danger"})
	    							)
	    						),
								React.createElement("div", {className:"row control-group"},
	    							React.createElement("div", {className:"form-group col-xs-12 floating-label-form-group controls"},
	    								React.createElement("label", null, "Prénom"),
	    								React.createElement("input", {className:"form-control", type:"text", placeholder:"Prénom", id:"firstname"}),
	    								React.createElement("p", {className:"help-block text-danger"})
	    							)
	    						),
								React.createElement("div", {className:"row control-group"},
	    							React.createElement("div", {className:"form-group col-xs-12 floating-label-form-group controls"},
	    								React.createElement("label", null, "Adresse email"),
	    								React.createElement("input", {className:"form-control", type:"text", placeholder:"Email", id:"email"}),
	    								React.createElement("p", {className:"help-block text-danger"})
	    							)
	    						),
								React.createElement("div", {className:"row control-group"},
	    							React.createElement("div", {className:"form-group col-xs-12 floating-label-form-group controls"},
	    								React.createElement("label", null, "Pseudo"),
	    								React.createElement("input", {className:"form-control", type:"text", placeholder:"Pseudo", id:"pseudo"}),
	    								React.createElement("p", {className:"help-block text-danger"})
	    							)
	    						),
	    						React.createElement("div", {id:"succes"}),
	    						React.createElement("div", {className:"row"},
	    							React.createElement("div", {className:"form-group col-xs-12"},
	    								React.createElement("button", {type:"submit", className:"btn btn-default", onClick:this.save}, "Enregistrer")
	    							)
	    						)
	    					)
						)
	 				) 		
	  		}		
	});




ReactDOM.render(React.createElement(InscriptionContainer, null), document.getElementById('inscription_container'));
