/*
	Author: Aaiz N Ahmed
	Data: January 20, 2017
*/

function getInput ()
{
	var word = document.getElementById('inputBox').value;

	//Remove spaces 

	var wikiUrl = 'http://www.wikipedia.org/w/api.php?action=opensearch&search=';
	wikiUrl += word + '&limit=12&namespace=0&callback=getArticles';

	var tag = document.createElement("script");
	tag.src = wikiUrl;

	//Adding JS to the HTML header
	document.getElementsByTagName("head")[0].appendChild(tag);
}

function getArticles(data)
{
	//Moving button and text box to display articles.
	$("#randomArticle").css('margin-top', '1%');
	$("#box").css('margin-top', '1%');

	var titles = data[1];
	var desc = data[2];
	var urls = data[3];

	for(i in urls)
	{
		var display = '<a href="' + urls[i] + '" target="_blank">';
		display += '<div class="makeBox"><h4>' + titles[i] + '</h4><br>' + desc[i] + '</div>';
		display += '</a>';

		$('#displayWiki').append(display);
	}
}

function addInputBox()
{
	//Removing Search icon.
	$("#searchDiv").empty();

	if ( document.getElementById("inputBox") == null) 
	{
		 //Creating input box
		 var input = document.createElement("input");
	     input.type = "text";
	     input.name = "search";
	     input.id = "inputBox";
	     input.placeholder="Type Here!"    

		//Adding input box and button.
		$("#inputWrapper").append(input);	
	}
}

function addButton()
{
	if ( document.getElementById("closeIcon") == null) 
	{
		//Creating a button
		var button = document.createElement("button");
	    button.innerHTML = "Clear";
		button.id = "closeIcon";
		$(button).addClass('btn btn-danger');

		//$('#closeIconWrapper').on('click', button, addSearchIcon() );
		$(button).trigger('click');

		//Adding the button
		$("#closeIconWrapper").append(button);
	}		
}

function addSearchIcon()
{
	//Removing button and text box	
	$("#closeIconWrapper").empty();
	$("#inputWrapper").empty();
	$("#displayWiki").empty();
	$("#randomArticle").css('margin-top', '15%');

	var img = '<img src="https://maxcdn.icons8.com/iOS7/PNG/100/Very_Basic/search-100.png" id="searchIcon" width="100px">';
	$('#searchDiv').append(img);

	$(img).trigger('click');

	$(document).on('click', "#searchDiv", function() {	addInputBox();	});
}

document.addEventListener('DOMContentLoaded', function()
{
	$(document).keyup(function (event) 
	{
		if ($("#inputBox").is(":focus")) 
		{  
			addButton();
		}
		
	    if( (event.keyCode === 13) ) 
	    {
	       $("#displayWiki").empty();
	       getInput();
	    }
	 });

	document.getElementById("searchIcon").addEventListener('click', function() { addInputBox(); } );
	$(document).on('click', "#closeIcon", function() {	addSearchIcon();	});

	//$("#inputBox").focus( function() { $("#closeIconWrapper").removeClass('clearBtn'); } );
});
