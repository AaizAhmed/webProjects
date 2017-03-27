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

var error_sound =  new Audio('https://raw.githubusercontent.com/AaizAhmed/Images/master/Buzz.wav');
var victory_sound = new Audio('https://raw.githubusercontent.com/AaizAhmed/Images/master/Cheering.wav');

var game_on = false;
var game_started = false;
var strict_mode = false;

var score = 1;
var current_index = 0;
var animation_timeout;

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
    clear_all();
	
	// Remove the unclickable class from the 4 color buttons.
	$('.box').removeClass('unclickable').addClass('clickable');

    add_sound();

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
	}, 500);
}

function add_sound()
{
	var random = Math.floor(Math.random() * 4);

	get_sound(random).play();
	sounds.push(random);

    lightUp(random);
}

function play_game()
{
	var id = parseInt( event.target.id );

	get_sound(id).play();
	lightUp(id);

	// Check if the ID of the box equals the corresponding sound
	// in the array. 
    if (id === sounds[current_index])
    {
    	current_index++;

    	// Player has correctly entered the sequence, so add a 
    	// new sound. Player has won if current_index is 20
    	if (current_index === 20)
    	{
    		victory_msg();
    	}
    	else if (current_index === sounds.length)
    	{
			$('.box').removeClass('clickable').addClass('unclickable');
    		
    		setTimeout( function()
    		{   
    			animate(sounds);
    			score++;
				$('.score').text( ('0' + score).slice(-2) );   
    		}, 1000);
    		

    		// Wait for animation to finish then add a new sound
    		// Wait for (Total sounds + 1) * Time for a sound i.e. 800 ms
    		animation_timeout = setTimeout(function() 
			{
    			add_sound();
				$('.box').removeClass('unclickable').addClass('clickable');

    		}, (sounds.length + 2)*800);

    		// Reset the counter to check the sequence again.
    		current_index = 0;
    	}
    }
    else
    {
		$('.score').text('!!');
		error_sound.play();

		setTimeout( function()
		{
			if (strict_mode)
	    	{
	    		clear_all();
	    		add_sound();
	    	}
	    	else
    		{
				$('.box').removeClass('clickable').addClass('unclickable');
    			animate(sounds);

    			animation_timeout = setTimeout(function() 
				{
					$('.box').removeClass('unclickable').addClass('clickable');

    			}, (sounds.length + 2)*800);

				$('.score').text( ('0' + score).slice(-2) );
	    		current_index = 0;
	    	}

		}, 2200);
    	
    }
}

function victory_msg()
{
	victory_sound.play();
	$('.score').css('width', '75px');
	$('.score').text('You Won');

	setTimeout( function()
	{
		clear_all();
		$('.score').css('width', '50px');
		add_sound();
	
	}, 5000);
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

function clear_all()
{
	score = 1;
	$('.score').text( ('0' + score).slice(-2) );
	sounds = [];
	current_index = 0;

	clearTimeout(animation_timeout);
}

function stop_game() 
{
	// Set all the variables to their initial state.
	game_on = false;
	strict_mode = false;
	clear_all();

	// Set all the HTML elements to their initial state.
	$('#blink_score').text('--');
	$("#switch").removeClass('switch-on');
	$('.score').css('color', '#430710');
	$('#mode').removeClass('red');
	$('#mode').css('background-color', '#32050C');

	$('.box').removeClass('clickable').addClass('unclickable');
}

// Delay in milliseconds
function sleep(delay) 
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


