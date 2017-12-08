function displayCommunity () {

	document.getElementById("wordcloud").innerHTML = " ";

	var a = document.getElementById('selectCommunity');
	var userCommun = a.options[a.selectedIndex].text;

	console.log("User choice " + userCommun);

	var myComunArray = community[0].communities;

	for (var i= 0; i< myComunArray.length; i++) {
		var lookComun = myComunArray[i];

		if(userCommun == lookComun.tags.join(', ')){
			
			console.log(lookComun.tags);
			var communityVocabulary = lookComun.vocabulary;
			console.log(lookComun.top_artist);

			document.getElementById("topComunArt").innerHTML = lookComun.top_artist.join(',  ');

			console.log(communityVocabulary);

				d3.wordcloud()
					.size([550, 350])
					.fill(d3.scale.ordinal().range(["#00386b", "#5686a9", "#8A8895", "#57b4cc"]))
					.words(communityVocabulary).start();

		}

	}

}
