function displayCommunity () {

	document.getElementById("wordcloudCommun").innerHTML = " ";

	var a = document.getElementById('selectCommunity');
	var userCommun = a.options[a.selectedIndex].text;

	console.log("User choice " + userCommun);

	for (var i = 0; i < communities.length; i++){
		var comunChoice = communities[i];

		if (comunChoice.tags == userCommun) {

			d3.wordcloudCommun()
			.size([550, 350])
			.fill(d3.scale.ordinal().range(["#00386b", "#5686a9", "#8A8895", "#57b4cc"]))
			.words(newVocabulary).start();


		}


	}


//}
