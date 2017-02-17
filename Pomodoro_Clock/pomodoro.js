function increment(num)
{
	if (num === 0)
	{
		var time = Number( $('#break').text() );
		time++;

		if (time == 10) // Can't go above 10 mins
		{
			return;
		}

		$('#break').text( ('0' + time).slice(-2) );
	}
	else
	{
		var time = Number( $('#session').text() );
		time++;

		if (time == 60) // Can't go above 60 mins
		{
			return;
		}

		$('#session').text( ('0' + time).slice(-2) );
		$('#timeLeft').text(('0' + time).slice(-2) + ':00');
	}
}

function decrement(num)
{
	if (num === 0)
	{
		var time = Number( $('#break').text() );
		time--;

		if (time === 0)
		{
			return;
		}

		$('#break').text( ('0' + time).slice(-2) );
	}
	else
	{
		var time = Number( $('#session').text() );
		time--;

		if (time === 0)
		{
			return;
		}

		$('#session').text( ('0' + time).slice(-2) );
		$('#timeLeft').text( ('0' + time).slice(-2) + ':00');
	}
}

function reset()
{
	clearInterval(timeLeft);

	$('#break').text( 05 );
	$('#session').text( 25 );
	$('#info').text('Session');
	$('#timeLeft').text( '25:00' );
}

function statCounter(endTime)
{
	// Date.parse() gives current time in milli seconds.	
	var currentTime = endTime - Date.parse( new Date() );

	var seconds = Math.floor( (currentTime/1000) % 60 );
	var minutes = Math.floor( (currentTime/1000/60) % 60 );
	var hours = Math.floor( (currentTime/(1000*60*60)) % 24 );
  	var days = Math.floor( currentTime/(1000*60*60*24) );

	var formatTime = [currentTime, days, hours, minutes, seconds]; 
	
	return formatTime;
}

var timeLeft; 
var onBreak = false;

function startSession()
{
	if ( onBreak )
	{
		return startBreak();
	}

	$('#info').text('Session');
	$('#start').addClass('hide');
	$('#stop').removeClass('hide');

	var minutes = Number ( $('#timeLeft').text().substring(0, 2) );
	var seconds = Number ( $('#timeLeft').text().substring(3, 5) );

	var timeMilliSec;

	if ( minutes === 0 && seconds === 0 )
	{
		timeMilliSec = Number( $('#session').text() ) * (1000*60);
	}
	else
	{
		//Converting the time user added to milli seconds.
		timeMilliSec = minutes*60*1000 + seconds*1000;
	}

	var endTime = timeMilliSec + Date.parse( new Date() );
	//var endTime = Date.parse( new Date() ) + 5000;

    function updateClock() 
	{
	    var time = statCounter( endTime );
	    
	    var str = ('0' + time[3]).slice(-2) + ':' + ('0' + time[4]).slice(-2); 
		
		$('#timeLeft').text( str );

		if (time[0] <= 0)
		{
			clearInterval(timeLeft);
			onBreak = true;
			startBreak();
		}
    }

    timeLeft = setInterval(updateClock, 1000);    
}

function startBreak()
{
	var timeMilliSec; 

	if ( onBreak )
	{
		var minutes = Number ( $('#timeLeft').text().substring(0, 2) );
		var seconds = Number ( $('#timeLeft').text().substring(3, 5) );

		timeMilliSec = minutes*60*1000 + seconds*1000;
	}
	else
	{
		timeMilliSec = Number( $('#break').text() ) * (1000*60);
	}

	$('#info').text('Break');
	$('#start').addClass('hide');
	$('#stop').removeClass('hide');

	var endTime = timeMilliSec + Date.parse( new Date() );
	//var endTime = Date.parse( new Date() ) + 8000;

    function updateClock() 
	{
	    var time = statCounter( endTime );
	    var str = ('0' + time[3]).slice(-2) + ':' + ('0' + time[4]).slice(-2); 
		$('#timeLeft').text( str );

		if (time[0] <= 0)
		{
			clearInterval(timeLeft);
			onBreak = false;
			startSession();
		}
    }

   timeLeft = setInterval(updateClock, 1000);
}

function stopCounter()
{
	$('#stop').addClass('hide');
	$('#start').removeClass('hide');
	
	clearInterval(timeLeft);
}

$(document).ready( function()
{
	$('#timeLeft').text('25:00');
	$('#stop').addClass('hide');

});