
var board = new Array(3);
var playerSign = '';
var computerSign = '';
var turn = 0;
var playerTurn = false;

/*
	http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/
	http://neverstopbuilding.com/minimax
	https://mostafa-samir.github.io/Tic-Tac-Toe-AI/
*/

var Tic_Tac_Toe_Board = function()
{
	var board = [ ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'] ];

	this.printBoard = function()
	{	var str = '';

		for (var row = 0; row < 3; row++) 
		{	for (var col = 0; col < 3; col++)
			{
				str += board[row][col];
			}
			str += "\n";
		}
		console.log(str);
	};

	this.makeMove = function (row_col, sign) 
	{
		var row = row_col[0];
		var col = row_col[1];

		if (board[row][col] === '-')
		{
			board[row][col] = sign;
		} 	
	};

	this.getBoard = function()
	{
		return board;
	};
};

var Player = function (sign, turn)
{
	var player_sign = sign;
	var player_turn = turn;

	this.getSign = function() {   return player_sign;   };
	this.getTurn = function() {   return player_turn;   };
	
};

var AI = function(a_sign, p_sign, turn, board)
{
	var ai_sign = a_sign;
	var player_sign = p_sign;
	var ai_turn = turn;
	var current_board = board;

	var row_col = {   row: 0, 
					  col: 0   
				  };

	this.getSign = function() {   return ai_sign;   };
	this.getTurn = function() {   return ai_turn;   };


    function evaluate() 
    {
    	var board = current_board;

    	for (var i = 0; i < 3; i++) 
		{
			// Checking horizontal win condition
			if ( board[i][0] === board[i][1] && board[i][1] === board[i][2] )
			{	
				// console.log("In horizontal " + board[i][1]);

				if (board[i][0] === ai_sign)
				{   
					console.log("In horizontal " + board[i][0]);
					return +10;   }
				
				else if (board[i][0] === player_sign) 
				{   
					console.log("In horizontal " + board[i][0]]);
					return -10;   }
		    }

			// Checking vertical win condition
			else if ( board[0][i] === board[1][i] && board[1][i] === board[2][i] )
			{	

				if (board[i][0] === ai_sign)
				{   
				console.log("In vertical " + board[0][i]);
					return +10;   }
				
				else if (board[i][0] === player_sign) 
				{   
				console.log("In vertical " + board[0][i]);

					return -10;   }
			}
		}

		// Checking diagnol win conditions 
		if (board[0][0] === board[1][1] && board[1][1] === board[2][2] )
		{

			if (board[0][0] === ai_sign)
			{   
			console.log("In diagnol 1 " + board[1][1]);
				return +10;   }
			
			else if (board[0][0] === player_sign) 
			{   
			console.log("In diagnol 1 " + board[1][1]);

				return -10;   }	
		}

		if (board[2][0] === board[1][1] && board[1][1] === board[0][2] )
		{	
			console.log("In diagnol 2 " + board[1][1]);

			if (board[2][0] === ai_sign)
			{   
			console.log("In diagnol 1 " + board[1][1]);
				return +10;   }
			
			else if (board[2][0] === player_sign) 
			{   
			console.log("In diagnol 1 " + board[1][1]);
				return -10;   }
		}

		// A draw
		return 0;
    }

	function isOver(test_board) 
	{
		for (var row = 0; row < 3; row++) 
		{	for (var col = 0; col < 3; col++)
			{
				if (test_board[row][col] === '-')
				{
					// console.log("Is over " + test_board[row][col]);

					return false;
				}
			}
		}
		return true;
	}

	function min_max(test_board, depth, isMax)
	{
		var score = evaluate(test_board);

		// If Maximizer has won the game return evaluated score
		if (score === 10)
		{   return score;   }

		// If Minimizer has won the game return evaluated score
		if (score === 10)
		{   return score;   }

		// If there are no more moves and no winner then it is a tie
		if ( isOver(test_board) === true)
		{   return 0;   }

		// If this maximizer's move
		if (isMax)
		{
			var best = -1000;

			// Traverse all cells
			for (var row = 0; row < 3; row++) 
			{	for (var col = 0; col < 3; col++)
				{
					if (test_board[row][col] === '-')
					{
                    	// console.log("Before: " + test_board[row][col])

						// Make the move
                    	test_board[row][col] = ai_sign;

                    	// console.log("After: " + test_board[row][col])

                    	// Call minimax recursively and choose the maximum value
                    	best = Math.max( best, min_max(test_board, depth+1, !isMax) );

                    	// Undo the move
                    	test_board[row][col] = '-';
					}
				}
			}

			return best;
		}

		// If this minimizer's move
		else
		{
			var best = 1000;

			// Traverse all cells
			for (var row = 0; row < 3; row++) 
			{	for (var col = 0; col < 3; col++)
				{
					if (test_board[row][col] === '-')
					{
						// Make the move
                    	test_board[row][col] = player_sign;

                    	// Call minimax recursively and choose the maximum value
                    	best = Math.min( best, min_max(test_board, depth+1, !isMax) );

                    	// Undo the move
                    	test_board[row][col] = '-';
					}
				}
			}

			return best;
		}
	}

	this.findBestMove = function(test_board)
	{
		var best_value = -1000;
		
		var best_move = [ ];

		// Traverse all cells, evalutae minimax function for
	    // all empty cells. And return the cell with optimal value.
		for (var row = 0; row < 3; row++) 
		{	for (var col = 0; col < 3; col++)
			{
				if (test_board[row][col] === '-')
				{
					test_board[row][col] = player_sign;

					var move_val = min_max(test_board, 0, false);

						
					console.log("Move val: " + move_val);

					test_board[row][col] = '-';

					if (move_val > best_value)
					{
						best_move.push(row);
						best_move.push(col);
						best_value = move_val;
					}
				}
			}
		}

		console.log (best_move);
		return best_move;
	}




};   // End of AI Class/Object. 

var Game = function (board) 
{
	var game_board = board;

	this.isOver = function (test_board) 
	{
		for (var row = 0; row < 3; row++) 
		{	for (var col = 0; col < 3; col++)
			{
				if (test_board[row][col] === '-')
				{
					return false;
				}
			}
		}
		return true;
	};
};

function main()
{
	var board_obj = new Tic_Tac_Toe_Board();
	var board = board_obj.getBoard();

	var game = new Game( board );
	
	var player = new Player('X', 0);
	var ai = new AI('O', 'X', 0, board);

	var my_board = [ ['X', 'O', 'X'], ['O', 'O', 'X'], ['-', '-', '-'] ];

	ai.findBestMove(my_board);
	
	// console.log( ai.evaluate() );

}

main();

function addBoard(sign)
{
/*
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
 */
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