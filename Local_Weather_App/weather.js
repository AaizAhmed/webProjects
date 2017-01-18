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
    
    url += 'lat=' + lati + '&lon=' + longi + '&units=imperial' + key;
   
    $.getJSON(url, getWeather);   

    return url;
}

function getWeather(data)
{
	console.log(data);
	
	//Adding Location
    $("#location").text(data["name"] + ', ' + data["sys"]["country"]);
	
	//Adding Temperature
	var temp = Math.round( data["main"]["temp"] );
	
	$("#tempVal").text(temp);

	$("#desc").text( data["weather"][0]["description"] );
	$("#wind").append( data["wind"]["speed"] );
	$("#humi").text( data.main.humidity); //["weather"][0]["description"] );
}

function convertTemp()
{
	var temp = document.getElementById("tempVal").innerHTML;

	if ($( "input[name='F/C']:checked" ).val() == 'C')
	{
		temp = Math.round( (temp - 32) * 5/9 );
	}
	else
	{
		temp = Math.round( (temp * 9/5) + 32 );
	}

	$("#tempVal").text(temp);
}

function error() 
{
    output.innerHTML = "Unable to retrieve your location";
}

// $('.allow').on('click', getLocation() );