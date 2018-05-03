/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


  
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  for (var col = 0; col < n; col++) {
    for (var row = 0; row < n; row++) {
      solution.togglePiece(row, col);
      if (solution.hasAnyRooksConflicts()) {
        //call recursively
        solution.togglePiece(row, col);
      }
    }
  }
  
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var position;

  //define recursive function
  var recursive = function(counter, board, lastRookPosition) {
    //if counter === 0
    //push board to solutionArray;
    if (counter === 0) {
      solutionCount++;
      return;
    }
  
    //loop through every square in board
    //place piece in square
    //call reccusive on new board (counter = counter - 1);
      
    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        // console.log("board before toggle" + JSON.stringify(board.rows()));
        position = row * n + col;
        if (position > lastRookPosition) {
          board.togglePiece(row, col);
          if (!board.hasAnyRooksConflicts()) {
            // console.log("board after toggle" + JSON.stringify(board.rows()));
            recursive(counter - 1, board, position);
          }
          board.togglePiece(row, col);                                 
        }
      }
    }
  };
  //Invoke the recursive function:
  recursive(n, board, -1);
  
  // console.log(JSON.stringify(solutionArray));

  // console.log(JSON.stringify(solutionArray));

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  var board = new Board({n: n});
  var position;
  var foundSolution = false;
  

  //define recursive function
  var recursive = function(counter, board, lastQueenPosition) {
    //if counter === 0
    //push board to solutionArray;
    if (counter === 0) {
      // solutionCount++;
      foundSolution = true;
      // console.log(JSON.stringify(board.rows()))
      solution = board.rows();
      return;
    }
  
    //loop through every square in board
    //place piece in square
    //call reccusive on new board (counter = counter - 1);
      
    for (var row = 0; row < n; row++) {
     
      for (var col = 0; col < n; col++) {
        // console.log("board before toggle" + JSON.stringify(board.rows()));
        position = row * n + col;
        var placedQueen = false;
        if (position > lastQueenPosition) {
          board.togglePiece(row, col);
          if (!board.hasAnyQueensConflicts()) {
            // console.log("board after toggle" + JSON.stringify(board.rows()));
            placedQueen = true;
            recursive(counter - 1, board, position);
            if (foundSolution === true) {
              return;
            }
          }
          board.togglePiece(row, col);                                 
        }
      }
    }
  };
  
  recursive(n, board, -1);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution || (new Board({n: n})).rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var position;

  //define recursive function
  var recursive = function(counter, board, lastQueenPosition) {
    //if counter === 0
    //push board to solutionArray;
    if (counter === 0) {
      solutionCount++;
      return;
    }
  
    //loop through every square in board
    //place piece in square
    //call reccusive on new board (counter = counter - 1);
    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        // console.log("board before toggle" + JSON.stringify(board.rows()));
        position = row * n + col;
        var placedQueen = false;
        if (position > lastQueenPosition) {
          board.togglePiece(row, col);
          if (!board.hasAnyQueensConflicts()) {
            // console.log("board after toggle" + JSON.stringify(board.rows()));
            placedQueen = true;
            recursive(counter - 1, board, position);
          }
          board.togglePiece(row, col);                                 
        }
      }
    }
  };
  //Invoke the recursive function:
  recursive(n, board, -1);
  
  

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
