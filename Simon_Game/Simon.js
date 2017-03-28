/*
    Simon: This file implements an Simon sound game in which 
           the player needs to repeat the sounds in the order
           they are played in.

    http://markdalgleish.com/2011/03/self-executing-anonymous-functions/
    https://github.com/kellyk/javascript-simon
    http://codepen.io/BenLBlood/pen/LGLEoJ
    https://www.w3.org/wiki/JavaScript_best_practices

    Author: Aaiz N Ahmed
    Date: 03-23-2017
*/

( function() {

var error_sound =  new Audio('https://raw.githubusercontent.com/AaizAhmed/Images/master/Buzz.wav');
var victory_sound = new Audio('https://raw.githubusercontent.com/AaizAhmed/Images/master/Cheering.wav');

var game_on = false;
var game_started = false;
var strict_mode = false;

var player_seq = [];

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
   {  stop_game();   }
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

   console.log(game_on);

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

var Simon = function()
{
   var audio_one = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
   var audio_two = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
   var audio_three = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
   var audio_four = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

   var score = 1;
   var current_index = 0;
   var animation_timeout;

   var sounds = new Array();

   this.get_sound = function (num)
   {
      switch(num)
      {
         case 0: return audio_one;
         case 1: return audio_two;
         case 2: return audio_three;
         case 3: return audio_four;
      }
   };

   this.get_current_index = function()
   {  return   current_index;   };

   this.increment_index = function()
   {  current_index++;  };

   this.reset_index = function()
   {
      current_index = 0;
   };

   this.get_score = function()
   {  return   score;   };

   this.increment_score = function()
   {  score++;   };

   this.reset_score = function()
   {
      score = 1;
   };

   this.set_timeout = function(timer)
   {
      animation_timeout = timer;
   };

   this.get_timer = function()
   {  return   animation_timeout;   };

   this.get_sequence = function()
   {
      return sounds;
   };

   function reset_sequence()
   {
      var length = sounds.length;
      for (var index = 0; index < length; index++) 
      {
         sounds.pop();
      }
   }

   this.add_sound = function(number)
   {
         this.get_sound(number).play();
         sounds.push(number);
   };

   this.clear_all = function()
   {
      this.reset_score();
      $('.score').text( ('0' + score).slice(-2) );
      
      reset_sequence();
      this.reset_index();

      clearTimeout( this.get_timer() );
   };
};

var simon = new Simon();

// Internal functions to play the game
function start_game() 
{
   // Clear the score and start from 0 again.
   simon.clear_all();
   clearTimeout( simon.get_timer() );

   console.log( simon.get_sequence() );
   console.log("current_index is: " + simon.get_current_index() );
   console.log('Total Sounds are: ' + simon.get_sequence().length );

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
      var sound = simon.get_sound( sequence[index] );
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
   var box = $('#'+tile_num).addClass('light');

   window.setTimeout(function() 
   {
      box.removeClass('light');
   }, 500);
}

function add_sound()
{
   var random = Math.floor(Math.random() * 4);
   simon.add_sound(random);
   lightUp(random);
}

var interval_ID;

function confirm_seq()
{
   var total = 0; 
   for (var i = 0; i < simon.get_sequence().length; i++) 
   {
      if ( player_seq[i] === simon.get_sequence()[i] )
      {
         total++;
      }
      else
      {
         return false;
      }
   }

   if ( total === simon.get_sequence.length - 1)
   {
      console.log("Total is: " + total);
      return true;
   }

   if ( total === 19)
   {
      victory_msg();
   }
}

function play_game()
{
   clearTimeout(interval_ID);

   var id = parseInt( event.target.id );
   simon.get_sound(id).play();
   lightUp(id);

   var time_interval;
   simon.set_timeout( time_interval );

   player_seq.push(id);

   console.log("ID is: " + id); 
   console.log('Current Sound number is: ' + simon.get_sequence()[simon.get_current_index()] );

   interval_ID = setTimeout( function () 
   {
      var result = confirm_seq();

      if ( result === true )
      {
         $('.box').removeClass('clickable').addClass('unclickable');

         setTimeout( function()
         {   
            simon.increment_score();
            animate( simon.get_sequence() );

            console.log( simon.get_score() );

            $('.score').text( ('0' + simon.get_score()).slice(-2) );   
         }, 1000);

         // Wait for animation to finish then add a new sound
         // Wait for (Total sounds + 1) * Time for a sound i.e. 800 ms
         time_interval = setTimeout(function() 
         {
            add_sound();
            $('.box').removeClass('unclickable').addClass('clickable');

         }, (simon.get_sequence().length + 2)*800);
      }
      else 
      {
         $('.score').text('!!');
         error_sound.play();

         setTimeout( function()
         {
            if (strict_mode)
            {
               simon.clear_all();
               add_sound();
            }
            else
            {
               $('.box').removeClass('clickable').addClass('unclickable');
               animate( simon.get_sequence() );

               time_intervals = setTimeout(function() 
               {
                  $('.box').removeClass('unclickable').addClass('clickable');

               }, (simon.get_sequence().length + 2)*800);

               $('.score').text( ('0' + simon.get_score()).slice(-2) );
            }

         }, 2200);
      }

   }, 3000);
   
 }

 function victory_msg()
 {
   victory_sound.play();
   $('.score').css('width', '75px');
   $('.score').text('You Won');

   setTimeout( function()
   {
      simon.clear_all();
      $('.score').css('width', '50px');
      add_sound();

   }, 5000);
}

function stop_game() 
{
   // Set all the variables to their initial state.
   game_on = false;
   strict_mode = false;
   simon.clear_all();

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

})();
