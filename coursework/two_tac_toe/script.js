// |   |   |   |
// |---|---|---|
// |   |   |   |
// |   |   |   |
// |   |   |   |

// # Tic-tac-toe

// Use the table above as the game board. The state of the game is represented by an array of arrays:

// ```
// let state = [
//   [ 'x', 'o', null ],
//   [ 'x', 'x', 'o' ],
//   [ 'o', 'x', null ]
// ];
// ```

// - Write the `populate` function to populate the table according to the game state. 
// - Write the `nextPlayer` function to determine which player should go next based on the state of the game, assuming that "x" always goes first. Return "x" or "o".
// - Write the `findWinner` function to determine whether there is a winner in the current game. Return "x" or "o" if there is a winner, and `null` if there is not. 
// - Imagine a 4 x 4 board where a player wins by connecting three positions -- how would your solutions change?
// - How would your solutions change to adapt to arbitrary board sizes and arbitrary requirements for the number of positions that must connect? For example, consider an 8x8 board where four of a player's pieces must connect.


let board = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

populate(board);

function populate (board) {
  for (var i = 0; i < board.length; i++) {
    var rowSelector = '#row-' + i;
    var row = document.querySelector(rowSelector);  
    board[i].forEach(function(value) {
      var value = value || '.';
      var span = document.createElement('span');
      var text = document.createTextNode(value);
      span.appendChild(text);
      row.appendChild(span); 
    });
  }
}

function nextPlayer (board) {
  
}

function findWinner (board) {
  
}


