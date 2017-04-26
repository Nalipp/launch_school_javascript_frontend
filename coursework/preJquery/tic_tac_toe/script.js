let board = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

let boardReset = board;

let player = 'x';

function populate (board, player) {
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

  document.addEventListener('click', function(event) {
    player = nextPlayer(board, player);
    var text = 'Player turn : ' + player;
    document.querySelector('#player-turn').innerText = text;

    var target = event.target;          
    if (target.tagName === 'SPAN') { 
      target.innerText = nextPlayer(board, player);
    }

    findWinner(board, player);
  });
}


function nextPlayer (board, player) {
  player = player === 'x' ? 'o' : 'x';  
  return player;
}


function findWinner (board, player) {
  var rows = document.querySelectorAll('.row');
  var resultArr = [];
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].children.length; j++) {
      resultArr.push(rows[i].children[j].innerText);
    }
  }
  var winner = scanArrForWinner(resultArr);
  if (winner) {
    alert(winner + ' is the winner!')
    resetGame();
  };
  if (resultArr.indexOf('.') === -1) {
    alert('no winner');
    resetGame();
  }
}


function resetGame() {
  document.querySelector('#player-turn').innerText = '';
  var allSpans = document.querySelectorAll('span');

  for (var i =0; i < allSpans.length; i++) { 
    allSpans[i].remove();
  }
  populate(boardReset, 'x');
}


function scanArrForWinner(resultArr) {
  var oWins;
  var xWins;
  var winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], 
                     [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];            

  for (var i = 0; i < winningLines.length; i++) {
    oWins = winningLines[i].every(function(value) {
      return resultArr[value - 1] === 'o';
    });
    xWins = winningLines[i].every(function(value) {
      return resultArr[value - 1] === 'x';
    });
    if (oWins) return 'o';
    if (xWins) return 'x';
  }
  return null;
}

populate(board, player);


