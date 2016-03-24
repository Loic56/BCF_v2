
// text, news_id, user_id
function post_comment(){
	var com = document.getElementById("comment_id").value;

	// protection pour conserver les caractères spéciaux
	var comment = encodeURIComponent(com);



	var url = "https://192.168.99.101:3000/comments";
	var params = "comment="+comment+"&user_id=2&news_id=1";

	var xmlhttp  = new XMLHttpRequest(); 
	xmlhttp.open("POST", url, true); 
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(params);

	xmlhttp.onload = function (e) {
		if (xmlhttp.readyState === 4) {
			if (xmlhttp.status === 200 && xmlhttp.responseText != "KO") {
				console.log(xmlHttp.responseText);
			}
			else {
				console.error("KO");
			}
		}
	};

	xmlhttp.onerror = function (e) {
		console.error("Error : " + xmlhttp);
	};

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 0)) {
			console.log(xmlHttp.responseText);
		} 
	};
	
};
