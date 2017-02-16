function increment(num)
{
	if (num === 0)
	{
		var time = Number( $('#break').text() );

		if (time == 10) // Can't go above 10 mins
		{
			return;
		}

		$('#break').text(time + 1);
	}
	else
	{
		var time = Number( $('#session').text() );

		if (time == 60) // Can't go above 60 mins
		{
			return;
		}

		$('#session').text(time + 1);
		$('#timeLeft').text(time + 1);
	}
}

function decrement(num)
{
	if (num === 0)
	{
		var time = Number( $('#break').text() );

		if (time == 0)
		{
			return;
		}

		$('#break').text(time - 1);
	}
	else
	{
		var time = Number( $('#session').text() );

		if (time == 1)
		{
			return;
		}

		$('#session').text(time - 1);
		$('#timeLeft').text(time - 1);
	}
}

function reset()
{
	$('#break').text( 5 );
	$('#session').text( 25 );
	$('#timeLeft').text( 25 );
}

function statCounter(endTime)
{
	var currentTime = endTime - Date.parse( new Date() );

	var seconds = Math.floor( (currentTime/1000) % 60 );
	var minutes = Math.floor( (currentTime/1000/60) % 60 );
	var hours = Math.floor( (currentTime/(1000*60*60)) % 24 );
  	var days = Math.floor( currentTime/(1000*60*60*24) );

	var formatTime = [currentTime, days, hours, minutes, seconds]; 
	
	return formatTime;
}

function displayCounter()
{
	//Converting the time user added to milli seconds.
	var endTime = Number( $('#session').text() ) * (1000*60);

	// Date.parse() gives current time in milli seconds.
	endTime += Date.parse( new Date() );  

	var timeLeft = setInterval( function() 
	{
		var time = statCounter(endTime);

		console.log(time);

		$('#timeLeft').text(time[3] + ':' + time[4]);

		if (time[0] <= 0)
		{
			clearInterval(timeLeft);
		}

	}, 1000);	
}