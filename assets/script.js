//Our API Key
var apiKey = "NmXoAMS92B8gPSPWNVqG1ANjCYyFTQOP";
//Grabs the search term entered and stores in a variable
var searchTermEl = $("#searchTerm").val();
//Our API link stored into a variable
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + searchTermEl;

//When the search button is clicked
$("#Search").on("click", function (event){
    event.preventDefault();

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})
});
















{/* <div id= "searchContent">
<!-- <blockquote class="blockquote mb-0">
<p> </p>
<footer class="blockquote-footer">year <cite title="Source Title" id = "year">eg. 1996</cite></footer>
</blockquote> -->
</div> */}
