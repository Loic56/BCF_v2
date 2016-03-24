
var LoginContainer = React.createClass({
	  displayName: "LoginContainer",
	  handleSearch: function() {
	    	window.location.href = "http://192.168.99.101/inscription.html";
	  },
	  render: function render() {
	    	return React.createElement("div", {className:"row", id:"toto"},

		    			React.createElement("form", {className:"navbar-form navbar-left", role:"form" },
							React.createElement("div", {className:"form-group"},
								React.createElement("label", {for:"inputEmail"}, "Email address:"),
								React.createElement("input", {className:"form-control", id:"inputEmail", type:"email", placeholder:"Identifiant"})
							),
							React.createElement("div", {className:"form-group"},
								React.createElement("label", {for:"inputPassword"}, "Password:"),
								React.createElement("input", {className:"form-control", id:"inputPassword", type:"password", placeholder:"Mot de passe"})
							),

							React.createElement("div", {className:"checkbox"},
								React.createElement("label", null,
									React.createElement("input", {type:"checkbox", value:"remenber-me"}, "Se souvenir de moi")
								)
							),
							React.createElement("button", {className:"btn btn-default", type:"submit", onClick: 
								function(){
									console.error("click");
								}
							}, "S'identifier"),
							React.createElement("button", {className:"btn btn-default", type:"submit", onClick:this.handleSearch }, "S'inscrire")

						)	
					)
	  		}
	});




ReactDOM.render(React.createElement(LoginContainer, null), document.getElementById('login_container'));
