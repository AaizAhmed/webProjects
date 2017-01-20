
/*
	Author: Aaiz N Ahmed
	Data: January 20, 2017

	Random: https://en.wikipedia.org/wiki/Special:Random
*/
function getInput ()
{
	$("#inputBox").keyup( function(event) 
	{
	    if(event.keyCode == 13)
	    {
	    	//CAll the method, get the wikipedia articles
	        //$("#id_of_button").click();

	        console.log(document.getElementById('inputBox').value);
	    }
	});
}
