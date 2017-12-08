$(document).ready(function(){

  $(".show_results").click(function(){

          $(".result-box").show();
  })

  $(".learnLink").click(function() {
      $('html, body').animate({
          scrollTop: $(".starting-box").offset().top
      }, 1500);
  });

  $(".resultLink").click(function() {
      $('html, body').animate({
          scrollTop: $(".result-box").offset().top
      }, 1500);
  });

  $("#userArtist").keypress(function(e) {
      if(e.which == 13) {
          e.preventDefault();
          $("#checkArtist").click();
       }
 });


});

  var allArtistsArray = [];
  function findArtist(){
  //  document.getElementById("emo").innerHTML = " ";
    document.getElementById("position").innerHTML = " ";
    document.getElementById("similar").innerHTML = " ";

  	var uservalue = document.getElementById("userArtist").value;
    var smallValue = uservalue.toLowerCase();


  	for (var i = 0; i < artists.length; i++){
  		var obj = artists[i];

      var allArtistsArray = artists[i].name;

  		if(obj.lower_name == smallValue){
        console.log(obj.lower_name);
  			document.getElementById("position").innerHTML = obj.present.join(',  ');
  			document.getElementById("similar").innerHTML =  obj.similar_artist.join(',  ');

  			/*for(var key in obj.sentiment)
          	{
              // Show just two most relevant categories without numbers
              document.getElementById("emo").innerHTML+= key + ": " + obj.sentiment[key] + "% " + " \n"
            }*/
  		}

  	}

  //  checkAvailable();

  }

/*function checkAvailable (){
  for (var i= 1; i< allArtistsArray.length; i++){
    console.log(allArtistsArray[i]);

  }
} */



var artistVocabulary = [];

function FindArtistSentiment() {

  document.getElementById("wordcloud").innerHTML = " ";

  var percentageSentiArray = [];
  var userValueSentiment = document.getElementById('userArtistSentiment').value;
  var smallUserSentiment = userValueSentiment.toLowerCase();

  for(var i=0; i < artists.length; i++){
    var senObj = artists[i];

    if(senObj.lower_name == smallUserSentiment){

      var newVocabulary = senObj.vocabulary;

     console.log("This is artists vocabulary: " + newVocabulary);

      d3.wordcloud()
      .size([550, 350])
      .fill(d3.scale.ordinal().range(["#00386b", "#5686a9", "#8A8895", "#57b4cc"]))
      .words(newVocabulary).start();

      for (var key in senObj.sentiment) {

          var percentageSenti = senObj.sentiment[key];
          console.log(key + senObj.sentiment[key]);
          percentageSentiArray.push(percentageSenti);

            var chartSentiData = [{
                        values: percentageSentiArray,
                        labels: ['Love', 'Shame/Guilty', 'Angry', 'Depressed/Helpless', 'Fear', 'Happy/Chreeful'],
                        type: 'pie',
                        hoverinfo: 'label+percent',
                        font: {
                          size: 16
                        },
                        color: '#fff',
                        marker: {
                            colors: ['rgb(255,115,142)', 'rgb(87, 180, 204)', 'rgb(113,90,124)', 'rgb(138, 136, 149)', 'rgb(22, 160, 133)', 'rgb(241, 196, 15)']
                        }
                        }];

            Plotly.newPlot('plotSentDiv', chartSentiData);
      };

    }
  }
}

/* function removeElementsWithValue(arr, val) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }
    return arr;
} */

function FindCountry (){
  //Clear the results fields
  document.getElementById("artistsFamous").innerHTML = " ";

  var e = document.getElementById('selectCountry');
  var userChoice = e.options[e.selectedIndex].text;
  var percentageArray = [];

  console.log(userChoice);

  for(var i = 0; i < countries.length; i++){
    var choice = countries[i];

    console.log(countries[i]);

    if(choice.name == userChoice) {

      document.getElementById("artistsFamous").innerHTML = choice.top_artist.join(',  ');
      document.getElementById("countryTags").innerHTML = choice.top_community.join(', ');
      document.getElementById("happyPos").innerHTML = choice.happiness_pos;

      console.log("this is position " + choice.happiness_pos);

      for (var key in choice.sentiment) {

          var percentage = choice.sentiment[key];
          console.log(key + choice.sentiment[key]);
          percentageArray.push(percentage);

            console.log("This is new array " + percentageArray);

            var chartData = [{
                        values: percentageArray,
                        labels: ['Love', 'Shame/Guilty', 'Angry', 'Depressed/Helpless', 'Fear', 'Happy/Chreeful'],
                        type: 'pie',
                        hoverinfo: 'label+percent',
                        font: {
                          size: 16
                        },
                        color: '#fff',
                        marker: {
                            colors: ['rgb(255,115,142)', 'rgb(87, 180, 204)', 'rgb(113,90,124)', 'rgb(138, 136, 149)', 'rgb(22, 160, 133)', 'rgb(241, 196, 15)']
                        }
                        }];

            Plotly.newPlot('plotDiv', chartData);
      };

    }

  }

}
