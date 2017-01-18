/*
	Author: Aaiz Ahmed
	Date: January 17, 2017
	https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
	http://www.w3schools.com/html/html5_geolocation.asp
*/

function getLocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getValues, error);
	}
	else
	{
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    	return;
	}
}

function getValues(position)
{
	var lati  = position.coords.latitude;
    var longi = position.coords.longitude;

	var key = '&APPID=e579c8ec4536594e206ab2b517e975af';    
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    
    url += 'lat=' + lati + '&lon=' + longi + key;
   
    $.getJSON(url, getWeather);   

    return url;
}

function getWeather(data)
{
	console.log(data["main"]["temp"]);
	//Get location and add it here
    $("#location").text(data["name"] + ', ' + data["sys"]["country"]);
	$("#tempVal").text(data["main"]["temp"]);
}

function error() 
{
    output.innerHTML = "Unable to retrieve your location";
}

// $('.allow').on('click', getLocation() );