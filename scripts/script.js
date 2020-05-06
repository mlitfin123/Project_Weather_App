/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=";
    api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = { "api-key": "2aef98083e4917b47f111adf6ac2ab7c" };
  
    // Grab text the user typed into the search input, add to the queryParams object
    queryParams.q = $("#search-term")

      .val()
      .trim();
