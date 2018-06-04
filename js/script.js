$(document).ready(function() {


  $('form').on('submit', function(e) {
    e.preventDefault();

    const inputCelsius = $('input[id=celsius]').val();
    const inputFahrenheit = $('input[id=fahrenheit]').val();

    function convertC(temp) {
      return temp * (9/5) + 32
    }
    let celsiusConversion = convertC(inputCelsius);

    function convertF(temp) {
      return (temp - 32) / (9/5);
    }
    let fahrenheitConversion = convertF(inputFahrenheit);

    console.log(inputCelsius);

    const inputBarCelsius = inputCelsius.trim();

    if(inputBarCelsius.length > 0) {
  $('.conversionResult').html(`<h2>The Celsius temperature ${inputCelsius} is equal to ${celsiusConversion} in Fahrenheit.`);
} else {
  $('.conversionResult').html(`<h2>The Fahrenheit temperature ${inputFahrenheit} is equal to ${fahrenheitConversion} in Celsius.`);
}

  const hot = "url(../assets/images/hot.jpg)";
  const cold = "url(../assets/images/cold.jpg)";
  const green = "url(../assets/images/green.jpg)"

  if(inputCelsius > 18) {
    $('body').css("background", hot).css("background-size", "cover")
  }if(inputCelsius <18) {
    $('body').css("background", green).css("background-size", "cover")
  } if (inputCelsius < 5) {
    $('body').css("background", cold).css("background-size", "cover")
  }

  })

  $('.clear').on("click", function(e) {
      $('input[type=text]').val('')
      $('.conversionResult').empty();
      $('body').css("background", "black");
  })







});
