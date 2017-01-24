/*
	Aaiz N Ahmed
	January 23, 2017
	https://wind-bow.gomix.me/twitch-api
*/

function getData()
{
	var channelList = ["freecodecamp", "ESL_SC2", "gamingSC2", "cretetion", 
						"storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
					  

	for (i in channelList)
	{
		var statusUrl = 'https://wind-bow.gomix.me/twitch-api/streams/';
	    statusUrl += channelList[i] + '?callback=getStatus';


	    tag = document.createElement("script");
		tag.src = statusUrl;
		document.getElementsByTagName("head")[0].appendChild(tag);	
	}
}

function useChannelUrl(data)
{	
    if (data["status"] !== 404)
    {
		var divWrapper = document.createElement("div"); 
		var channelName = data["display_name"];	
		divWrapper.id = channelName;
		$(divWrapper).addClass('channel');
		$(divWrapper).addClass('row');

		var divLogo = document.createElement("div");
		$(divLogo).addClass('col-xs-2 dimen');
		var img = document.createElement("IMG");
	    img.setAttribute("src", data["logo"]);
	    img.setAttribute("width", "55");
	    img.setAttribute("width", "55");
		divLogo.append(img);

		var divName = document.createElement("div");
		$(divName).addClass('col-xs-2 dimen');
		var nameNode = document.createTextNode(channelName);
		divName.appendChild(nameNode);

		var divDesc = document.createElement("div");
		$(divDesc).addClass('col-xs-5 dimen');
		var descNode = document.createTextNode("Offline");
		divDesc.appendChild(descNode);

		divWrapper.appendChild(divLogo);
		divWrapper.appendChild(divName);
		divWrapper.appendChild(divDesc);

		$("#offline").append(divWrapper);
	
	}
	console.log(data);
}

function getStatus(data)
{
	if (data.stream == null)
	{
		var tmp = data["_links"]["channel"];
		var name = tmp.substring(38, tmp.length);

		var channelUrl = "https://wind-bow.gomix.me/twitch-api/channels/";
		channelUrl += name + '?callback=useChannelUrl';

		var tag = document.createElement("script");
		tag.src = channelUrl;
		document.getElementsByTagName("head")[0].appendChild(tag);	

	}
	else
	{
		var divWrapper = document.createElement("div"); 
		var channelName = data["stream"]["channel"]["display_name"];	
		divWrapper.id = channelName;
		$(divWrapper).addClass('channel');
		$(divWrapper).addClass('row');

		var divLogo = document.createElement("div");
		$(divLogo).addClass('col-xs-2 dimen');
		var img = document.createElement("IMG");
	    img.setAttribute("src", data["stream"]["channel"]["logo"]);
	    img.setAttribute("width", "55");
	    img.setAttribute("width", "55");
		divLogo.append(img);

		var divName = document.createElement("div");
		$(divName).addClass('col-xs-2 dimen');
		var nameNode = document.createTextNode(channelName);
		divName.appendChild(nameNode);

		var divDesc = document.createElement("div");
		$(divDesc).addClass('col-xs-5 dimen');
		var gameDesc = data["stream"]["channel"]["game"] + ': ' + data["stream"]["channel"]["status"];
		var descNode = document.createTextNode(gameDesc);
		divDesc.appendChild(descNode);

		divWrapper.appendChild(divLogo);
		divWrapper.appendChild(divName);
		divWrapper.appendChild(divDesc);

		$("#online").append(divWrapper);

		//console.log(data);
	}
}

getData();