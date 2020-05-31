$(document).ready(function () {
  //get the last search in local storage
  var lastCity = JSON.parse(localStorage.getItem("City:"));
  //create a recent search button from local storage
  var searchBTN = $("<button id=history-btn style=width:100%>").text(lastCity);
  $("#search-area").append(searchBTN);
  function getWeatherData() {
    var city = $("#search-term").val();

    // queryURL is the url we'll use to query the API
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2aef98083e4917b47f111adf6ac2ab7c`;
    // forecast URL is the url we'll use to find the forecast from the API
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2aef98083e4917b47f111adf6ac2ab7c`;

    // This is the code to find the daily forecast and append it to the html
    $.get(queryURL, function (response) {
        localStorage.setItem("City:", JSON.stringify(city));
        var temp = (((response.main.temp) - 273.15) * 9/5 + 32).toFixed(2) + " F";
        var humidity = response.main.humidity
        var wind = response.wind.speed
        var newDate = new Date();
        var cityHead = $("<h2>").text(city + " (" + (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear() + ")");
        var searchHistory = $("<button id=history-btn style=width:100%>").text(city);
        var cityTemp = $("<p>").text("Temperature: " + temp);
        var cityHumid = $("<p>").text("Humidity: " + humidity + "%");
        var cityWind = $("<p>").text("Wind Speed: " + wind + " MPH");
        $("#search-area").append(searchHistory);
        $("#cityWeather-section").append(cityHead);
        $("#cityWeather-section").append(cityTemp);
        $("#cityWeather-section").append(cityHumid);
        $("#cityWeather-section").append(cityWind);

        //calculates the UV data for the weather
        var uvURL = `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=2aef98083e4917b47f111adf6ac2ab7c&lat=${response.coord.lat}&lon=${response.coord.lon}&cnt=1`;
        $.get(uvURL, function(response){
          var UV = response[0].value;
          if (UV < 3){
            var cityUV = $("<p style=background-color:blue>").text("UV Index: " + UV);
          }
          else if(UV >= 3 && UV < 5){
            var cityUV = $("<p style=background-color:green>").text("UV Index: " + UV);
          }
          else if(UV >= 5 && UV < 7){
            var cityUV = $("<p style=background-color:purple>").text("UV Index: " + UV);
          }
          else if(UV >= 7 && UV < 9){
            var cityUV = $("<p style=background-color:orange>").text("UV Index: " + UV);
          }
          else{
            var cityUV = $("<p style=background-color:red>").text("UV Index: " + UV);
          }
          $("#cityWeather-section").append(cityUV);
          console.log(response);
        })
        //allows the recent searches to be clicked to search the weather data again
        $("#history-btn").on("click", function (event) {
          event.preventDefault();
      
          getWeatherData();
      
        })

      console.log(response);
      console.log(temp);
      console.log(humidity);
      console.log(wind);

    })
    // This is the code to find the 5 day forecast and append it to the html
    $.get(forecastURL, function (response) {
      console.log(response);
      var temp = (((response.list[1].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + " F";
      var humidity = response.list[1].main.humidity
      var newDate = new Date();
      var cityHead = $("<h6>").text("(" + (newDate.getMonth() + 1) + "/" + (newDate.getDate() + 1) + "/" + newDate.getFullYear() + ")");
      var cityTemp = $("<p>").text("Temperature: " + temp);
      var cityHumid = $("<p>").text("Humidity: " + humidity + "%");
      $("#forecast-section").append(cityHead);
      $("#forecast-section").append(cityTemp);
      $("#forecast-section").append(cityHumid);

      var temp1 = (((response.list[2].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + " F";
      var humidity1 = response.list[2].main.humidity
      var cityHead1 = $("<h6>").text("(" + (newDate.getMonth() + 1) + "/" + (newDate.getDate() + 2) + "/" + newDate.getFullYear() + ")");
      var cityTemp1 = $("<p>").text("Temperature: " + temp1);
      var cityHumid1 = $("<p>").text("Humidity: " + humidity1 + "%");
      $("#forecast1-section").append(cityHead1);
      $("#forecast1-section").append(cityTemp1);
      $("#forecast1-section").append(cityHumid1);

      var temp2 = (((response.list[3].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + " F";
      var humidity2 = response.list[3].main.humidity
      var cityHead2 = $("<h6>").text("(" + (newDate.getMonth() + 1) + "/" + (newDate.getDate() + 3) + "/" + newDate.getFullYear() + ")");
      var cityTemp2 = $("<p>").text("Temperature: " + temp2);
      var cityHumid2 = $("<p>").text("Humidity: " + humidity2 + "%");
      $("#forecast2-section").append(cityHead2);
      $("#forecast2-section").append(cityTemp2);
      $("#forecast2-section").append(cityHumid2);

      var temp3 = (((response.list[4].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + " F";
      var humidity3 = response.list[4].main.humidity
      var cityHead3 = $("<h6>").text("(" + (newDate.getMonth() + 1) + "/" + (newDate.getDate() + 4) + "/" + newDate.getFullYear() + ")");
      var cityTemp3 = $("<p>").text("Temperature: " + temp3);
      var cityHumid3 = $("<p>").text("Humidity: " + humidity3 + "%");
      $("#forecast3-section").append(cityHead3);
      $("#forecast3-section").append(cityTemp3);
      $("#forecast3-section").append(cityHumid3);

      var temp4 = (((response.list[5].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + " F";
      var humidity4 = response.list[5].main.humidity
      var cityHead4 = $("<h6>").text("(" + (newDate.getMonth() + 1) + "/" + (newDate.getDate() + 5) + "/" + newDate.getFullYear() + ")");
      var cityTemp4 = $("<p>").text("Temperature: " + temp4);
      var cityHumid4 = $("<p>").text("Humidity: " + humidity4 + "%");
      $("#forecast4-section").append(cityHead4);
      $("#forecast4-section").append(cityTemp4);
      $("#forecast4-section").append(cityHumid4);
    })
  }
  // this gets the weather data when the search button is clicked
  $("#search-btn").on("click", function (event) {
    event.preventDefault();

    getWeatherData();

  })
})

