require('./app.js')
require('./events.js')
require('./api.js')

// on page load
$(function () {
  $('table').hide()
  let player = 1
  const table = $('table')
  const messages = $('.messages')
  const turn = $('.turn')
  turn.html('')
  messages.html('You must sign in or sign up to play this game')
  let moveCount = 0

  // click on board piece, checks for win or draw or if piece has a value
  $('td').click(function () {
    const td = $(this)
    const state = getState(td) // Checks if board piece has already been taken

    if (!state) {
      const pattern = playerPiece(player) // selects player and assigns player a piece X or O
      moveCount++
      changeState(td, pattern) // Checks if board piece has already been taken
      if (checkForWin(table, pattern)) { // Checks for win
        messages.html('Ninja ' + player + ' is the victor!!!')
        turn.html('')
        reset(table)
        nextPlayer(turn, player)
        moveCount = 0
      } else if (moveCount >= 9) { // Checks for draw
        messages.html('Match draw, pathetic!!!')
        turn.html('')
        reset(table)
        nextPlayer(turn, player)
        moveCount = 0
      } else {
        player = setNextPlayer(player) // let next player know its their turn
        nextPlayer(turn, player)
        messages.html('')
      }
    } else {
      messages.html('You\'re nindo is weak, try again!!!') // message sent if board piece was alreay taken
    }
  })
})
// Checks if board piece has already been taken
function getState (td) {
  if (td.hasClass('cross') || td.hasClass('circle')) {
    return 1
  } else {
    return 0
  }
}
// if empty adds the class to corresponding player
function changeState (td, pattern) {
  return td.addClass(pattern)
}
// selects player and assigns player a piece X or O
function playerPiece (player) {
  if (player === 1) {
    return 'cross'
  } else {
    return 'circle'
  }
}
// switches turns
function setNextPlayer (player) {
  if (player === 1) {
    return (player = 2)
  } else {
    return (player = 1)
  }
}
// sends message to page on who's turn it is
function nextPlayer (turn, player) {
  turn.html('Ninja ' + player + '\'s turn')
}
// check for win logic, looks for pattern equality in winning combinations
function checkForWin (table, pattern) {
  let won = 0
  if (table.find('.box1').hasClass(pattern) && table.find('.box2').hasClass(pattern) && table.find('.box3').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box1').hasClass(pattern) && table.find('.box4').hasClass(pattern) && table.find('.box7').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box1').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box4').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box6').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box7').hasClass(pattern) && table.find('.box8').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box2').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box8').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box3').hasClass(pattern) && table.find('.box6').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box3').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box7').hasClass(pattern)) {
    won = 1
  }
  return won
}
// for resetting table if win or draw occurs
function reset (table) {
  table.find('td').each(function () {
    $(this).removeClass('circle').removeClass('cross')
  })
}
