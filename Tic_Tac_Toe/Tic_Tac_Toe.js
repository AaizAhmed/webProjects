
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
				
				else if (board[i][0] === player_sign) 
				{   return -10;   }
		    }

			// Checking vertical win condition
			else if ( board[0][i] === board[1][i] && board[1][i] === board[2][i] )
			{	
				if (board[i][0] === ai_sign)
				{   return 10;   }
				
				else if (board[i][0] === player_sign) 
				{   return -10;   }
			}
		}

		// Checking diagnol win conditions 
		if ( board[0][0] === board[1][1] && board[1][1] === board[2][2] )
		{
			if (board[0][0] === ai_sign)
			{   return 10;   }
			
			else if (board[0][0] === player_sign) 
			{   return -10;   }
		}

		if ( board[2][0] === board[1][1] && board[1][1] === board[0][2] )
		{	
			if (board[2][0] === ai_sign)
			{   return 10;   }
			
			else if (board[2][0] === player_sign) 
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
                    	test_board[row][col] = player_sign;

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
					test_board[row][col] = player_sign;

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

		console.log (best_move);
		return best_move;
	};

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

function play_game()
{
	id = event.target.id;

	display(id);

	var board_obj = new Tic_Tac_Toe_Board();
	var board = board_obj.getBoard();

	var game = new Game( board );
	
	var player = new Player('X', 0);

	var ai = new AI('O', 'X', 0, board);

	var my_board = [ ['X', 'O', 'X'], 
					 ['O', 'O', 'X'], 
					 ['-', '-', '-'] ];
	
	ai.findBestMove(my_board);

	var ai = new AI('X', 'O', 0, board);
	var my_board_2 = [ ['-', '-', 'X'], ['-', 'O', 'X'], ['O', '-', '-'] ];
	ai.findBestMove(my_board_2);

	var ai = new AI('O', 'X', 0, board);
	var my_board_3 = [ ['-', 'X', '-'], ['-', '-', 'X'], ['O', 'O', 'X'] ];
	ai.findBestMove(my_board_3);
}

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

   // Add the event trigger
   $('td').on( 'click', play_game );
 
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