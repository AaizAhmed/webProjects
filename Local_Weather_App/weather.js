/*
	Author: Aaiz Ahmed
	Date: January 17, 2017
*/

function defaultWeather ()
{
	var key = '&APPID=e579c8ec4536594e206ab2b517e975af';    
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=4140963&units=imperial';
    url += key;
    
    $.getJSON(url, getDefaultWeather); 
}
    
function getDefaultWeather(data)
{
    //Adding Location
    $("#location").text(data["name"] + ', ' + data["sys"]["country"]);
	
	//Adding Temperature
	var temp = Math.round( data["main"]["temp"] );
	$("#tempVal").text(temp);

	//Adding Icon
	var iconUrl = 'http://openweathermap.org/img/w/' + data["weather"][0]["icon"] + '.png';
	var addIcon = '<img id="img1" src="' + iconUrl + '">';
	$("#weatherIcon").append(addIcon);

	//Adding details
	var arr =  data["weather"][0]["description"].split(' ');
	var finalDesc = '';
	for (var i = 0; i < arr.length; i++)
	{
		finalDesc += arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length) + ' ';  
	}

	$("#desc").text( finalDesc );
	$("#wind").append( data["wind"]["speed"] + " mph");
	$("#humi").append( data.main.humidity + " %");
} 

function getLocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(getValues, error);
	}
	else
	{
		alert("Geolocation is not supported by your browser");
    	return;
	}
}

function getValues(position)
{
	var lati  = position.coords.latitude;
    var longi = position.coords.longitude;

	//Getting location from Google maps to include information like State and Zip code.
    var urlLocation = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lati + ',' + longi + '&sensor=true';

    $.getJSON 
    ( urlLocation, function(data) 
	    {
	    	//Adding Location
	      $('#location').text(data.results[1].formatted_address); 
	console.log(data.results[1].formatted_address);

	    }
	);

	var key = '&APPID=e579c8ec4536594e206ab2b517e975af';    
    var url = 'http://api.openweathermap.org/data/2.5/weather?';    
    url += 'lat=' + lati + '&lon=' + longi + '&units=imperial' + key;
   
    $.getJSON(url, getWeather);   
}

function getWeather(data)
{
	//console.log(data);
	
	//Adding Temperature
	var temp = Math.round( data["main"]["temp"] );
	$("#tempVal").text(temp);

	//Adding Icon
	var iconUrl = 'http://openweathermap.org/img/w/' + data["weather"][0]["icon"] + '.png';
	var addIcon = '<img id="img1" src="' + iconUrl + '">';
	
	$("#weatherIcon").html(addIcon);

	//Capatalizing 1st letter of words in description.
	var arr =  data["weather"][0]["description"].split(' ');
	var finalDesc = '';
	for (var i = 0; i < arr.length; i++)
	{
		finalDesc += arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length) + ' ';  
	}

	//Adding weather details
	$("#desc").text( finalDesc );
	$("#wind").text( "Wind " + data["wind"]["speed"] + " mph" );
	$("#humi").text( "Humidity " + data.main.humidity + " %");
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

	if (!isNaN(temp)) 	
	{	$("#tempVal").text(temp);	}
}

function error() 
{
    alert("Unable to retrieve your location");
}
