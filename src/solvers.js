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


  
window.findNRooksSolution = function(n, r =0, c = 0) {
  var solution = new Board({n:n});
  solution.togglePiece(r, c);
  console.log("input for frindNrooks" + JSON.stringify(solution));
  for (var col = 0; col < n; col++) {
    for (var row = 0; row < n; row++) {
      if (row === r && col === c) {
        continue;
      }
      solution.togglePiece(row, col);
      if (solution.hasAnyRooksConflicts()) {
        //call recursively
        solution.togglePiece(row, col);
      }
    }
  };
  
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board;
  var allSolutions = {};
  
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      var solutionStringify = JSON.stringify(findNRooksSolution(n, row, col));
      if (allSolutions[solutionStringify] === undefined) {
        allSolutions[solutionStringify] = true;
        console.log("solution " + solutionStringify);
        solutionCount++;
      }
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
