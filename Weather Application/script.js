$(document).ready(function() {
  $('#submitBtn').click(function() {
    var location = $('#location').val();
    if (location !== '') {
      // Show loading indicator
      $('#loadingIndicator').show();
      // Clear previous weather information
      $('#weatherInfo').empty();
      // Disable the submit button while fetching data
      $('#submitBtn').prop('disabled', true);
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
          q: location,
          appid: 'YOUR_API_KEY',
          units: 'metric'
        },
        success: function(data) {
          // Hide loading indicator
          $('#loadingIndicator').hide();
          var weatherInfo = 'Current weather in ' + data.name + ':<br>';
          weatherInfo += 'Temperature: ' + data.main.temp + '°C<br>';
          weatherInfo += 'Humidity: ' + data.main.humidity + '%<br>';
          weatherInfo += 'Description: ' + data.weather[0].description;
          $('#weatherInfo').html(weatherInfo);
          // Enable the submit button after data is fetched
          $('#submitBtn').prop('disabled', false);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // Hide loading indicator
          $('#loadingIndicator').hide();
          if (jqXHR.status === 404) {
            $('#weatherInfo').html('City not found. Please enter a valid location.');
          } else {
            $('#weatherInfo').html('Error occurred. Please try again later.');
          }
          // Enable the submit button after error
          $('#submitBtn').prop('disabled', false);
        }
      });
    } else {
      $('#weatherInfo').html('Please enter a location.');
    }
  });
});
