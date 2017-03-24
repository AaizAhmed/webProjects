/*
    Simon: This file implements an Simon sound game in which 
           the player needs to repeat the sounds in the order
           they are played in.

    Author: Aaiz N Ahmed
    Date: 03-23-2017
*/

var audio_one = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio_two = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio_three = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio_four = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var game_on = false;
var game_started = false;
var strict_mode = false;
var score = 1;

var sounds = [];

// Initial actions during setting up the page.
$('.score').css('color', '#430710');
$('#start').css('background-color', 'red');

$('.switch-slot').on('click', function () 
{
	var is_on = $('#switch').hasClass('switch-on');

	if (!is_on)
	{
		$("#switch").addClass('switch-on');
		$('.score').css('color', '#DC0D29');
		game_on = true;   
    }
	else
	{   stop_game();    }
});

$('#start').on('click', function() 
{
	if (game_on)
	{
		start_game();	
	}
});

$('#strict').on('click', function() 
{
	var is_on = $('#mode').hasClass('red');

	if (!is_on && game_on)
	{
		strict_mode = true;
		$('#mode').addClass('red');
		$('#mode').css('background-color', '#FC0102');
	}
	else
	{
		strict_mode = false;
		$('#mode').removeClass('red');
		$('#mode').css('background-color', '#32050C');
	}
});

// Internal functions to play the game

function start_game() 
{
    // Clear the score and start from 0 again.
	score = 1;
	
	// Remove the unclickable class from the 4 color buttons.
	$('.red').removeClass('unclickable');
	$('.green').removeClass('unclickable');
	$('.yellow').removeClass('unclickable');
	$('.blue').removeClass('unclickable');
	
	// Add the clickable class tp play the game.
	$('.red').addClass('clickable');
	$('.green').addClass('clickable');
	$('.yellow').addClass('clickable');
	$('.blue').addClass('clickable');

   $('.box').on( 'click', play_game );

	blink_score(2);
	play_game();
}

function play_game()
{
	$('#blink_score').text( ('0' + score).slice(-2) );


	var random = Math.floor(Math.random() * 4);

	var color = get_color(random);

	$('#'+0).addClass('light');
	
	console.log(sounds.length);

	// Figure out a way to slow the things down else all
	// sounds will be played at once.


	// Get a new sound and add it to the array 
	var new_sound = get_sound(random);
	sounds.push(new_sound);

	for (var index = 0; index < sounds.length; index++) 
	{
		sounds[index].play();
	}

	var id = event.target.id;
	// Get sound based on ID then use the counter to 
	// retreive the sound from the array. if they are 
	// equal add 1 more on else repeat sounds.


}

function get_color(num)
{
	switch(num)
	{
		case 0: return 'red';
		case 1: return 'blue';
		case 2: return 'green';
		case 3: return 'yellow';
	}
}

function get_sound(num)
{
	switch(num)
	{
		case 0: return audio_one;
		case 1: return audio_two;
		case 2: return audio_three;
		case 3: return audio_four;
	}
}

// Function to make the text blink X number of times.
function blink_score(count_num) 
{
	for (var index = 0; index < count_num; index++) 
	{
		$('#blink_score').fadeOut(250);
		$('#blink_score').fadeIn(250);
	}
}

function stop_game() 
{
	// Set all the variables to their initial state.
	game_on = false;
	score = 0;
	strict_mode = false;

	// Set all the HTML elements to their initial state.
	$('#blink_score').text('--');
	$("#switch").removeClass('switch-on');
	$('.score').css('color', '#430710');
	$('#mode').removeClass('red');
	$('#mode').css('background-color', '#32050C');

	$('.red').removeClass('clickable');
	$('.green').removeClass('clickable');
	$('.yellow').removeClass('clickable');
	$('.blue').removeClass('clickable');

	$('.red').addClass('unclickable');
	$('.green').addClass('unclickable');
	$('.yellow').addClass('unclickable');
	$('.blue').addClass('unclickable');
}




