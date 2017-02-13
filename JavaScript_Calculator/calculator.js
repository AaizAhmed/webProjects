
function allClear()
{
	$('#displayPrevious').text('');
	$('#displayCurrent').text('0');

	//console.log("I'm here");
}

function clearEntry()
{
	// You probably need a stack to store input

	$('#displayCurrent').text('0');
}

function addText(str)
{
	$('#displayPrevious').append( str );
	$('#displayCurrent').text( str );
}

function addDecimal(str)
{
	//Check if nothing before . add a zero
	$('#displayPrevious').append( str );
	$('#displayCurrent').append( str );
}
