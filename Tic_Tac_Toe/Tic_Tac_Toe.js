


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

	this.makeMove = function (row, col, sign) 
	{
		if (board[row][col] === '-')
		{
			board[row][col] = sign;
			return true;
		} 	

		return false;
	};

	this.getBoard = function()
	{
		return board;
	};

	this.isDraw = function (test_board) 
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

	this.checkWin = function(test_board)
	{
		var board = test_board;

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
	};

};

var Player = function (sign, turn)
{
	var player_sign = sign;
	var player_turn = turn;

	this.getSign = function() {   return player_sign;   };
	this.getTurn = function() {   return player_turn;   };
	
};

var AI = function()
{
	var ai_sign;
	var opponent_sign;
	var ai_turn;

	var row_col = {   row: 0, 
					  col: 0   
				  };

	this.getSign = function() {   return ai_sign;   };
	this.getTurn = function() {   return ai_turn;   };

	this.setSign = function(ai_sign) {   ai_sign = a_sign;   }
	this.setTurn = function(turn) {   ai_turn = turn;   }


    function evaluate(evaluate_board, depth) 
    {
    	var board = evaluate_board;

    	for (var i = 0; i < 3; i++) 
		{
			// Checking horizontal win condition
			if ( board[i][0] === board[i][1] && board[i][1] === board[i][2] )
			{	
				if (board[i][0] === ai_sign)
				{   return 10;   }
				
				else if (board[i][0] === opponent_sign) 
				{   return -10;   }
		    }

			// Checking vertical win condition
			else if ( board[0][i] === board[1][i] && board[1][i] === board[2][i] )
			{	
				if (board[i][0] === ai_sign)
				{   return 10;   }
				
				else if (board[i][0] === opponent_sign) 
				{   return -10;   }
			}
		}

		// Checking diagnol win conditions 
		if ( board[0][0] === board[1][1] && board[1][1] === board[2][2] )
		{
			if (board[0][0] === ai_sign)
			{   return 10;   }
			
			else if (board[0][0] === opponent_sign) 
			{   return -10;   }
		}

		if ( board[2][0] === board[1][1] && board[1][1] === board[0][2] )
		{	
			if (board[2][0] === ai_sign)
			{   return 10;   }
			
			else if (board[2][0] === opponent_sign) 
			{   return -10;   }
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
				{   return false;   }
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
		if (score === -10)
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
						// Make the move
                    	test_board[row][col] = ai_sign;

                    	// console.log("After: " + test_board[row][col])

                    	// Call minimax recursively and choose the maximum value
                    	best = Math.max( best, min_max(test_board, depth++, !isMax) );

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
                    	test_board[row][col] = opponent_sign;

                    	// Call minimax recursively and choose the maximum value
                    	best = Math.min( best, min_max(test_board, depth++, !isMax) );

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
		
		var best_move = row_col;
		// var best_move = [ ];

		// Traverse all cells, evalutae minimax function for
	    // all empty cells. And return the cell with optimal value.
		for (var row = 0; row < 3; row++) 
		{	for (var col = 0; col < 3; col++)
			{
				if (test_board[row][col] === '-')
				{
					test_board[row][col] = opponent_sign;

					var move_val = min_max(test_board, 0, false);
						
					// Undo the move
					test_board[row][col] = '-';

					if (move_val > best_value)
					{
						best_move.row = row;
						best_move.col = col;

						// best_move.push(row);
						// best_move.push(col);

						best_value = move_val;
					}
				}
			}
		}

		// console.log (best_move);
		return best_move;
	};

};   // End of AI Class/Object. 

var Game = function (board) 
{
	var game_board = board;

	
};

var board = new Array(3);
var playerSign = '';
var computerSign = '';
var moves = 0;
var playerTurn = false;

var board_obj = new Tic_Tac_Toe_Board();
var board = board_obj.getBoard();

var game = new Game( board );

var player = new Player();
var ai = new AI();

function play_game()
{
	id = event.target.id;

	var row = parseInt( id[0] );
    var col = parseInt( id[1] );  

	if (moves < 9)
	{
		console.log(moves);

		if (playerTurn)
		{
            if ( !isNaN(row) && !isNaN(col) )
            {
				var move_made = board_obj.makeMove(row, col, playerSign);	

				if (move_made)
				{
					$('#'+id).text(playerSign);
		        	board_obj.printBoard();

		        	playerTurn = false;
		            moves++;
		            $("#turn").text("Computer's Turn");
				}

            	if ( board_obj.checkWin( board_obj.getBoard() ) )
            	{
            		$("#turn").text("You Won!!");
            		moves = 9;
            	}
            }
		}
		
		var player_won = board_obj.checkWin( board_obj.getBoard() );

		if ( !playerTurn && !player_won )
		{
			var row_col = ai.findBestMove(board);
			var id = '#' + row_col.row + row_col.col;

			board_obj.makeMove(row_col.row, row_col.col, computerSign);
			$(id).text(computerSign);
			board_obj.printBoard();

			if ( board_obj.checkWin( board_obj.getBoard() ) )
        	{
        		$("#turn").text("Computer Won!");
        		moves = 9;
        	}
        	else
        	{
				playerTurn = true;
				moves++;
				$("#turn").text("Your Turn!"); 
			}
		}
	}

	if ( board_obj.isDraw( board_obj.getBoard() ) )
	{
		$("#turn").text("It was a Draw");
	}
}

function addBoard(sign)
{

   $("#ask").css('display', 'none');
   $("#board").css('display', 'block');

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

   $("#player").text("Player: " + playerSign + " | ");
   $("#computer").text("Computer: " + computerSign);

   // Add the event trigger
   $('td').on( 'click', play_game );

   if (playerTurn === false)
   {
   		play_game();
   }
 
}

function restart()
{
	
}

function display(id)
{
   var row = parseInt( id[0] );
   var col = parseInt( id[1] );    

   console.log(row + " " + col);
}