
var board = new Array(3);
var playerSign = '';
var computerSign = '';
var turn = 0;
var playerTurn = false;

/*
	http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/
	http://neverstopbuilding.com/minimax
*/

function addBoard(sign)
{
   $("#ask").css('display', 'none');
   $("#board").css('display', 'block');

   $("#player").text("Player: |");
   $("#computer").text("Computer: ");

   if (sign === 'X')
   {
      playerSign = 'X';
   	  computerSign = 'O';
   	  playerTurn = true;
   	  $("#turn").text("Your Turn!");
   }
   else 
   {
      playerSign = 'O';
      computerSign = 'X';
      $("#turn").text("Computer's Turn");
   }

   for (var i = 0; i < board.length; i++) 
   {
      board[i] = new Array(3);
   }
}

function checkWin()
{
	for (var i = 0; i < 3; i++) 
	{
		// Checking horizontal win condition
		if ( board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X')
		{	return true;	}

		else if ( board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O')
		{	return true;	}

		// Checking vertical win condition
		else if ( board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X')
		{	return true;	}

		else if ( board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O')
		{	return true;	}
	}

	// Checking diagnol win conditions 
	if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X')
	{	return true;	}

	if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')
	{	return true;	}

	if (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X')
	{	return true;	}

	if (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O')
	{	return true;	}

    return false;
}

// Delay in milliseconds
function sleep(delay) 
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function restart()
{
	turn = 0;
	board = new Array(3);

	for (var row = 0; row < 3; row++) 
	{
	   // Resetting board
       board[row] = new Array(3);

		for (var col = 0; col < 3; col++)
		{
			var id = '#' + row + col;
			$(id).text('');
		}
	}

	if(playerSign === 'X')
	{
	   playerTurn = true;
	}
	else if (playerSign === 'O')
	{
	   playerTurn = false;	
	}
}

function printBoard()
{
	var str = '';

	for (var row = 0; row < 3; row++) 
	{
		for (var col = 0; col < 3; col++)
		{
			if ( board[row][col] === undefined )
			{
				str += "- ";	
			}
			else
			{
				str += board[row][col] + " ";
			}
		}

		str += "\n";
	}

	console.log(str);
}


function playGame(id)
{
   var row = parseInt( id[0] );
   var col = parseInt( id[1] );    

   // Total number of turns in a game are 9 ==> 3*3
   if (turn < 9)
   {
	if (playerTurn === true)
	  {
	     if ( board[row][col] === undefined)
	     {
	        board[row][col] = playerSign;
	        $('#'+id).text(playerSign); 
	        // printBoard();              	

			 if ( checkWin() === true)
			 {
			 	$("#turn").text("You Won!!");
			 	restart();			 	
			 }
			 else
			 {
			 	playerTurn = false;
		        turn++;                   
		        $("#turn").text("Computer's Turn");
	         }       
	     }	   		
	  }
	  
	  else 
	  {
	     if (board[row][col] === undefined)
	     {
	        board[row][col] = computerSign;
	        $('#'+id).text(computerSign); 
	        // printBoard();   

	        if ( checkWin() === true)
	        {
	        	$("#turn").text("Computer Won!");
	        	restart();
	        }           	
	        else
	        {
	        	playerTurn = true;
	        	turn++;       
	        	$("#turn").text("Your Turn!"); 
	        }  
	     }
	  }  
   }   
}