var apiKey = "NmXoAMS92B8gPSPWNVqG1ANjCYyFTQOP";
var searchTerm = "";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + searchTerm;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

})