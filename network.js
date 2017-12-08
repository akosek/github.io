$(document).ready(function () {
  $('.group').hide();
  $('#option1').show();
  $('#selectMe').change(function () {
    $('.group').hide();
    pickTopArtists();
    $('#'+$(this).val()).show();
  })
});

function pickTopArtists() {

  var c = document.getElementById('selectMe');
  var userCountryChoice = c.options[c.selectedIndex].text;
  console.log("User choice " + userCountryChoice);

  for(var i = 0; i < countries.length; i++){
    var pick = countries[i];

    console.log(countries[i]);

    if(pick.name == userCountryChoice) {
      document.getElementById("artistsFamous").innerHTML = pick.top_artist.join(',  ');
      document.getElementById("countryTags").innerHTML = pick.top_community.join(',  ');
    }
  }
}


function draw() {

		var mynetwork = document.getElementById('mynetwork');
		var x = - mynetwork.clientWidth ;
		var y = - mynetwork.clientHeight * 0.1;

		exp_nodes.push({id: 1000, x: x, y: y, label: 'Rock', shape:'triangle' ,color:'red', fixed: true, physics:false});


		var edges = new vis.DataSet(exp_edges);
		var nodes = new vis.DataSet(exp_nodes);


		// create a network
		var container = document.getElementById('mynetwork');
		var data = {
				nodes: nodes,
				edges: edges
		};
		var options = {
				nodes: {
						shape: 'dot',
						size: 16
				},
				layout:{
						randomSeed:34
				},
				physics: {
						forceAtlas2Based: {
								gravitationalConstant: -26,
								centralGravity: 0.005,
								springLength: 230,
								springConstant: 0.18
						},
						maxVelocity: 146,
						solver: 'forceAtlas2Based',
						timestep: 0.35,
						stabilization: {
								enabled:true,
								iterations:2000,
								updateInterval:25
						}
				}
		};
		var options = {
				physics:{
						stabilization: {
								enabled: true,
								iterations: 1000,
								updateInterval: 100,
								onlyDynamicEdges: false,
								fit: true
						},
						timestep: 0.2
				}
		}


		var network = new vis.Network(container, data, options);

		network.on("stabilizationProgress", function(params) {
				var maxWidth = 496;
				var minWidth = 20;
				var widthFactor = params.iterations/params.total;
				var width = Math.max(minWidth,maxWidth * widthFactor);

				document.getElementById('bar').style.width = width + 'px';
				document.getElementById('text').innerHTML = Math.round(widthFactor*100) + '%';
		});
		network.once("stabilizationIterationsDone", function() {
				document.getElementById('text').innerHTML = '100%';
				document.getElementById('bar').style.width = '496px';
				document.getElementById('loadingBar').style.opacity = 0;
				// really clean the dom element
				setTimeout(function () {document.getElementById('loadingBar').style.display = 'none';}, 500);
		});

}
