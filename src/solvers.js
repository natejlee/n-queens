/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space.)
// Take a look at solversSpec.js to see what the tests are expecting


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other.
window.findNRooksSolution = function(n) {
  // var board = new Board({n:n});
  // var solution = undefined;

  // var recurse = function (rowIndex, colIndex){
  //   board.togglePiece(rowIndex, colIndex);
  //   if(board.hasRowConflictAt(rowIndex)|| board.hasColConflictAt(colIndex)){
  //     board.togglePiece(rowIndex, colIndex);
  //   }
  //   if(board.hasRowConflictAt(rowIndex) && rowIndex<board.n()){
  //     recurse( rowIndex--, bla bla);
  //   }

  //   if(board.hasRowConflictAt(rowIndex) && rowIndex<board.n()){
  //     recurse( rowIndex--, bla bla);
  //   }
  //   // we can start from next col to save time
  //   //



  //   return;
  // };

  // return solution;

  var board = new Board({n:n});
  var solution = undefined; //fixme

  for(var rowIndex = 0; rowIndex < board.n(); rowIndex++){
    for(var colIndex = 0; colIndex < board.n(); colIndex++){
      board.togglePiece(rowIndex, colIndex);
      if(board.hasRowConflictAt(rowIndex) || board.hasColConflictAt(colIndex)){
        board.togglePiece(rowIndex, colIndex);
      }
    }
  }
  solution = board.allRows();
  return solution;
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  // var board = new Board({n:n});
  // var solutionCount = undefined; //fixme
  // make recursion function takes in rowindex and colindex
  //   - toggle the first piece
  //   - if there is a conflict at R-C change the toggle back
  //   - for loop iterating through 0-n


  //   - if we are greater than nth return;

  var board = new Board({n:n});
  var solutions = 0;

  var recurse = function(rowIndex){
    if(rowIndex === n ){
      solutions++;
      return;
    };

    for(var colIndex = 0 ; colIndex < n ; colIndex++){

      board.togglePiece(rowIndex, colIndex);

      if( !board.hasAnyRooksConflicts()){
        recurse(rowIndex + 1);
      }
        board.togglePiece(rowIndex, colIndex);

    }

  };

  recurse(0);
  return solutions;

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // solutionCount.push(board.allRows());
  // return solutionCount.length;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solutions = 0;

  var recurse = function(rowIndex){
    if(rowIndex === n ){
      solutions = board.allRows();
      return;
    };

    for(var colIndex = 0 ; colIndex < n ; colIndex++){

      board.togglePiece(rowIndex, colIndex);

      if( !board.hasAnyQueensConflicts()){
        recurse(rowIndex + 1);
      }
        board.togglePiece(rowIndex, colIndex);

    }

  };

  recurse(0);
  solutions = board.allRows();
  return solutions;


//   var board = new Board({n:n});
//   var solutions = board.allRows();

// // debugger;
//   var recurse = function(rowIndex){

//       if(rowIndex === n ){
//         solutions = board.allRows();
//         return;
//       }
//     for(var colIndex = 0 ; colIndex < n ; colIndex++){

//       board.togglePiece(rowIndex, colIndex);

//       if( !board.hasAnyQueensConflicts()){
//         recurse(rowIndex + 1);
//       }
//       if(board.hasAnyQueensConflicts()){
//         board.togglePiece(rowIndex, colIndex);
//       }
//       // if(board.hasAnyQueensConflicts() && rowIndex === n - 1){
//       //   recurse(rowIndex + 1);
//       // }

//     }

//   };

//   recurse(0);
//   // solutions = board.allRows();
//   return solutions;

};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var recurse = function(rowIndex){
    if(rowIndex === n ){
      solutionCount++;
      return;
    }

    for(var colIndex = 0 ; colIndex < n ; colIndex++){

      board.togglePiece(rowIndex, colIndex);

      if( !board.hasAnyQueensConflicts() ){
        recurse(rowIndex + 1);
      }

      board.togglePiece(rowIndex, colIndex);

    }

  };

  recurse(0);
  return solutionCount;
};
