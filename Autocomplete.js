
var input = document.queryselector("#teamInput");
var config = { 
url: some,
}
new Autocomplete(input, config);
var teamInput = document.queryselector('#teamInput');


function Autocomplete(input, config) {
	input.addEventListener("keyup", function(event){

		console.log("input.value");

		var req = new XMLHttpRequest();

//addEventListener will execut far later then the rest.
		req.addEventListener("load", function(){
					console.log(req.responseText);
		});
		
		req.open("POST", config.url);
		req.setRequestHeader("Content-Type", "application/json");
		var query = {
			query: input.value
		};

		req.send(JSON.stringify(query));
	});
}


module.exports = Autocomplete;