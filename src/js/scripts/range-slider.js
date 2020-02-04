import './rslider.min.js'
  var mySlider = new rSlider({
        target: '#sampleSlider',
        values: [10, 15, 20, 25, 30, 35, 40, 45,50],
        range: true,
        tooltip: false,
        scale: true,
        labels: true,
        set: [10, 20],
        onChange: function (value) {
        	console.log("Slider value changed to: " + value);
			document.querySelector(".rent-value").innerHTML = value;

        	return rent_data(value);
    	}
    });

  function rent_data(value)
{
    var rentValue = "Rent_" + value;
    console.log("rent_data() will return: " + rentValue);
    return rentValue;
}