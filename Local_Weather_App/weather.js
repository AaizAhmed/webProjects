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

function getValues()
{
	var lati  = position.coords.latitude;
    var longi = position.coords.longitude;
    
    var str = 'api.openweathermap.org/data/2.5/weather?';
    str += 'lat=' + lati + '&lon=' + longi;
    
    output.innerHTML = str;
    ('#location').write(str);
    return str;
}

function error() 
{
    output.innerHTML = "Unable to retrieve your location";
}
