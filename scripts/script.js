$(document).ready(function () {
  function getWeatherData() {
    var city = $("#search-term").val();

    // queryURL is the url we'll use to query the API
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2aef98083e4917b47f111adf6ac2ab7c`;

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    $.get(queryURL, function (Response) {
      console.log(Response);
      console.log(Response.main.temp);

    })
  }
  $("#search-btn").on("click", function (event) {
    event.preventDefault();
    getWeatherData();

  })
})

