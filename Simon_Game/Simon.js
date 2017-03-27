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

// $('.score').text( ('0' + score).slice(-2) );

var sounds = [];
var lights = [];

var flash_done = false;

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
	var is_on = $('#mode').hasClass('led-on');

	if (!is_on && game_on)
	{
		strict_mode = true;
		$('#mode').addClass('led-on');
	}
	else
	{
		strict_mode = false;
		$('#mode').removeClass('led-on');
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

    console.log("Before adding a sound");
    
    add_sound();

    console.log("After adding a sound");

    $('.box').on( 'click', play_game );

}

function animate(sequence) 
{
	var index = 0;
	var interval = setInterval(function() 
	{
		var sound = get_sound( sequence[index] );
		sound.play();

		lightUp( sequence[index] );

		index++;
		if (index >= sequence.length) 
		{
			clearInterval(interval);
		}
	}, 800);
}

function lightUp(tile_num) 
{
	var $tile = $('#'+tile_num).addClass('light');
	
	window.setTimeout(function() 
	{
		$tile.removeClass('light');
	}, 600);
}

function add_sound()
{
	var random = Math.floor(Math.random() * 4);

	get_sound(random).play();
	sounds.push(random);

    lightUp(random);

}

var current_index = 0;

function play_game()
{

	// console.log( sounds );

	var id = event.target.id;

	// Get sound based on ID then use the counter to 
	// retreive the sound from the array. if they are 
	// equal add 1 more on else repeat sounds.

    console.log("ID is: " + id);
	console.log('This sounds is: ' + sounds[current_index] );
    console.log('Current Index is: ' + current_index );

	// Check if the ID of the box equals the corresponding sound
	// in the array. 
    if ( parseInt(id) === sounds[current_index] )
    {
    	console.log("Yes");
    	current_index++;

    	// Player has correctly entered the sequence, so add a 
    	// new sound.
    	if (current_index === sounds.length)
    	{
    		animate(sounds);

    		// Wait for animation to finish then add a new sound
    		// Wait for (Total sounds + 1) * Time for a sound i.e. 800 ms
    		setTimeout(function() 
			{
    			add_sound();

    		}, (sounds.length + 1)*800);

    		// Reset the counter to check the sequence again.
    		current_index = 0;
    	}
    }
    else
    {
    	// Play sounds again and reset the counter
    	flashMessage('!!', 3);

    	setTimeout(function() 
		{
	    	animate(sounds);

		}, 1000);

    	current_index = 0;
    }

	

}

function flashMessage(msg,times)
{
  $('.score').text(msg);
  var lf = function()
  {
	$('.score').css('color', '#430710');
    toHndlFl = setTimeout(function()
    {
		$('.score').css('color', '#DC0D29');
    },250);
  };

  var cnt = 0;
  lf();
  flHndl = setInterval(function()
  {
	// console.log("Print it");

    lf();
    cnt++;
    if(cnt === times)
    {
      clearInterval(flHndl);
      clearInterval(toHndlFl);
      
      // console.log("Done flashing");
      return true;
    }
  },500);

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

function stop_game() 
{
	// Set all the variables to their initial state.
	game_on = false;
	score = 1;
	strict_mode = false;
	sounds = [];
	lights = [];

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

// Delay in milliseconds
function sleep(delay) 
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


