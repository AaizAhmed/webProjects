/*
	Author: Aaiz N Ahmed
	Data: January 20, 2017
*/

function getInput ()
{
	var word = document.getElementById('inputBox').value; 

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

function AddInputBox()
{
	//Removing Search icon.
	$("#searchDiv").empty();

	 //Creating input box
	 var input = document.createElement("input");
     input.type = "text";
     input.name = "search";
     input.class= "centerIt";
     input.id = "inputBox";
     input.placeholder="Type Here!"

     var img = document.createElement("img");
     img.src = "https://images.onlinelabels.com/images/clip-art/molumen/molumen_red_round_error_warning_icon_thumb.png";
	 img.id = "closeIcon";

	//Adding input box.
	$("#inputWrapper").append(input);
	$("#closeIconWrapper").append(img);
}

document.addEventListener('DOMContentLoaded', function()
{

$(document).keyup(function (event) 
{
    if( $(".inputBox:focus") && (event.keyCode === 13)) 
    {
       $("#displayWiki").empty();
       getInput();
    }
 });


document.getElementById("searchIcon").addEventListener('click',function() { AddInputBox(); });

});
