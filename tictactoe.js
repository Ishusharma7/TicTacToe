
function rst(){
    location.reload();
}
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
let win = document.getElementById('win')

  let currentPlayer = 'X';
  
  function makeMove(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      let cell = document.getElementsByClassName('box')[row * 3 + col];
      cell.innerText = currentPlayer;
      cell.style.color = 'aquamarine';
      cell.style.fontSize = '3em';
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
      checkWin();
    
    }
  }
  
  function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
       win.innerHTML = `${(board[i][0])} has won `;
       return currentPlayer = '';
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        win.innerHTML = `${(board[0][i])} has won `;
        return  currentPlayer = '';
      }
    }


    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        win.innerHTML = `${(board[0][0])} has won `;
        return  currentPlayer = '';
    }
    
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[2][0] === board[1][1] ){
        win.innerHTML = `${(board[0][2])} has won `;
        return  currentPlayer = '';
    }

    
    let isTie = true;
    for (let row of board) {
      for (let cell of row) {
        if (cell === '') {
          isTie = false;
        }
      }
    }
  
    if (isTie) {
      return win.innerHTML = `It's a tie`;
    }
    
}

