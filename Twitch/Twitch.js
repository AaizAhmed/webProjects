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
	var channelName = data["name"] + "<br>";	
	$("#nameOff").append(channelName);	

	var img = '<img src="' + data["logo"] + '" width="50px" height="50px"> <br>';
	$("#logoOff").append(img);

	$("#statusOff").append("Offline <br>");

	//console.log(data);
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
		var channelName = data["stream"]["channel"]["display_name"];
		$("#nameOn").append(channelName);

		var logo = data["stream"]["channel"]["logo"];
		var img = '<img src="' + logo + '" width="50px" height="50px">';
		$("#logoOn").append(img);

		var gameDesc = data["stream"]["channel"]["game"] + ': ' + data["stream"]["channel"]["status"];
		$("#statusOn").append(gameDesc);

		//console.log(data);
	}
}

getData();