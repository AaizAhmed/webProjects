
/*
	Author: Aaiz N Ahmed
	Data: January 20, 2017

	Random: https://en.wikipedia.org/wiki/Special:Random
*/

function getInput ()
{
	var word = document.getElementById('inputBox').value;
	console.log(word);	

	var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
	wikiUrl += word + '&limit=15&namespace=0&format=json';

	$http.jsonp(wikiUrl).success(getArticles) ;
}

function getArticles(data)
{
	//Sucess GETTING URLs and names now!!

	// data[3][0];

	$("#randomArticle").css('margin-top', '1%');
	$("#box").css('margin-top', '1%');
	console.log(data[3].length);	
}

$(document).keyup(function (e) 
{
    if( $(".inputBox:focus") && (e.keyCode === 13)) 
    {
       getInput();
    }
 });
